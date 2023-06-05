'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const addressExtraInfos = [
      {
        type_of_residency: 'Tipo 1',
        other_residency: 'Otro tipo 1',
        people: 'Persona 1',
        address_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type_of_residency: 'Tipo 2',
        other_residency: 'Otro tipo 2',
        people: 'Persona 2',
        address_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type_of_residency: 'Tipo 3',
        other_residency: 'Otro tipo 3',
        people: 'Persona 3',
        address_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ];

    await queryInterface.bulkInsert('AddressExtraInfos', addressExtraInfos, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('AddressExtraInfos', null, {});
  }
};
