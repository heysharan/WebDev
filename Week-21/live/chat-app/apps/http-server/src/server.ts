import express from 'express'

const app = express();

app.get('/signup', (req, res) => {
    res.json({
        message: 'Hello'
    })
})
app.get('/signin', (req, res) => {
    res.json({
        message: 'Hello'
    })
})
app.get('/chat', (req, res) => {
    res.json({
        message: 'Hello'
    })
})
app.get('/healthcheck', (req, res) => {
    res.json({
        message: 'Hello'
    })
})

app.listen(3000, () => {
    console.log(`Server running on PORT 3000`)
})