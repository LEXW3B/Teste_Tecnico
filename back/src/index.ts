import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT;

app.get("/", (_req, res) => {
  res.send("Hello World, from node.js!!!!!");
});

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
