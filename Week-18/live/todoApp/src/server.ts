import express from 'express';
import { PrismaClient } from "./generated/prisma";
import argon2 from 'argon2';

const app = express();
app.use(express.json());
const client = new PrismaClient({
    log: ['query', 'info', 'warn', 'error']
})

app.post("/users/signup", async (req, res) => {
    const { firstName, username, password } = req.body
    const hashedPassword = await argon2.hash(password);
    await client.user.create({
        data: {
            firstName,
            username,
            password: hashedPassword
        }
    })
    res.json({
        message: 'User Signup !'
    })
})

app.get("/users", async (req, res) => {
    const users = await client.user.findMany()
    res.json({
        users
    })
})


app.post("/todos/add", async (req, res) => {
    const { title, description, done, userId } = req.body;
    await client.todo.create({
        data: {
            title,
            description,
            done,
            userId
        }
    })

    res.json({
        message: 'Todo added !'
    })
})

app.get("/todos/:id", async (req, res) => {
    const id = req.params.id;
    const todos = await client.user.findFirst({
        where: {
            id : Number(id)
        },
        select : {
            todos: true,
            firstName: true,
            username: true

        }
    })

    res.json({
        todos
    })
})

app.listen(3000, () => {
    console.log(`Server running on PORT 3000`)
})