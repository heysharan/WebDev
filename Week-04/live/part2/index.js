const express = require('express')
const app = express()  //create a fresh variable to perform actions


//route handlers
app.get('/', function (req, res) {   // [req] : to get the values from client [res] : to send any responce to client
  res.send('Hello World')
})


app.listen(3000) //port at which you want to listen