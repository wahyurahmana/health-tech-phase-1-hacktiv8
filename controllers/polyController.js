const { Poly } = require("../models");
class PolyController {
  static findAll(req, res) {
    Poly.findAll()
      .then((data) => res.render("poly/showPoly", { data }))
      .catch((err) => res.send(err));
  }

  static formPoly(req, res) {
    Poly.findAll()
      .then((data) => res.render("poly/addPoly", { data }))
      .catch((err) => res.send(err));
  }
  static addPoly(req, res) {
    Poly.create(req.body)
      .then(() => res.redirect("/poly"))
      .catch((err) => res.send(err));
  }
  static formEdit(req, res) {
    let id = +req.params.id;
    Poly.findByPk(id)
      .then((data) => res.render("poly/addPoly", { data }))
      .catch((err) => res.send(err));
  }
  static addEdit(req, res) {
    console.log(req.body);
    Poly.update(req.body, {
      where: {
        id: +req.params.id,
      },
    })
      .then(() => res.redirect("/poly"))
      .catch((err) => res.send(err));
  }
  static delete(req, res) {
    Poly.destroy({
      where: {
        id: +req.params.id,
      },
    })
      .then(() => res.redirect("/poly"))
      .catch((err) => res.send(err));
  }
}
module.exports = PolyController;
