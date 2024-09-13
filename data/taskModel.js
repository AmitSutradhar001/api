import { Schema } from "mongoose";

const taskModel = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    marked: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export default taskModel;
