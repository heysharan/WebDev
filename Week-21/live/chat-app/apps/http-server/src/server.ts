import express from 'express'

const PORT = 3000
const app = express();

app.get('/signup', (req, res) => {
    res.json('Signup')
})

app.get('/sigin', (req, res) => {
    res.json('Signin')
})

app.get('/chat', (req, res) => {
    res.json('Chat')
})

app.get('/healthcheck', (req, res) => {
    res.json('Healthcheck')
})

app.get('/users', (req,res) => {
    res.json('users')
})

app.get('/admin',(req, res) => {
    res.json('admin')
} )

app.listen(PORT, () => {
    console.log(`Server running on PORT - ${PORT}`)
})