const { Symptom, Disease, SymptomDisease } = require ('../models')

class Controller {
    static home (req, res){
        SymptomDisease.findAll({
            include : [Symptom, Disease]
        })
        .then((result) => {
            res.render('diseaseSymptom', {result})
        }).catch((err) => {
            res.send(err)
        });
    }

    static getAddForm(req, res){
        let data = {}
        Symptom.findAll()
        .then((symtomp) => {
            data.symtomp = symtomp
            return Disease.findAll()
        })
        .then((disease)=> {
            data.disease = disease
            res.render('diseaseSymptom/addForm', data)
        })
        .catch((err) => {
            
        });
    }

    static addForm(req, res){
        console.log(req.body);
        let data ={
            DiseaseId : +req.body.DiseaseId,
            SymptomId : +req.body.SymptomId
        }
        SymptomDisease.create(data)
        .then((result) => {
            res.redirect('/symptomDisease')
        }).catch((err) => {
            res.send(err)
        });
    }

    static destroy(req, res){
        SymptomDisease.destroy({
            where : {
                id : +req.params.id
            }
        })
        .then((result) => {
            res.redirect('/SymptomDisease')
        }).catch((err) => {
            res.send(err)
        });
    }
}

module.exports = Controller