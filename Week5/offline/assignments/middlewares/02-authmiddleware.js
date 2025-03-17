
//  Implement an authentication middleware that checks for a valid API key in the request headers.

const express = require('express');
const app = express();
const VALID_API_KEY = '100xdevs_cohort3_super_secret_valid_api_key'; // key is 100xdevs-api-key use that API key for authenticate user


// Middleware to check for a valid API key
function authenticateAPIKey(req, res, next) {
    const userEnteredAPI = req.header('100xdevs-api-key')
    if( userEnteredAPI && userEnteredAPI === VALID_API_KEY){
// 1. apiKey
// Purpose: Checks whether the apiKey variable is defined (i.e., not undefined, null, or a falsy value).
// Reason: If the apiKey is not provided in the request header, this part of the condition ensures the code does not proceed to compare it with VALID_API_KEY. This prevents runtime errors caused by attempting to compare undefined with a string.
// 2. apiKey === VALID_API_KEY
// Purpose: Verifies if the provided API key matches the expected, valid key (VALID_API_KEY).
// Reason: Ensures that only clients with the correct API key can proceed to the next middleware or route handler.
       next();
    }
    else{
        res.status(401).json({
            message: 'Invalid or missing API key'
        })
    }
}

app.use(authenticateAPIKey);

app.get('/', (req, res) => {
    res.status(200).json({ message: 'Access granted' });
});

module.exports = app;


