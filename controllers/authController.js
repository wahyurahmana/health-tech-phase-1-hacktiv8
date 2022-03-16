const { User } = require('../models')
const bcrypt = require('bcryptjs');

class Controller {
    static getRegister(req, res){
        res.render('auth/regis')
    }

    static register(req, res){
        User.create(req.body)
        .then((result) => {
            res.send(result)
        }).catch((err) => {
            
        });
    }

    static getlogin(req, res){
        res.render('auth/login')
    }

    static login(req, res){
        let role
        let uname
        User.findOne({
            where : {
                username : req.body.username
            }
        })
        .then((result) => {
            role = result.role
            uname = result.username
            return bcrypt.compare(req.body.password, result.password)
        })
        .then((login)=>{
            req.session.isLoggedIn = true
            req.session.role = role
            req.session.username = uname
            console.log(req.session, 'dari auth');
            res.redirect('/')
        })
        .catch((err) => {
            res.send(err)
        });
    }
}

module.exports = Controller