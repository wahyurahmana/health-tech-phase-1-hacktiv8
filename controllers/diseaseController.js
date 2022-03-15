const { Disease } = require('../models')

class Controller {

    static home(req, res){
        Disease.findAll()
        .then((diseases) => {
            res.render('disease/index', {diseases}) 
        }).catch((err) => {
            res.send(err)
        });
    }

    static getAddForm(req, res){
        res.render('disease/addDisease')
    }

    static addForm(req, res){
        Disease.create(req.body)
        .then((result) => {
            res.redirect('/disease')
        }).catch((err) => {
            res.send(err)
        });
    }

    static getEditForm(req, res){
        Disease.findByPk(+req.params.id)
        .then((disease) => {
            res.render('disease/editDisease', {disease})
        }).catch((err) => {
            res.send(err)
        });
    }

    static editForm(req, res){
        Disease.update(req.body, {
            where : {
                id : +req.params.id
            }
        })
        .then((result) => {
            res.redirect('/disease')
        }).catch((err) => {
            res.send(err)
        });
    }

    static deleteDisease(req, res){
        Disease.destroy({
            where : {
                id : +req.params.id
            }
        })
        .then((result) => {
            res.redirect('/disease')
        }).catch((err) => {
            res.send(err)
        });
    }
}

module.exports = Controller