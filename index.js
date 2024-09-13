import express from "express";
import taskRoutes from "./routes/taskRoutes.js";
import cors from "cors";

const app = express();
const port = 3000;
const corsOptions = {
  origin: "*",
  credentials: true,
};
app.use(cors(corsOptions));
app.use(express.json());

app.use("/task", taskRoutes);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
