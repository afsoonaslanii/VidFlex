// render-video.js
const { renderMedia } = require("@remotion/renderer");
const path = require("path");

const renderVideo = async () => {
  try {
    await renderMedia({
      serveUrl: "http://localhost:3000", // URL when Remotion is running
      composition: "YourComposition", // Replace with your composition name
      codec: "h264", // or 'vp8', 'vp9', 'h265'
      outputLocation: path.join(__dirname, "out", "video.mp4"), // Output path for the video
    });
    console.log("Video rendered successfully!");
  } catch (error) {
    console.error("Error rendering video:", error);
  }
};

renderVideo();
