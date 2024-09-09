import express from "express";
const app = express();

import taskRouter from "./source/Router/taskRouter.js";
import cors from "cors";
// Static Serving
import path from "path";
const __dirname = path.resolve();
// Serve the static files
app.use(express.static(path.join(__dirname, "dist")));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "dist"), "index.html");
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
import morgan from "morgan";
// app.use(morgan("tiny"));
// app.use(morgan("combined"));

// Connect MongoDb
import { connectMongoDb } from "./source/Config/dbConfig.js";
connectMongoDb();

app.use("/api/v1/task", taskRouter);

app.listen(8000, (error) => {
  error ? console.log(error) : console.log(`http://localhost:8000`);
});
