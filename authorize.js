const authorize = (req, res, next) => {
    const { user } = req.query
    if (user === 'jake') {
        req.user = { name: 'jake', id: 3 }
        next()
    } else {
        res.status(401).send('Unautorized')
    }
}

module.exports = authorize