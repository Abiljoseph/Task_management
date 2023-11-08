import express from "express";
// import { connectDB } from "./config/database.js";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoutes from "./routes/authRoutes.js";
import taskRoutes from "./routes/taskRoutes.js";
import projectRoutes from "./routes/projectRoutes.js";

import cors from "cors";
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

// connectDB();
mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => {
    console.log("Database connected..!");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(3000, () => {
  console.log("server running on port 3000");
});

app.use("/auth", authRoutes);
app.use("/tasks", taskRoutes);
app.use("/projects", projectRoutes);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal serval Error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
