const Users = require('../Users/users-model')

function checkReqBody(req, res, next) {
    const { username, password } = req.body

    if (!username || !password) {
        res.json({ message: "username and password required" })
    } else {
        next()
    }
}

const checkUsername = async (req, res, next) => {
    try {
        const [user] = await Users.findBy({ username: req.body.username })
        const findUser = Users.findById(user)
        if (!findUser) {
            res.json({ status: 401, message: "username taken" })
        } else {
            req.user = findUser
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