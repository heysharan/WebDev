const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();
const JWT_SECRET = 'mySecretPasswordFromVSCode'

app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/public/index.html`)
})

let users = [];

app.post('/signup', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    users.push({
        username,
        password,
        todos: []
    })

    res.json({
        message: 'Signed Up!'
    })

})

app.post('/signin', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const foundUser = users.find(u => u.username === username && u.password === password);

    if(foundUser){
        const token = jwt.sign({
            username
        }, JWT_SECRET);
        res.json({
            token
        })
    }
    else{
        res.json({
            message: 'Username or password is incorrect !'
        })
    }
})

const authUser = (req, res, next) => {
    const token = req.headers.token;
    try{
        const foundUser =jwt.verify(token, JWT_SECRET)
        req.username = foundUser.username;
        next();
    }
    catch(e){
        res.json({
            message: 'Invalid Token !'
        })
    }
}


const addTodo = (req, res) => {

}

const deleteTodo = (req, res) => {
    
}


app.post('/add-todo', authUser, addTodo)

app.post('/delete-todo', authUser, deleteTodo)

app.listen(3000);