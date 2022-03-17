const isLoggedInFalse = (req, res, next) => {
    if (!req.session.isLoggedIn) {
        next()
    }else{
        res.redirect('/')
    }
}

module.exports = isLoggedInFalse