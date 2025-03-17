const express = require('express')
const app = express();

app.get('/multiply', (req,res)=>{      // input - localhost:3000/subtract?a=2&b=10
    let a = req.query.a;             //we use query
    let b = req.query.b;
    res.json({
        Answer: a * b
    })
})

app.get('/add/:firstArg/:secondArg', (req,res)=>{      // input - localhost:3000/add/10/256
    let a = parseInt(req.params.firstArg);          //we use params
    let b = parseInt(req.params.secondArg);
    res.json({
        Answer: a + b
    })
})

app.get('/divide', (req,res)=>{
    let a = req.query.a;
    let b = req.query.b;
    res.json({
        Answer: a / b
    })
})

app.get('/subtract', (req,res)=>{
    let a = parseInt(req.query.a);
    let b = parseInt(req.query.b);
    res.json({
        Answer: a - b
    })
})

app.listen(3000);