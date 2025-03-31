require('dotenv').config()
const express = require('express');
const { UserModel, TodoModel } = require('./db') //importing theses models for db.js so that we can use these models to shove the data's into the database
const mongoose = require('mongoose');
const { auth } = require('./auth');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const z = require('zod');


mongoose.connect(process.env.MONGODB_URL) //connecting to the MongoDB database, along with connection string we should add the collection name in which we want to shove all the data, if it doesnt exists it will create a new one.

const app = express();

app.use(express.json());

app.post('/signup', async (req, res) => {
    
    const requiredBody = z.object({
        email: z.string().email(),
        password: z.string().regex(/(.*[A-Z]){2,}/, 'Password should contain atleast 2 uppercase letter')   //revise this, because refered gpt for answer
                            .regex(/[a-z]/, 'Password should contain atleast 1 lowercase letter')
                            .regex(/(.*[0-9]){3,}/, 'Password should contain atleast 3 number')
                            .regex(/[\W_]/, 'Password should contain atleast 1 special character'),
        name: z.string()
    })

    const parsedData = requiredBody.safeParse(req.body);    // success: true / data: Output / error?: never; parsedData will have access to these 3 things(success, data, error)



    if(!parsedData.success){
        const error = parsedData.error.issues.map((ele) => ele.message)
        res.status(409).send({
            message: "Invalid Format",
            error: error
        })
        return
    }
    
    const email = req.body.email;             
    const password = req.body.password;
    const name = req.body.name

    const hashedPassword = await bcrypt.hash(password, 5);  //hashes the plain password, 5: denotes the no of rounds the salts should iterate i.e, simply put the difficulty of the salt 
    
    try{
        await UserModel.create({    //we should await this because, this is a db call, it can fail due to any reasons
            email: email,           // creating an user
            password: hashedPassword,
            name: name
        })
        res.json({
            message: 'You have Signed Up!'
        })  
    }
    catch(e){
        res.status(409).send({    // 409: Has a conflict
            message: "User already exists"
        })
    }
})

app.post('/signin', async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    const user = await UserModel.findOne({
        email: email
    })

    if(!user){
        res.status(403).send({
            message: 'User not found!'
        })
    }

    const passwordMatch = await bcrypt.compare(password, user.password) //if the password matches it will return true or else false

    if(passwordMatch){
        const token = jwt.sign({
            id: user._id
        }, process.env.JWT_SECRET)
        res.json({
            token: token
        })

    }else{
        res.status(403).send({
            message: 'Incorrent Credentials'
        })
    }
    

})

const addTodo = async (req, res) => {
    const userId = req.userId;
    const title = req.body.title;
    const done = req.body.done;

    await TodoModel.create({
        title,
        userId,
        done
    })
    res.json({
        message: 'Todo created Successfully'
    })
}

const getTodo = async (req, res) => {
    const userId = req.userId;
    const todos = await TodoModel.find({
        userId
    })
    res.json({
        todos
    })
}

app.post('/todo', auth, addTodo)

app.get('/todos', auth, getTodo)

app.listen(3000)