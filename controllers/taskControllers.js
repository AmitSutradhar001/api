import { Task } from "../data/mongoDB.js";

// Get all tasks
export const allTask = async (req, res) => {
  try {
    const tasks = await Task.find();
    return res.status(200).json(tasks);
  } catch (error) {
    return res.status(500).json({ message: "Server Error" });
  }
};

// Create a new task
export const createTask = async (req, res) => {
  try {
    const { title, description } = req.body;

    if (!title || !description) {
      return res.status(400).json({ message: "Invalid data" });
    }

    const newTask = new Task({ title, description });
    await newTask.save();

    return res.status(201).json(newTask);
  } catch (error) {
    return res.status(500).json({ message: "Server Error" });
  }
};

export const editTask = async (req, res) => {
  const taskId = req.params.id;
  const { title, description, marked } = req.body;

  try {
    const task = await Task.findById(taskId);

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    // Update the task fields
    if (title !== undefined) task.title = title;
    if (description !== undefined) task.description = description;
    if (marked !== undefined) task.marked = marked;

    await task.save();

    return res.status(200).json(task);
  } catch (error) {
    return res.status(500).json({ message: "Server Error" });
  }
};

export const markedTask = async (req, res) => {
  const taskId = req.params.id;
  const { marked } = req.body;

  try {
    const task = await Task.findById(taskId);

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    // Update the marked field
    if (marked !== undefined) task.marked = marked;

    await task.save();

    return res.status(200).json(task);
  } catch (error) {
    return res.status(500).json({ message: "Server Error" });
  }
};

// Delete a task
export const deleteTask = async (req, res) => {
  try {
    const taskId = req.params.id;

    const deletedTask = await Task.findByIdAndDelete(taskId);

    if (!deletedTask) {
      return res.status(404).json({ message: "Task not found" });
    }

    return res.status(204).send(); // No content to return after deletion
  } catch (error) {
    return res.status(500).json({ message: "Server Error" });
  }
};
