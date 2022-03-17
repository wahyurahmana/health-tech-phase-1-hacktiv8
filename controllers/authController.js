const { User } = require('../models')
const bcrypt = require('bcryptjs');

class Controller {
    static getRegister(req, res){
        res.render('auth/regis')
    }

    static register(req, res){
        User.create(req.body)
        .then((result) => {
            res.redirect('/auth/login')
        }).catch((err) => {
            res.send(err)
        });
    }

    static getlogin(req, res){
        res.render('auth/login')
    }

    static login(request, response){
        User.findOne({
            where : {
                username : request.body.username
            }
        })
        .then((result) => {
            if (result) {
                bcrypt.compare(request.body.password, result.password, function(err, res) {
                    if (res) {
                        console.log(result);
                        request.session.username = result.username
                        request.session.role = result.role
                        request.session.isLoggedIn = true
                        response.redirect('/')
                    } else {
                        response.redirect('/auth/login?err=Password Salah')
                    }
                });
            } else {
                response.redirect('/auth/login?err=Username Salah')
            }
        })
        .catch((err) => {
            response.send(err)
        });
    }

    static logout(req, res){
        req.session.destroy(err => {
          if(err) {
            res.send(err);
          }
          res.redirect('/auth/login');
        })
    }
}

module.exports = Controller