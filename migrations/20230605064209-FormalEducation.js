'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('FormalEducationInfos', {
      id: {
        type: Sequelize.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
      },
      university_name: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      state: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      country: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      career_name: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      classes_completed: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
      },
      proof_classes_completed: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      degree_completed: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
      },
      proof_degree_completed: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      license_completed: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
      },
      proof_license_completed: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      user_id: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: true,
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
    await queryInterface.addConstraint("FormalEducationInfos", {
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
    await queryInterface.dropTable('FormalEducationInfos');
  }
};
