const { Patient, Disease } = require("../models");
class patientController {
  static findAll(req, res) {
    Patient.findAll({
      include: [Disease],
    })
      .then((data) => {
        // res.send(data);
        res.render("patient/showPatient", { data });
      })
      .catch((err) => res.send(err));
  }

  static formPatient(req, res) {
    Disease.findAll()
      .then((data) => {
        res.render("patient/formPatient", { data, patient: [] });
      })
      .catch((err) => res.send(err));
  }

  static addPatient(req, res) {
    let data = {
      name: req.body.name,
      nik: +req.body.nik,
      age: +req.body.age,
      address: req.body.address,
      DiseaseId: +req.body.DiseaseId,
    };
    Patient.create(data)
      .then(() => res.redirect("/patient"))
      .catch((err) => res.send(err));
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
}

module.exports = patientController;
