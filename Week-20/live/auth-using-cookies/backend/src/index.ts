import express from "express";
import cookieParser from 'cookie-parser'; // parses a very long cookie string and gets you a object
import cors from 'cors'
import jwt, { JwtPayload } from 'jsonwebtoken'; // JwtPayload is the type for jwt

const JWT_TOKEN = '12345Random'
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    credentials: true,
    origin: 'http://localhost:5173'
}))

app.post("/signin", (req, res) => {
    const { email, password } = req.body;
    const token = jwt.sign({
        id: 1
    }, JWT_TOKEN)
    res.cookie('token', token, {
        httpOnly: true,
        sameSite: "lax",
        secure: false,
        path: '/'
    });
    res.send('Logged in!') 
});

app.get("/user", (req, res) => {
    const cookie = req.cookies.token
    const decoded = jwt.verify(cookie, JWT_TOKEN) as JwtPayload;
    res.json({
        userId: decoded.id
    })
});

app.post("/logout", (req, res) => {
    res.clearCookie('token', {
        httpOnly: true,
        sameSite: "lax",
        secure: false
    });
    res.send('Logged out!')
});

app.listen(3000, () => {
    console.log('Server running on PORT 3000')
})