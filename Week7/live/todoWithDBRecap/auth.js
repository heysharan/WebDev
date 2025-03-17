const jwt = require('jsonwebtoken');


const auth = (req, res, next) => {
    const token = req.headers.token
    try{
        const response = jwt.verify(token, JWT_TOKEN)
        req.userId = response.id
        next()
    }catch(e){
        res.status(403).send({
            message: 'Invalid Token!'
        })
    }
}

module.exports = {
    auth: auth
}