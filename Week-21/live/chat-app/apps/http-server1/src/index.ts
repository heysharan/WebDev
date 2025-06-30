import express from 'express'
import { NUMBER } from '@repo/common/src' 

const app = express();

console.log(NUMBER)

app.get('/signup', (req, res) => {
    res.json({
        message: 'Signup'
    })
})

app.get('/signin', (req, res) => {
    res.json({
        message: 'Signin'
    })
})

app.listen(3010, () => {
    console.log('Server runnig on PORT 3010')
})