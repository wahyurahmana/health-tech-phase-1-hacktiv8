const { Symptom, Disease, SymptomDisease } = require ('../models')
const { Op } = require("sequelize");
class Controller {
    static home (req, res){
        // SymptomDisease.findAll({
        //     include : [Symptom, Disease]
        // })
        // .then((result) => {
        //     res.send(result)
        //     //res.render('index', {result})
        // }).catch((err) => {
        //     res.send(err)
        // });
        //console.log(req.session, 'dari home');

        if (req.query.disease) {
            Symptom.findAll({
                where : {
                    name : {
                        [Op.iLike]: `%${req.query.disease}%`,  
                    }
                },
                include : [Disease]
            })
            .then((result) => {
                //res.send(result)
                //res.render('index', {result})
            }).catch((err) => {
                res.send(err)
            });
        } else if (req.query.symptom){
            Disease.findAll({
                where : {
                    name : {
                        [Op.iLike]: `%${req.query.symptom}%`,  
                    }
                },
                include : [Symptom]
            })
            .then((result) => {
                //res.send(result)
                //res.render('index', {result})
            }).catch((err) => {
                res.send(err)
            });
        }else {
            SymptomDisease.findAll({
                include : [Symptom, Disease]
            })
            .then((result) => {
                //res.send(result)
                res.render('index', {result, uname : req.session.username})
            }).catch((err) => {
                res.send(err)
            });
        }

    }
}

module.exports = Controller