  const express = require('express');
  const bodyParser = require('body-parser');
  const fs = require('fs');
  const app = express();
  
  app.use(bodyParser.json());
  
  let todos = [];
   
  app.get('/todos', (req, res)=> {
    fs.readFile(todos.json, 'utf-8', (err, data) => {
        if(err){
            res.status(404).send;
        }else{
            res.status(200).send(data);
        }
    })
  })

  app.get('/todos/:id', (req, res)=>{
    const todo = todos.find((t) => t.id === parseInt(req.params.id))
    if(!todo){
      res.status(404).send()
    }else{
      res.status(200).send(todo);
    }
  })

  app.post('/todos', (req, res)=>{
    const newTodo = {
      'id' : Math.floor(Math.random() * 1000000),
      'title' : req.body.title,
      'completed' : req.body.completed,
      'description' : req.body.description
    }
    todos.push(newTodo);
    res.status(201).json({"id" : newTodo.id})
  })

  app.put('/todos/:id', (req, res) => {
    const todoIndex = todos.findIndex((t) => t.id === parseInt(req.params.id))
    if(todoIndex === -1){
      res.status(404).send()
    }
    else{
      todos[todoIndex].title = req.body.title;
      todos[todoIndex].completed = req.body.completed;
    }
    res.status(200).send();
  })

  app.delete('todos/:id', (req, res) => {
    const todoIndex = todos.findIndex((t) => t.id === parseInt(req.params.id))
    if(todoIndex === -1){
      res.status(404).send()
    }
    else{
      todos.splice(todoIndex, 1);
      res.status(200).send()
    }
  })
  
  app.use((req, res) => {
    res.status(404).send()
  })

  app.listen(3000);