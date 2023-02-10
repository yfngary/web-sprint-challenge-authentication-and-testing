const Users = require('../Users/users-model')

function checkReqBody(req, res, next) {
    const { username, password } = req.body

    if (!username || !password) {
        res.status(400).json({ message: "username and password required" })
    } else {
        next()
    }
}

const checkUsername = async (req, res, next) => {
    try {
        const user = await Users.findByUsername(req.body.username)

        if (user) {
            res.status(400).json({message: "username taken" })
        } else {
            next()
        }
    } catch (err) {
        next(err)
    }
}

module.exports = {
    checkReqBody,
    checkUsername
}