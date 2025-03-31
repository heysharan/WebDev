import { Router } from "express";
import { userAuth } from "../middlewares/user.js";
import { purchaseModel,courseModel } from "../db.js";

const courseRouter = Router();

courseRouter.post("/purchase", userAuth, async (req, res) => {
  const userId = req.userId;
  const { courseId } = req.body;
  
  await purchaseModel.create({
    userId: userId,
    courseId: courseId
  })

  res.json({
    message: 'You have successfully purchased the course'
  })
});

courseRouter.get("/preview", async (req, res) => {
    
    const course = await courseModel.find({})


    res.json({
    course
  });
});

export { courseRouter };
