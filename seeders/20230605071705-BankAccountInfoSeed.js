'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const bankAccountInfos = [
      {
        acc_number: 1234567890,
        clabe: 9876543210,
        bank: 'Bank A',
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        acc_number: 9876543210,
        clabe: 1234567890,
        bank: 'Bank B',
        user_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        acc_number: 5555555555,
        clabe: 9999999999,
        bank: 'Bank C',
        user_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ];

    await queryInterface.bulkInsert('BankAccountInfos', bankAccountInfos, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('BankAccountInfos', null, {});
  }
};
