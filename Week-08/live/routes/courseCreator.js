import { Router } from "express";
import jsonwebtoken from "jsonwebtoken";
const jwt = jsonwebtoken;
import { z } from 'zod';
import bcrypt from "bcrypt";
import { courseCreatorModel, courseModel } from "../db.js";
import { courseCreatorAuth } from "../middlewares/courseCreator.js"

const courseCreatorRouter = Router();
const JWT_SECRET_COURSE_CREATOR = process.env.JWT_SECRET_COURSE_CREATOR;   // JWT_SECRET_COURSE_CREATOR this is for COURSE_CREATOR which should be different from JWT_SECRET_USER which is used for USER for security purpose

courseCreatorRouter.post("/signup", async (req, res) => {
    const requiredBody = z.object({
        email: z.string().email(),
        password: z.string()
          .regex(/[A-Z]/, "Password should have atleast 1 uppercase letter")
          .regex(/[a-z]/, "Password should have atleast 1 lowercase letter")
          .regex(/[0-9]/, "Password should have atleast 1 number")
          .regex(/[\W_]/, "Password should have atleast 1 special character")
          .min(10)
          .max(20),
        firstName: z.string().min(2).max(100),
        lastName: z.string().min(2).max(100),
      });
    
      const response = await requiredBody.safeParse(req.body)
    
      if (!response.success) {
        const error = response.error.issues.map(e => ({
            field: e.path,
            error: e.message
        }));
        res.status(409).send({
          error: error,
        });
        return;
      }
    
      const { email, password, firstName, lastName } = req.body;
    
      const hashedPassword = await bcrypt.hash(password, 5);
    
      try {
        await courseCreatorModel.create({
          email: email,
          password: hashedPassword,
          firstName: firstName,
          lastName: lastName,
        });
        res.json({
          message: `${firstName}, you have signed up successfully!`,
        });
      } catch (e) {
        res.status(409).send({
          message: "User already exists",
        });
      }
});

courseCreatorRouter.post("/signin", async (req, res) => {
  const { email, password } = req.body;
  const courseCreator = await courseCreatorModel.findOne({
    email: email,
  });

  const verifiedCourseCreator = await bcrypt.compare(password, courseCreator.password);

  if (verifiedCourseCreator) {
    const token = jwt.sign(
      {
        id: courseCreator._id,
      },
      JWT_SECRET_COURSE_CREATOR
    );
    res.json({
      token,
    });
  }
  else{
    res.status(403).send({
        message: 'Invalid credentials'
    })
  }
});

// I should add a adminMiddleware here which allows only the authenticated admins to access the below endpoints
courseCreatorRouter.post("/course", courseCreatorAuth, async (req, res) => {
  const courseCreatorId = req.courseCreatorId;

  const { title, description, price, imageUrl } = req.body;

  const course = await courseModel.create({
    title: title,
    description: description,
    price: price,
    imageUrl: imageUrl,
    courseCreatorId: courseCreatorId
  })

  res.json({
    message: 'Course created successfully',
    courseId: course._id
  })

});   // course-creator can create a new course

courseCreatorRouter.put("/course", courseCreatorAuth, async (req, res) => {
  const courseCreatorId = req.courseCreatorId;

  const { title, description, price, imageUrl, courseId } = req.body;

  const foundCourse = await courseModel.findOne({
    _id: courseId,
    courseCreatorId: courseCreatorId
  })

  if(!foundCourse){
    res.status(403).send({
      message: 'You dont have access to this course'
    })
    return
  }

  const course = await courseModel.updateOne({    // updateOne() requires a filter condition, which specifies the criteria for updating documents. In this case, the update should be based on the _id of the course from the above query.
    _id: courseId,
    courseCreatorId: courseCreatorId          // this condition makes sure that, updating of course infomation is only done by the person who created this course, and not by any other course-creators                   
  }, // condition
  {
    title: title,
    description: description,
    price: price,
    imageUrl: imageUrl
  }) //update fields

  res.json({
    message: 'Course updated successfully',
    courseId: course._id
  })
}); //to edit any particulars of a course that the courseCreator has created
  
courseCreatorRouter.get("/course/bulk", courseCreatorAuth, async (req, res) => {   
  const courseCreatorId = req.courseCreatorId;

  const courses = await courseModel.find({
    courseCreatorId: courseCreatorId
  });

  res.json({
    message: "All the courses are",
    courses: courses
  })
}); //to get all the courses that the courseCreator has created

export { courseCreatorRouter };
