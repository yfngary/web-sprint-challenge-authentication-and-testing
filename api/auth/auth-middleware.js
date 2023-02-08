const Users = require('../Users/users-model')

function checkReqBody(req, res, next) {
    const { username, password } = req.body

    if(!username || !password){
        res.json({message: "username and password required"})
    } else {
        next()
    }
}

module.exports = {
    checkReqBody,
    
}