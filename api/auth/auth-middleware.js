const Users = require('../Users/users-model')

function checkReqBody(req, res, next) {
    const { username, password } = req.body

    if (!username || !password) {
        res.json({ message: "username and password required" })
    } else {
        next()
    }
}

async function checkUsername(req, res, next) {
    try {
        const [user] = await Users.findBy({ username: req.body.username })
        if (user) {
            res.json({ status: 401, message: "username" })
        } else {
            req.user = user
            next()
        }
    } catch (err) {

    }
}

module.exports = {
    checkReqBody,
    checkUsername
}