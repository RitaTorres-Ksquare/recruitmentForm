"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("AddressExtraInfos", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      type_of_residency: {
        type: Sequelize.STRING,
      },
      other_residency: {
        type: Sequelize.STRING,
      },
      people: {
        type: Sequelize.STRING,
      },
      address_id: {
        type: Sequelize.INTEGER,
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
    await queryInterface.addConstraint("AddressExtraInfos", {
      fields: ["address_id"],
      type: "foreign key",
      name: "fk_address_id",
      references: {
        table: "Addresses",
        field: "id",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("AddressExtraInfos");
  },
};
