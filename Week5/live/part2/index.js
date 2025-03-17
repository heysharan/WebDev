// const express = require('express');
// const app = express();

// let requestCount = 0;

// const requestIncreaser = () =>{
//     requestCount++
//     console.log(`Total no of requests = ${requestCount}`)
// }
// app.get('/sum', (req, res)=>{
//     requestIncreaser();
//     const a = parseInt(req.query.a)
//     const b = parseInt(req.query.b)
//     res.json({
//         Answer: a + b
//     })
// })

// app.get('/multiply', (req, res)=>{
//     requestIncreaser();
//     const a = req.query.a
//     const b = req.query.b
//     res.json({
//         Answer: a * b
//     })
// })


// app.listen(3000);


// const express = require('express');
// const app = express();

// let requestCount = 0;

// const requestIncreaser = (req, res, next) =>{
//     requestCount++
//     console.log(`Total no of requests = ${requestCount}`)
//     req.name = 'RandomSharan'
//     next();
// }

// const realSumHandler = (req, res) => {
//         const a = parseInt(req.query.a)
//         const b = parseInt(req.query.b)
//         console.log(req.name)
//         res.json({
//             Answer: a + b
//         })
// }

// const realMultiplyHandler = (req, res) => {
//     const a = req.query.a
//     const b = req.query.b
//     res.json({
//         Answer: a * b
//     })
// }
// app.get('/sum', requestIncreaser, realSumHandler)   

// app.get('/multiply',requestIncreaser, realMultiplyHandler)

// app.listen(3000);

// const express = require('express');
// const app = express();

// app.use(express.json())

// let requestCount = 0;

// const requestIncreaser = (req, res, next) =>{
//     requestCount++
//     if(req.body.name === 'sharan'){
//         next();
//     }
//     else{
//         res.json({
//             msg: 'Access Denied'
//         })
//     }
    
// }

// const requestInformation = (req, res, next) => {
//     console.log(`URL is: ${req.url} \n Method is: ${req.method} \n Date is: ${new Date()}`)
//     next();
// }

// const realSumHandler = (req, res) => {
//         const a = parseInt(req.query.a)
//         const b = parseInt(req.query.b)
//         res.json({
//             Answer: a + b
//         })
// }

// const realSubtractHandler = (req, res) => {
//     const a = parseInt(req.query.a)
//     const b = parseInt(req.query.b)
//     res.json({
//         Answer: a - b
//     })
// }

// const realMultiplyHandler = (req, res) => {
//     const a = req.query.a
//     const b = req.query.b
//     res.json({
//         Answer: a * b
//     })
// }

// const realDivideHandler = (req, res) => {
//     const a = req.query.a
//     const b = req.query.b
//     res.json({
//         Answer: a - b
//     })
// }

// const adminHandler = (req, res) => {
//     res.json({
//         totalNoOfRequests: requestCount
//     })
// }



// app.get('/admin', adminHandler)

// app.use(requestInformation, requestIncreaser)

// app.get('/sum', realSumHandler)   

// app.get('/subtract', realSubtractHandler)

// app.get('/multiply', realMultiplyHandler)

// app.get('/divide', realDivideHandler)

// app.listen(3000);

// const express = require('express');
// const app = express();

// // Use express.json() middleware to parse JSON bodies
// app.use(express.json());

// // Define a POST route to handle JSON data
// app.post('/data', (req, res) => {
//   // Access the parsed JSON data from req.body
//   const data = req.body;
//   console.log('Received data:', data);

//   // Send a response
//   res.send('Data received');
// });

// app.listen(3000, () => {
//   console.log('Server running on port 3000');
// });

const express = require('express');

const app = express();

app.use(express.json())

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/public/index.html')
})

app.post('/sum', (req,res)=>{
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);
    
    res.json({
        answer: a + b
    })
})

app.listen(3000)