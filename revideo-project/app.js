const express = require("express");
const axios = require("axios");
const { renderVideo } = require("@revideo/renderer"); // Correct import for renderVideo

const app = express();
const PORT = 3000;

app.use(express.json());

function logProgressToConsole(id, progress) {
  if ((progress * 100).toFixed(1) % 10 == 0) {
    console.log(`[${id}] Progress: ${(progress * 100).toFixed(1)}%`);
    axios
      .post("https://webhook.site/d2df2b6d-1033-4a8d-9138-3b11392a7aab", {
        id: id,
        progress: (progress * 100).toFixed(1),
      })
      .then((response) =>
        console.log(`Posted data successfully: ${response.data}`)
      )
      .catch((error) => console.error(`Failed to post data: ${error.message}`));
  }
}

app.post("/render", async (req, res) => {
  //   const { projectFile, variables, settings } = req.body;

  try {
    console.log("Rendering video...");

    // Call the renderVideo function with provided parameters
    const outputFilePath = await renderVideo({
      projectFile: "./src/project.ts",
      variables: { project_name: "Urban haats" },
      settings: {
        // logProgress: true,
        ffmpeg: {
          ffmpegLogLevel: "error",
          ffmpegPath: "ffmpeg",
        },
        puppeteer: {
          headless: true,
          args: ["--no-sandbox", "--disable-setuid-sandbox"],
        },
        progressCallback: logProgressToConsole,
      },
    });

    console.log(`Rendered video to ${outputFilePath}`);
    res
      .status(200)
      .json({ message: "Video rendered successfully", outputFilePath });
  } catch (error) {
    console.error("Error rendering video:", error);
    res
      .status(500)
      .json({ message: "Failed to render video", error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
