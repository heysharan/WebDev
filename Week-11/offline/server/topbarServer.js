import express from 'express';
import cors from 'cors';


const app = express();

app.use(cors());

app.get('/notifications', (req, res) => {
    res.json({
      network: 22,
      jobs: 22,
      messages: 22,
      notifications: 22  
    })
})



app.listen(3000)