'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      const addresses = [
        {
          street: 'Calle 1',
          in_between_street_a: 'Entre Calle A',
          in_between_street_b: 'y Calle B',
          city: 'Ciudad1',
          state: 'Estado1',
          country: 'País1',
          zip: '12345',
          proof_of_address: 'Documento1',
          user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          street: 'Calle 2',
          in_between_street_a: 'Entre Calle C',
          in_between_street_b: 'y Calle D',
          city: 'Ciudad2',
          state: 'Estado2',
          country: 'País2',
          zip: '67890',
          proof_of_address: 'Documento2',
          user_id: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          street: 'Calle 3',
          in_between_street_a: 'Entre Calle E',
          in_between_street_b: 'y Calle F',
          city: 'Ciudad3',
          state: 'Estado3',
          country: 'País3',
          zip: '54321',
          proof_of_address: 'Documento3',
          user_id: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ];

      await queryInterface.bulkInsert('Addresses', addresses, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Addresses', null, {});
  }
};
