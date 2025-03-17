import "dotenv/config";

import { Router } from "express";
import jsonwebtoken from "jsonwebtoken";
const jwt = jsonwebtoken;
import { z } from 'zod';
import bcrypt from "bcrypt";
import { userModel, purchaseModel } from "../db.js";
import { userAuth } from "../middlewares/user.js";

const userRouter = Router();
const JWT_SECRET_USER = process.env.JWT_SECRET_USER; // JWT_SECRET_USER this is for USER which should be differnt from JWT_SECRET_COURSE_CREATOR which is used for COURSE_CREATOR for security purpose

userRouter.post("/signup", async (req, res) => {
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
    await userModel.create({
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

userRouter.post("/signin", async (req, res) => {
  const { email, password } = req.body;
  const user = await userModel.findOne({
    email: email,
  });

  const verifiedUser = await bcrypt.compare(password, user.password);

  if (verifiedUser) {
    const token = jwt.sign(
      {
        id: user._id,
      },
      JWT_SECRET_USER
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

userRouter.get("/purchases", userAuth, async (req, res) => {
  const userId = req.userId;

  const purchases = await purchaseModel.find({
    userId
  })

  res.json({
    purchases
  })
});

export { userRouter };
