import express from "express";
import path from "path";
const app = express();
const PORT = 3000;
try {

  app.use(express.static(path.join(__dirname, "../public")));
  app.get("/", (_req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
  app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
  });

} catch (error) {
  console.error("Error starting the server:", error);

}