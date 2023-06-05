'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('GovermentInfos', {
      id: {
      type: Sequelize.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
      },
      CURP: {
      type: Sequelize.STRING,
      allowNull: true,
      },
      identification_number: {
      type: Sequelize.STRING,
      allowNull: true,
      },
      user_id: {
      type: Sequelize.INTEGER.UNSIGNED,
      allowNull: true,
      },
      createdAt: {
      type: Sequelize.DATE,
      allowNull: false,
      },
      updatedAt: {
      type: Sequelize.DATE,
      allowNull: false,
      },
      });
      await queryInterface.addConstraint("GovermentInfos", {
        fields: ["user_id"],
        type: "foreign key",
        name: "fk_user_id",
        references: {
          table: "Users",
          field: "id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('GovermentInfos');
  }
};
