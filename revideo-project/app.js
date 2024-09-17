require("dotenv").config(); // Load environment variables from .env

const express = require("express");
const axios = require("axios");
const AWS = require("aws-sdk");
const fs = require("fs"); // Import fs for file handling

const app = express();

// Middleware setup
app.use(express.json());

const port = 4000;

// AWS S3 configuration
const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

// AWS Lambda configuration
const lambda = new AWS.Lambda({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

// Function to invoke Lambda
async function invokeLambda(jobId, numWorkers, jobType, variables) {
  const params = {
    FunctionName: "revideo-test",
    Payload: JSON.stringify({
      jobId,
      numWorkers,
      jobType,
      variables,
    }),
  };

  try {
    const result = await lambda.invoke(params).promise();
    const responsePayload = JSON.parse(result.Payload);
    return responsePayload;
  } catch (error) {
    throw new Error(`Failed to invoke Lambda: ${error.message}`);
  }
}

// Function to upload a file to S3
function uploadToS3(filePath, bucketName, key) {
  return new Promise((resolve, reject) => {
    const fileStream = fs.createReadStream(filePath);

    const params = {
      Bucket: bucketName,
      Key: key,
      Body: fileStream,
    };

    s3.upload(params, (err, data) => {
      if (err) {
        reject(err);
      } else {
        console.log(`File uploaded successfully to ${data.Location}`);
        resolve(data.Location);
      }
    });
  });
}

// Function to log progress and post updates to a webhook
function logProgressToConsole(id, progress) {
  if ((progress * 100).toFixed(1) % 10 === 0) {
    // Log every 10% progress
    console.log(`[${id}] Progress: ${(progress * 100).toFixed(1)}%`);
    axios
      .post(process.env.WEBHOOK_URL, {
        id: id,
        progress: (progress * 100).toFixed(1),
      })
      .then((response) =>
        console.log(`Posted data successfully: ${response.data}`)
      )
      .catch((error) => console.error(`Failed to post data: ${error.message}`));
  }
}

// Route to render a video using Lambda
app.post("/video/render", async (req, res) => {
  const {
    jobId = "12345",
    numWorkers = 25,
    jobType = "fullRender",
    variables,
  } = req.body;

  try {
    console.log("Invoking Lambda for video render...");

    // Invoke Lambda function
    const lambdaResponse = await invokeLambda(
      jobId,
      numWorkers,
      jobType,
      variables
    );

    if (lambdaResponse.statusCode !== 200) {
      throw new Error("Failed to render video via Lambda.");
    }

    const resultUrl = JSON.parse(lambdaResponse.body).resultUrl;
    console.log(`Rendered video available at ${resultUrl}`);

    res.status(200).json({ message: "Video rendered successfully", resultUrl });
  } catch (error) {
    console.error("Error rendering video using Lambda:", error);
    res.status(500).json({
      message: "Failed to render video using Lambda",
      error: error.message,
    });
  }
});

// Basic route to check if the server is running
app.get("/video", (req, res) => {
  res.send("Hello World");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Export the app for use in other files
module.exports = app;
