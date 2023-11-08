import Project from "../models/projectModel.js";

export const createProject = async (req, res) => {
  try {
    const { name, description } = req.body;
    const project = new Project({ name, description });
    const savedProject = await project.save();
    res.json(savedProject);
  } catch (error) {
    res.status(500).json({ error: "Error creating the project" });
  }
};

export const getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (error) {
    res.status(500).json({ error: "Error fetching projects" });
  }
};

export const getProjectById = async (req, res) => {
  try {
    const project = await Project.findById(req.params.projectId);
    if (!project) {
      return res.status(404).json({ error: "Project not found" });
    }
    res.json(project);
  } catch (error) {
    res.status(500).json({ error: "Error fetching the project" });
  }
};

export const updateProjectById = async (req, res) => {
  try {
    const updatedProject = await Project.findByIdAndUpdate(
      req.params.projectId,
      req.body,
      { new: true }
    );
    if (!updatedProject) {
      return res.status(404).json({ error: "Project not found" });
    }
    res.json(updatedProject);
  } catch (error) {
    res.status(500).json({ error: "Error updating the project" });
  }
};

export const deleteProject = async (req, res) => {
  try {
    const deletedProject = await Project.findByIdAndRemove(
      req.params.projectId
    );
    if (!deletedProject) {
      return res.status(404).json({ error: "Project not found" });
    }
    res.json(deletedProject);
  } catch (error) {
    res.status(500).json({ error: "Error deleting the project" });
  }
};
