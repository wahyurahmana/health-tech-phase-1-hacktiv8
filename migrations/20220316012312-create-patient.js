"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Patients", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      nik: {
        type: Sequelize.INTEGER,
      },
      age: {
        type: Sequelize.INTEGER,
      },
      address: {
        type: Sequelize.STRING,
      },
      status: {
        type: Sequelize.STRING,
      },
      PolyId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Polies",
          key: "id",
        },
        onUpdate: "cascade",
        onDelete: "cascade",
      },
      obat: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Patients");
  },
};
