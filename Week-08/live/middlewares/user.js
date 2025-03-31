import "dotenv/config";
import jsonwebtoken from "jsonwebtoken";
const jwt = jsonwebtoken;

const JWT_SECRET_USER = process.env.JWT_SECRET_USER;

const userAuth = (req, res, next) => {
  const token = req.headers.token;

  try {
    const decodedData = jwt.verify(token, JWT_SECRET_USER);
    req.userId = decodedData.id;
    next();
  } catch (e) {
    res.status(403).send({
      message: "You are not signed in",
    });
  }
};

export { userAuth };
