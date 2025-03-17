import "dotenv/config";
import jsonwebtoken from "jsonwebtoken";
const jwt = jsonwebtoken;

const JWT_SECRET_COURSE_CREATOR = process.env.JWT_SECRET_COURSE_CREATOR;

const courseCreatorAuth = (req, res, next) => {
  const token = req.headers.token;

  try {
    const decodedData = jwt.verify(token, JWT_SECRET_COURSE_CREATOR);
    req.courseCreatorId = decodedData.id;
    next();
  } catch (e) {
    res.status(403).send({
      message: "You are not signed in",
    });
  }
};

export { courseCreatorAuth };
