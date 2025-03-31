require('dotenv').config()
const express = require('express');
const { userModel, todoModel } = require('./db');
const { auth } = require('./auth')
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const z = require('zod');


mongoose.connect(process.env.MONGODB_URL)

const app = express();
app.use(express.json());

app.post('/signup', async (req, res) => {
    const { email, password, name } = req.body;

    const requiredBody = z.object({
        email: z.string().email(),
        password: z.string().regex(/(.*[A-Z]){2,}/, 'Password should contain atleast 2 uppercase letter')   //revise this, because refered gpt for answer
                            .regex(/[a-z]/, 'Password should contain atleast 1 lowercase letter')
                            .regex(/(.*[0-9]){3,}/, 'Password should contain atleast 3 number')
                            .regex(/[\W_]/, 'Password should contain atleast 1 special character'),
        name: z.string().min(2).max(100)
    })

    const userInput = await requiredBody.safeParse(req.body)

    if(!userInput.success){
        const error = userInput.error.issues.map((ele) => ele.message)
        res.status(409).send({
            message: "Invalid Format",
            error: error
        })
        return
    }

    const hashedPassword = await bcrypt.hash(password, 5);
    try{
        await userModel.create({
            email: email,
            password: hashedPassword,
            name: name
        })
        res.json({
            message: "You have Signed up!"
        })
    }catch(e){
        res.status(409).send({
            message: "User already exists"
        })
    }
    

})

app.post('/signin', async (req, res) => {
    const { email, password } = req.body;

    const user = await userModel.findOne({
        email: email
    })

    const userMatch = await bcrypt.compare(password, user.password)

    if(userMatch){
        const token = jwt.sign({
            id: user._id
        }, process.env.JWT_TOKEN)
        res.json({
            token
        })
    }else{
        res.json({
            message: 'Incorrect Credentials'
        })
    }
})


const addTodo = async (req, res) => {
    const { title, done } = req.body;
    const userId = req.userId;
    await todoModel.create({
        title: title,
        done: done,
        userId: userId
    })
    res.json({
        message: "Todo Added Successfully"
    })
}

const getAllTodo = async (req, res) => {
    const userId = req.userId;
    const response = await todoModel.find({
        userId: userId
    })

    console.log(response)
    res.json({
        todos: response.map((ele) => ({
            title: ele.title, 
            done: ele.done
        }))
    })
}


app.post('/todo', auth ,addTodo)

app.get('/todos', auth, getAllTodo)

app.listen(3000)


