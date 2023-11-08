import express from "express";
import {
  createProject,
  deleteProject,
  getAllProjects,
  getProjectById,
  updateProjectById,
} from "../controller/projectController.js";

const router = express.Router();

router.post("/", createProject);
router.get("/", getAllProjects);
router.get("/:projectId", getProjectById);
router.put("/:projectId", updateProjectById);
router.delete("/:projectId", deleteProject);

export default router;
