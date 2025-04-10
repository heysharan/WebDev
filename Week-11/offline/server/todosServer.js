import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());

const TODOS = [{
    id: 1,
    title: '1. Go to the Gym',
    description: 'Going to the gym regularly is good for health',
    completed: true
},{
    id: 2,
    title: '2. Go to the Bank',
    description: 'Go to the bank and deposit the DD',
    completed: true  
}]

app.get('/todos/:id', (req, res) => {
    const id = req.params.id;  // id = is a string 
    const currentTodo = TODOS.find(x => x.id == id)
    res.json(currentTodo)
})


app.listen(3000)