const { Patient, Disease } = require("../models");
const dateId = require('../helpers/dateId.js')
class patientController {

  static findAll(req, res) {
    Patient.showPasient(req.session.role)
    .then((data) => {
      res.render("patient/showPatient", { data , role :req.session.role, dateId});
    }).catch((err) => {
      res.send(err)
    });
  }

  static formPatient(req, res) {
    Disease.findAll()
      .then((data) => {
        res.render("patient/formPatient", { data, patient: [] });
      })
      .catch((err) => res.send(err));
  }

  static addPatient(req, res) {
    // console.log(req.body)
    let data = {
      name: req.body.name,
      nik: +req.body.nik,
      age: +req.body.age,
      address: req.body.address,
      DiseaseId: +req.body.DiseaseId,
    };
    Patient.create(data)
      .then(() => res.redirect("/patient"))
      .catch((err) => console.log(err));
  }

  static formEdit(req, res) {
    let id = req.params.id;
    let patients;
    Patient.findByPk(id, {
      include: [Disease],
    })
      .then((data) => {
        patients = data;
        return Disease.findAll();
      })
      .then((dataDisease) => {
        res.render("patient/formPatient", {
          data: dataDisease,
          patient: patients,
        });
      })
      .catch((err) => res.send(err));
  }

  static editPatient(req, res) {
    let data = {
      name: req.body.name,
      nik: +req.body.nik,
      age: +req.body.age,
      address: req.body.address,
      DiseaseId: +req.body.DiseaseId,
    };
    Patient.update(data, {
      where: {
        id: +req.params.id,
      },
    })
      .then(() => res.redirect("/patient"))
      .catch((err) => res.send(err));
  }

  static getCheckUp(req, res){
    Patient.findByPk(+req.params.id)
    .then((result) => {
      res.render('patient/checkUp', {data : result})
    }).catch((err) => {
      res.send(err)
    });
  }

  static checkUp(req, res){
    Patient.update({status : req.body.status, obat : req.body.obat}, {
      where : {
        id : +req.params.id
      }
    })
    .then((result) => {
      res.redirect('/patient')
    }).catch((err) => {
      res.send(err)
    });
  }

  static pulang(req, res){
    Patient.update({status : 'selesai'},{
      where : {
        id : +req.params.id
      }
    })
    .then((result) => {
      res.redirect('/patient')
    }).catch((err) => {
      res.send(err)
    });
  }
}

module.exports = patientController;
