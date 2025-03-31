// const express = require('express');

// const app = express();

// app.use(express.json())  // this will help parse any POST body contents


// const users = [];

// const generateToken = () => {
//    const options = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
//     'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 
//     '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
//    let token = ''; 
//    for(let i = 0 ; i < 32; i++){
//     token += options[Math.floor(Math.random() * options.length)]
//    }
//    return token; 

// }

// app.post("/signup", (req, res)=>{
//     const username = req.body.username;
//     const password = req.body.password;

//     users.push({
//         username: username,
//         password: password
//     })

//     res.json({
//         message: "You Are Signed Up !"
//     })

//     console.log(users)
// })

// app.post("/signin", (req, res)=>{
//     const username = req.body.username;
//     const password = req.body.password;

//     const foundUser = users.find(u => u.username === username && u.password === password)

//     if(foundUser) {
//         const token = generateToken();
//         foundUser.token = token;
//         res.json({
//             message: `Token: ${token}`
//         })
//     }
//     else{
//         res.status(403).send({
//             message: "Invalid Username or Password"
//         })
//     }

//     console.log(users)
// })

// app.listen(3000)






// const express = require('express');
// const jwt = require('jsonwebtoken');
// const JWT_SECRET = "randomStringForCodeBaseVSCode";
// const app = express();

// app.use(express.json());

// let users = [];


// app.post('/signup', (req, res) => {
//     const username = req.body.username;
//     const password = req.body.password;

//     users.push({
//         username: username,
//         password: password
//     })

//     console.log(users)

//     res.json({
//         message: 'You have Signed Up!'
//     })
// })

// app.post('/signin', (req, res) => {
//     const username = req.body.username;
//     const password = req.body.password;

//     const foundUser = users.find((u) => (u.username === username && u.password === password));

//     if(foundUser){
//         let token = jwt.sign({
//             username: username
//         }, JWT_SECRET)       // jwt.sign: takes two arguments, first one is what you to encode and the second one is the what you use to sign while creating this token

//         res.json({
//             message: `Token: ${token}`
//         })
//     }
//     else{
//         res.status(403).send({
//             message: 'Invalid Username or Password'
//         })
//     }

//     console.log(users)
// })

// app.get('/me', (req, res)=> {
//     const token = req.headers.authorization;
//     const decodedInfo = jwt.verify(token, JWT_SECRET)
    
//     const username = decodedInfo.username;

//     const foundUser = users.find(u => u.username === username);

//     if(foundUser) {
//         res.json({
//             username: foundUser.username,
//             password: foundUser.password
//         })
//     }
//     else{
//         res.status(403).send({
//             message: 'Invalid token !'
//         })
//     }
// })
// app.listen(3000);







// const express = require('express');
// const app = express();
// const jwt = require('jsonwebtoken');
// const JWT_SECRET = 'thisIsATestJwtSecretForDevelopment'

// app.use(express.json());

// let users = [];

// app.post('/signup', (req,res) => {
//     const username = req.body.username;
//     const password = req.body.password;

//     users.push({
//         username,           //if the key and value have the same variable name, we can use a short hand (i.e., just mention the variable name once like this) 
//         password
//     })

//     res.json({
//         message: 'You have Signed Up!'
//     })
// })

// app.post('/signin', (req,res) => {
//     const username = req.body.username;
//     const password = req.body.password;

//     const foundUser = users.find(u => u.username === username && u.password === password);

//     if(foundUser){
//         const token = jwt.sign({
//             username
//         }, JWT_SECRET);

//         res.json({
//             message: `Token: ${token}`
//         })
//     }
// })

// const auth = (req, res, next) => {
//     const token = req.headers.authorization;

//     try {
//         const decodedData = jwt.verify(token, JWT_SECRET);
//         req.username = decodedData.username;
//         next();
//     }
//     catch(error) {
//         res.status(403).send({
//             message: 'You are not logged in'
//         })
//     }
// }    

// const userInfo = (req, res) => {

//     const foundUser = users.find(u => u.username === req.username);
//     res.json({
//         username: foundUser.username,
//         password: foundUser.password
//     })
// }

// app.get('/me', auth, userInfo)

// app.listen(3000);






// const express = require('express');
// const app = express();
// const jwt = require('jsonwebtoken');
// const JWT_SECRET = 'thisIsATestJwtSecretForDevelopment'

// app.use(express.json());

// let users = [];


// app.get('/', (req,res) => {
//     res.sendFile(`${__dirname}/public/index.html`); //__dirname : (global variable) it holds the current directory
// })


// app.post('/signup', (req,res) => {
//     const username = req.body.username;
//     const password = req.body.password;

//     users.push({
//         username,           //if the key and value have the same variable name, we can use a short hand (i.e., just mention the variable name once like this) 
//         password
//     })

//     res.json({
//         message: 'You have Signed Up!'
//     })
// })

// app.post('/signin', (req,res) => {
//     const username = req.body.username;
//     const password = req.body.password;

//     const foundUser = users.find(u => u.username === username && u.password === password);

//     if(foundUser){
//         const token = jwt.sign({
//             username
//         }, JWT_SECRET);

//         res.json({
//             token
//         })
//     }
// })

// const auth = (req, res, next) => {
//     const token = req.headers.authorization;

//     try {
//         const decodedData = jwt.verify(token, JWT_SECRET);
//         req.username = decodedData.username;
//         next();
//     }
//     catch(error) {
//         res.status(403).send({
//             message: 'You are not logged in'
//         })
//     }
// }    

// const userInfo = (req, res) => {

//     const foundUser = users.find(u => u.username === req.username);
//     res.json({
//         username: foundUser.username,
//         password: foundUser.password
//     })
// }

// app.get('/me', auth, userInfo)

// app.listen(3000);



const express = require('express');
const jwt = require('jsonwebtoken')

const app = express();
const JWT_SECRET = 'mySecretPasswordFromVSCode'

app.use(express.json())

let users = [];

app.get('/', (req,res)=> {
    res.sendFile(`${__dirname}/public/index.html`)
})

app.post('/signup', (req, res)=> {
    const username = req.body.username;
    const password = req.body.password;

    users.push({
        username,
        password
    })

    res.json({})
    console.log(users)

})

app.post('/signin', (req, res)=> {
    const username = req.body.username;
    const password = req.body.password;

    const foundUser = users.find(u => u.username === username && u.password === password)

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
            message: 'Invalid Username or Password!'
        })
    }

})

const auth = (req, res, next) => {
    
    const token = req.headers.token;
    try{
        const decodedData = jwt.verify(token, JWT_SECRET);
        req.username = decodedData.username;
        next()
    }
    catch(e){
        res.status(403).send({
            message: 'You are not logged in!'
        })
    }
}

const userInfo = (req, res) => {

    const foundUser = users.find(u => u.username === req.username);
    if(foundUser){
        res.json({
            username: foundUser.username,
            password: foundUser.password
        })
    }
}

app.get('/me', auth, userInfo)


app.listen(3000)
