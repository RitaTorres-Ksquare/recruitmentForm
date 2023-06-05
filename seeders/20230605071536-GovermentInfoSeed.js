'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const govermentInfos = [
      {
        CURP: 'CURP1',
        identification_number: 'Número1',
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        CURP: 'CURP2',
        identification_number: 'Número2',
        user_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        CURP: 'CURP3',
        identification_number: 'Número3',
        user_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ];

    await queryInterface.bulkInsert('GovermentInfos', govermentInfos, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('GovermentInfos', null, {});
  }
};
