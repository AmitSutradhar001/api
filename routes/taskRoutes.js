import { Router } from "express";
import {
  allTask,
  createTask,
  editTask,
  deleteTask,
  markedTask,
} from "../controllers/taskControllers.js";

const taskRoutes = Router();

taskRoutes.get("/", allTask);
taskRoutes.post("/", createTask);
taskRoutes.put("/:id", editTask);
taskRoutes.put("/marked/:id", markedTask);
taskRoutes.delete("/:id", deleteTask);

export default taskRoutes;
