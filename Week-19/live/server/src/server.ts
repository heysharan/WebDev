import express from 'express';
import cors from 'cors'

const app = express();

app.use(cors())

app.get('/user', (req, res) => {
    res.json({
        "name": "Sharan",
        "email": "me@sharan.com",
        "address": {
            "city": "Bengaluru",
            "state": "Karnataka",
            "houseNumber": "1"
        }
    })
})

app.listen(3000, () => {
    console.log('Server running on PORT 3000')
})