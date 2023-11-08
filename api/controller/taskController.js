import Task from "../models/taskModel.js";
import { errorHandler } from "../utils/error.js";

export const createTask = async (req, res) => {
  try {
    const { taskName, description, deadline, project } = req.body;
    const newTask = new Task({ taskName, description, deadline, project });
    const createdTask = await newTask.save();
    res.status(201).json(createdTask);
  } catch (error) {
    res.status(500).json({ error: "Error creating the task" });
  }
};

export const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find().populate("project");
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: "Error fetching tasks" });
  }
};

export const updateTask = async (req, res) => {
  try {
    const updatedTask = await Task.findByIdAndUpdate(
      req.params.taskId,
      req.body,
      { new: true }
    );
    if (!updatedTask) {
      return res.status(404).json({ error: "Task not found" });
    }
    res.json(updatedTask);
  } catch (error) {
    res.status(500).json({ error: "Error updating the task" });
  }
};

export const deleteTask = async (req, res) => {
  try {
    const deletedTask = await Task.findByIdAndRemove(req.params.taskId);
    if (!deletedTask) {
      return res.status(404).json({ error: "Task not found" });
    }
    res.json(deletedTask);
  } catch (error) {
    res.status(500).json({ error: "Error deleting the task" });
  }
};

export const getTaskById = async (req, res) => {
  try {
    const task = await Task.findById(req.params.taskId).populate("project");
    if (!task) {
      return res.status(404).json({ error: "Task not found" });
    }
    res.json(task);
  } catch (error) {
    res.status(500).json({ error: "Error fetching the task" });
  }
};
