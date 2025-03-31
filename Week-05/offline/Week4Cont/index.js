// // const express = require('express');

// // const app = express();

// // app.use(express.json())

// // const isOldEnough = (age) => {
// //     if(age >= 14){
// //         return true
// //     }
// //     else {
// //         return false
// //     }
// // }

// // app.get('/ride1' , (req, res)=>{
// //     if(isOldEnough(req.body.age)){
// //         res.json({
// //             msg: 'You have successfully riden the ride 1'
// //         }) 
// //     }
// //     else {
// //         res.status(422).json({
// //             msg: "Conflict: Age does not satisfy the required condition."
// //         })   //Recommendation -- If validating user input: Use 400 or 422. / If enforcing permissions or access rules: Use 403. / If there is a state conflict: Use 409.
// //     }
// // })

// // app.get('/ride2' , (req, res)=>{
// //     if(isOldEnough(req.body.age)){
// //         res.json({
// //             msg: 'You have successfully riden the ride 2'
// //         }) 
// //     }
// //     else {
// //         res.status(422).json({
// //             msg: "Conflict: Age does not satisfy the required condition."
// //         })   //Recommendation -- If validating user input: Use 400 or 422. / If enforcing permissions or access rules: Use 403. / If there is a state conflict: Use 409.
// //     }
// // })

// // app.listen(3000);

// const express = require('express');

// const app = express();

// app.use(express.json())


// const isOldEnoughMiddleware = (req, res, next) => {
//     if(req.body.age >= 14){
//         next();
//     }
//     else {
//         res.status(422).json({
//             msg: "Age does not satisfy the required condition."
//         }) 
//     }
// }

// app.get('/ride1' , isOldEnoughMiddleware, (req, res)=>{   // this is the final middleware i.e., its just suppose to help users go though the ride, not verify, that is done using the middleware
//     res.json({
//         msg: 'You have successfully riden the ride 1'
//     })
// })

// app.get('/ride2' , isOldEnoughMiddleware, (req, res)=>{
//     res.json({
//         msg: 'You have successfully riden the ride 2'
//     })
// })

// app.listen(3000);

// const express = require('express');
// const app = express();
// const VALID_API_KEY = '100xdevs_cohort3_super_secret_valid_api_key'; // key is 100xdevs-api-key use that API key for authenticate user


// // Middleware to check for a valid API key
// function authenticateAPIKey(req, res, next) {
//     if(req.query.API === VALID_API_KEY){
//         next();
//     }
//     else{
//         res.status(403).json({
//             msg: 'Invalid or missing API key'
//         })
//     }
// }

// app.use(authenticateAPIKey);

// app.get('/', (req, res) => {
//     res.status(200).json({ message: 'Access granted' });
// });

// app.listen(3000)

const express = require('express');
const app = express();


let numberOfRequestsForUser = {};
setInterval(() => {
    numberOfRequestsForUser = {};
}, 1000)

const rateLimit = (req, res, next)=>{
  const userId = req.header('user-id')
  if(numberOfRequestsForUser[userId]){
    numberOfRequestsForUser[userId]++
    if(numberOfRequestsForUser[userId] > 5){
      res.status(404).json({})
    }else{
      next()
    }
  }else{
    numberOfRequestsForUser[userId] = 1;
    next();
  }
}

app.use(rateLimit);

app.get('/user', function(req, res) {
  res.status(200).json({ name: 'john' });
});

app.post('/user', function(req, res) {
  res.status(200).json({ msg: 'created dummy user' });
});

app.listen(3000)
