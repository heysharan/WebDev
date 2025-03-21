import "dotenv/config";
import express from "express";
import { connect } from "mongoose";
import { userRouter } from "./routes/user.js";
import { courseRouter } from "./routes/course.js";
import { courseCreatorRouter } from "./routes/courseCreator.js";

const app = express();

const PORT = process.env.PORT;
const MONGODB_URL = process.env.MONGODB_URL;

app.use(express.json());    // we should use this, when user sends data in the body

app.use("/api/v1/user", userRouter);
app.use("/api/v1/course-creator", courseCreatorRouter);
app.use("/api/v1/course", courseRouter);

const main = async () => {
  await connect(MONGODB_URL)
    .then(() => console.log("Connected to MongoDB"))
    .catch((e) => console.error("MongoDb connection error", e));
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

main();
