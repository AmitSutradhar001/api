import { connect, model } from "mongoose";
import "dotenv/config";
import taskModel from "./taskModel.js";

const MONGODB_URL = process.env.MONGODB_URL;
try {
  connect(MONGODB_URL).then(() => console.log("DataBase Connected!"));
} catch (error) {
  console.log(error.massage);
}
export const Task = model("Task", taskModel);
