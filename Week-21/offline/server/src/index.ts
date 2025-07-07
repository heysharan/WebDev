import express from 'express'
import cors from 'cors'

const app = express();
app.use(cors());

interface Todo {
    id: number,
    title: string,
    description: string,
    completed: boolean
}

let todos: Todo[] = []

const generateTodos = (count: number) => {
    todos = Array.from({ length: count }, (_, idx) => {
        const n = idx + 1;
        return {
            id: n,
            title: `Todo ${n}`,
            description: `This is Todo ${n}`,
            completed: n % 2 === 0 ? true : false
        }
    })
}


let count: number
let lastcount: number = -1

app.get('/todos', (req, res) => {

    do {
        count = Math.floor(Math.random() * 100)
    } while (count === lastcount)
    lastcount = count

    generateTodos(count)
    res.json({
        todos: todos,
        count: count
    })
})

app.listen(3001, () => {
    console.log("Server running on PORT 3001")
})