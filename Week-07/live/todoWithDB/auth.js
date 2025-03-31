const jwt = require('jsonwebtoken');


const auth = (req, res, next) => {
    const token = req.headers.token;
    try{
        const userId = jwt.verify(token, JWT_SECRET);
        req.userId = userId.id;
        next();
    }catch(e){
        res.status(403).send({
            message: 'Incorrent Credentials'
        })
    }
}

module.exports = {
    auth
}