const { Symptom } = require('../models')

class Controller {

    static home(req, res){
        Symptom.findAll()
        .then((symptoms) => {
            res.render('symptom/index', {symptoms}) 
        }).catch((err) => {
            res.send(err)
        });
    }

    static getAddForm(req, res){
        res.render('symptom/addSymptom')
    }

    static addForm(req, res){
        Symptom.create(req.body)
        .then((result) => {
            res.redirect('/symptom')
        }).catch((err) => {
            res.send(err)
        });
    }

    static getEditForm(req, res){
        Symptom.findByPk(+req.params.id)
        .then((symptom) => {
            res.render('symptom/editSymptom', {symptom})
        }).catch((err) => {
            res.send(err)
        });
    }

    static editForm(req, res){
        Symptom.update(req.body, {
            where : {
                id : +req.params.id
            }
        })
        .then((result) => {
            res.redirect('/symptom')
        }).catch((err) => {
            res.send(err)
        });
    }

    static deleteDisease(req, res){
        Symptom.destroy({
            where : {
                id : +req.params.id
            }
        })
        .then((result) => {
            res.redirect('/symptom')
        }).catch((err) => {
            res.send(err)
        });
    }
}

module.exports = Controller