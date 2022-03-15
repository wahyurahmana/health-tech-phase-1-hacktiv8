"use strict";
let data = require("../poly.json");
module.exports = {
  up(queryInterface, Sequelize) {
    data = data.map((el) => {
      el.createdAt = new Date();
      el.updatedAt = new Date();
      return el;
    });
    return queryInterface.bulkInsert("Polies", data, {});
    /**
     * Add seed commands here.
     *
     * Example:
     */
  },

  down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Polies", null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     */
  },
};
