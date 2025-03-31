//create an http server

// const express = require('express')
// const app = express();


// const sum = (n) =>{
//     let ans = 1;
//     for(let i = 1; i <= n; i++){
//         ans *= i;
//     }
//     return ans;
// }


// app.get('/', (req, res) =>{
//    const n = req.query.n;
//    const ans = sum(n);
//    res.send(`Hi your ans is ${ans.toString()}`); 
// })



// app.listen(3000);

// const express = require('express');
// const app = express()

// app.use(express.json());

// let users = [{
//     firstName: 'John',
//     kidneys: [{
//         healthy: false
//     },
//     {
//         healthy: true
//     }]
// }]

// const atleastOneHealthyKidney = () => {
//     let atleastOneHealthyKidney = false;
//     for(let i = 0 ; i < users[0].kidneys.length ; i++){
//         if(users[0].kidneys[i].healthy){
//             atleastOneHealthyKidney = true;
//         }
//     }
//     return atleastOneHealthyKidney;
// }

// const atleastOneUnHealthyKidney = () =>{
//     let atleastOneUnHealthyKidney = false
//     for(let i = 0 ; i < users[0].kidneys.length ; i++){
//         if(!users[0].kidneys[i].healthy){
//             atleastOneUnHealthyKidney = true;
//         }
//     }
//     return atleastOneUnHealthyKidney;
// }

// app.get('/', (req,res) => {
//     const johnKidneys = users[0].kidneys;
//     const noOfKidneys = johnKidneys.length;
//     let noOfHealthyKidneys = 0;
//     for(let i = 0; i < noOfKidneys ; i++){
//         if(johnKidneys[i].healthy){
//             noOfHealthyKidneys += 1;
//         }
//     }
//     const noOfUnHealthyKidneys = noOfKidneys - noOfHealthyKidneys;
//     res.json({
//         noOfKidneys,
//         noOfHealthyKidneys,
//         noOfUnHealthyKidneys
//     })
// })

// app.put('/', (req, res) => {
//     if(!atleastOneHealthyKidney()){
//         const isHealthy = req.body.isHealthy;
//         users[0].kidneys.push({
//         healthy: isHealthy
//     })
//     res.json({
//         msg: 'New kidney added!'
//     })
//     } else {
//         res.status(411).json({
//             'msg' : 'You hava no unhealthy kidneys !'
//         })
//     }
    
// })



// app.delete('/', (req, res) => {
//     if(atleastOneUnHealthyKidney()){
//         let newKidney = [];
//         for(let i = 0 ; i < users[0].kidneys.length; i++){
//             if(users[0].kidneys[i].healthy){
//                 newKidney.push({
//                     healthy: true
//                 })
//             }
//         }
//         users[0].kidneys = newKidney;
//         res.json({
//             'msg' : 'Done!'
//         });
//     }else{
//         res.status(411).json({
//             'msg' : 'You have no Unhealthy Kidneys !'
//         });
//     }
// })


// app.listen(3000);



// const express = require('express');

// const app = express();


// let users = [{
//     firstName: 'John',
//     kidneys: [{
//         healthy: true
//     }, {
//         healthy: false
//     }]
// }]

// const atleastOneUnHealthyKidney = () =>{
//     let atleastOneUnHealthyKidney = false;
//     let noOfKidneys = users[0].kidneys.length;
//     for(let i = 0; i < noOfKidneys ; i++){
//         if(!users[0].kidneys[i].healthy){
//             atleastOneUnHealthyKidney = true
//         }
//     }
//     return atleastOneUnHealthyKidney;
// }

// app.use(express.json());

// app.get("/", (req, res) => {
//    const johnKidneys = users[0].kidneys;
//    const noOfKidneys = johnKidneys.length;
//    let noOfHealthyKidneys = 0;
//      for(let i = 0 ; i < noOfKidneys ; i++){
//     if(johnKidneys[i].healthy){
//         noOfHealthyKidneys++;
//     }
//    }

//    let noOfUnhealthyKidneys = noOfKidneys - noOfHealthyKidneys;
//    res.json({
//     noOfKidneys,
//     noOfHealthyKidneys,
//     noOfUnhealthyKidneys
//    })
// })

// app.post("/", (req, res) => {
//         const ishealthy = req.body.ishealthy;
//         users[0].kidneys.push({
//             healthy: ishealthy
//         })

//         res.json({
//             msg: 'New Kidney added !'
//         })
// })

// app.put("/", (req, res) => {
//     if(atleastOneUnHealthyKidney()){
//         for (let i = 0 ; i < users[0].kidneys.length ; i++){
//             users[0].kidneys[i].healthy = true
//     }
//     res.json({
//         msg: 'Done!'
//     })
//     }

//     else{
//         res.status(411).json({
//             msg: 'No Unhealthy Kidney'
//         })
//     }

    
// })

// app.delete("/", (req, res) => {
//     if(atleastOneUnHealthyKidney()){
//         let newKidney = [];
//         for(let i = 0 ; i < users[0].kidneys.length ; i++){
//             if(users[0].kidneys[i].healthy){
//                 newKidney.push({
//                     healthy: true
//                 })
//             }
//         }
    
//         users[0].kidneys = newKidney;
//         res.json({
//             msg: 'Done!'
//         })  
//     }

//     else{
//         res.status(411).json({
//             msg: 'No Unhealthy Kidneys'
//         })
//     }



    
// })


// app.listen(3000);


const express = require('express');
const app = express();

app.use(express.json())

let users = [{
    firstName: 'John',
    kidneys: [{
        healthy: true
    }, {
        healthy: false
    }]
}]


const atleastOneUnhealthyKidney = () =>{
    let atleastOneHealthyKidney = false;
    for(let i  = 0 ; i < users[0].kidneys.length; i++){
        if(!users[0].kidneys[i].healthy){
            atleastOneHealthyKidney = true;
        }
    }
    return atleastOneHealthyKidney;
}

app.get('/', (req,res)=>{
    const johnKidneys = users[0].kidneys;
    const noOfKidneys = johnKidneys.length;
    let noOfHealthyKidneys = 0;
    for(let i = 0; i < noOfKidneys; i++){
        if(johnKidneys[i].healthy){
            noOfHealthyKidneys += 1;
        }
    }

    let noOfUnHealthyKidneys = noOfKidneys - noOfHealthyKidneys;
    res.json({
        noOfKidneys,
        noOfHealthyKidneys,
        noOfUnHealthyKidneys
    })
})

app.post('/', (req,res)=>{
    const isHealthy = req.body.isHealthy
    users[0].kidneys.push({
        healthy: isHealthy
    })
    res.json({
        msg: 'New Kidney Added !'
    })
})


app.put('/', (req,res)=>{
    if(atleastOneUnhealthyKidney()){
        for(let i = 0; i < users[0].kidneys.length; i++){
            users[0].kidneys[i].healthy = true;
        }
        res.json({
            msg: 'Done !'
        })
    }

    else{
        res.status(411).json({
            msg: 'No Unhealthy Kidneys!'
        })
    }
})

app.delete('/', (req,res)=>{
    if(atleastOneUnhealthyKidney()){
        let newKidney = [];
        for(let i = 0; i < users[0].kidneys.length; i++){
            if(users[0].kidneys[i].healthy){
                newKidney.push({
                    healthy: true
                })
            }
        }
        users[0].kidneys = newKidney;

        res.json({
            msg: 'Done!'
        })
    }

    else{
        res.status(411).json({
            msg: 'No Unhealthy Kidney!'
        })
    }
    
})


app.listen(3000)