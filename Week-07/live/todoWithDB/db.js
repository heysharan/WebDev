const mongoose = require('mongoose');   //importing the library 

const Schema = mongoose.Schema;  // mongoose exports a class called Schema, which can be used for defining the Schema for application
const ObjectId = mongoose.ObjectId; // imports the ObjectId type from Mongoose, ObjectId is a special type used for unique identifiers in MongoDB

const User = new Schema({   // blueprint for the user collection 
    email: {type: String, unique: true },  // type of email is string and we are also saying that all the emails should be unique
    password: String,
    name: String
})
 
const Todo = new Schema({  // blueprint for the todo collection
    title: String,
    done: Boolean,
    userId: ObjectId
})

/* In Mongoose, a model is like a bridge between your MongoDB collection and your JavaScript code. It lets you interact with the database using easy-to-use functions instead of raw queries.
For example, if you define a UserModel, you can use it to create, read, update, and delete user records in the database without writing complex MongoDB commands. */


const UserModel = mongoose.model('users', User);  //'users': this is the collection I want to put the data into, 'User': this is structure (Schema) of the data I want to put in
const TodoModel = mongoose.model('todos', Todo);

module.exports = {                  // exporting an object, so that I can import these in different files
    UserModel: UserModel,
    TodoModel: TodoModel
}

