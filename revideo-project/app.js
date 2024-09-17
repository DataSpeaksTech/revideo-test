require("dotenv").config(); // Load environment variables from .env

const express = require("express");
const axios = require("axios");
const { renderVideo } = require("@revideo/renderer"); // Import the renderVideo function
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

// Route to render a video
app.post("/video/render", async (req, res) => {
  const { projectFile = "./src/project.ts", variables, settings } = req.body;

  try {
    console.log("Rendering video...");

    // Call the renderVideo function with provided parameters
    const outputFilePath = await renderVideo({
      projectFile,
      variables,
      settings: {
        ...settings, // Include any custom settings provided in the request
        ffmpeg: {
          ffmpegLogLevel: "error",
          ffmpegPath: "ffmpeg",
          ...(settings.ffmpeg || {}),
        },
        puppeteer: {
          headless: true,
          args: ["--no-sandbox", "--disable-setuid-sandbox"],
          ...(settings.puppeteer || {}),
        },
        // progressCallback: logProgressToConsole,
      },
    });

    console.log(`Rendered video to ${outputFilePath}`);

    // Upload the video to S3
    const bucketName = process.env.S3_BUCKET_NAME; // Use the S3 bucket name from the .env file
    const key = `videos/${Date.now()}_rendered_video.mp4`; // Define the S3 object key

    const s3Url = await uploadToS3(outputFilePath, bucketName, key);

    res
      .status(200)
      .json({ message: "Video rendered and uploaded successfully", s3Url });
  } catch (error) {
    console.error("Error rendering or uploading video:", error);
    res.status(500).json({
      message: "Failed to render or upload video",
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
