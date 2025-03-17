import { Schema, model, Types } from "mongoose"; // ObjectId should come from mongoose.Schema.Types, not directly from mongoose. ✅ Fix: Use Schema.Types.ObjectId instead.

const userSchema = new Schema({
  email: { type: String, unique: true },
  password: String,
  firstName: String,
  lastName: String,
});

const courseCreatorSchema = new Schema({
  email: { type: String, unique: true },
  password: String,
  firstName: String,
  lastName: String,
});

const courseSchema = new Schema({
  title: String,
  description: String,
  price: Number,
  imageUrl: String,
  courseCreatorId: [{ type: Types.ObjectId, ref: "courseCreator" }], //ObjectId is a part of Types in Mongoose,  we are using the ref to tell that this ObjectId is from courseCreator collection
});

const purchaseSchema = new Schema({
  courseId: [{ type: Types.ObjectId, ref: "course" }], // ObjectId is a part of Types in Mongoose, we are using the ref to tell that this ObjectId is from course collection
  userId: [{ type: Types.ObjectId, ref: "user" }], // ObjectId is a part of Types in Mongoose, we are using the ref to tell that this ObjectId is from user collection
});

const userModel = model("user", userSchema); //Mongoose automatically pluralizes collection names. i.e., user will become users, so it always better to name models in singular form
const courseCreatorModel = model("coursecreator", courseCreatorSchema);
const courseModel = model("course", courseSchema);
const purchaseModel = model("purchase", purchaseSchema);


export { userModel, courseCreatorModel, courseModel, purchaseModel };
