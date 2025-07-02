import express from "express";

const app = express();

app.get("/signup", (req, res) => {
});

app.get("/signin", (req, res) => {
});

app.get("/user", (req, res) => {
});

app.get("/logout", (req, res) => {
});



app.listen(3000, () => {
    console.log('Server running on PORT 3000')
})