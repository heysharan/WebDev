// import express from 'express'
// import cors from 'cors'

// const app = express();
// app.use(cors());

// interface Todo {
//     id: number,
//     title: string,
//     description: string,
//     completed: boolean
// }

// let todos: Todo[] = []

// const generateTodos = (count: number) => {
//     todos = Array.from({ length: count }, (_, idx) => {
//         const n = idx + 1;
//         return {
//             id: n,
//             title: `Todo ${n}`,
//             description: `This is Todo ${n}`,
//             completed: n % 2 === 0 ? true : false
//         }
//     })
// }


// let count: number
// let lastcount: number = -1

// app.get('/todos', (req, res) => {

//     do {
//         count = Math.floor(Math.random() * 100)
//     } while (count === lastcount)
//     lastcount = count

//     generateTodos(count)
//     res.json({
//         todos: todos,
//         count: count
//     })
// })

// app.listen(3001, () => {
//     console.log("Server running on PORT 3001")
// })


import express from 'express'
import jwt from 'jsonwebtoken'

const app = express();

let requestCount = 0;

app.use(
    function middleware(req, res, next) {
        requestCount++;
        next();
    }
)

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/token', (req, res) => {
    const token = jwt.sign({
        id: requestCount
    }, 'JWT_Secret')
    res.json({
        token: token
    })
})

app.use(
    async function authMiddleware(req, res, next) {
        const token = req.headers.token;
        if (typeof (token) !== 'string') {
            res.status(404).json({ error: 'Token missing or invalid' })
            return
        }
        try {
            await jwt.verify(token, 'JWT_Secret')
            next();
        }catch(e){
            res.status(404).json({ error: 'Invalid or expired token' })
        }
    }
)

app.get('/requestCount', (req, res) => {
    res.json({
        requestCount
    })
})

app.listen(3000, () => {
    console.log("Server running on PORT 3000")
})