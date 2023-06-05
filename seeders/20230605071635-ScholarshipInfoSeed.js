'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const scholarshipInfos = [
      {
        level: 'Nivel 1',
        kind: 'Tipo 1',
        period: 6,
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        level: 'Nivel 2',
        kind: 'Tipo 2',
        period: 12,
        user_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        level: 'Nivel 3',
        kind: 'Tipo 3',
        period: 9,
        user_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ];

    await queryInterface.bulkInsert('ScholarshipInfos', scholarshipInfos, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('ScholarshipInfos', null, {});
  }
};
