'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const profiles = [
      {
        phone: '1234567890',
        country_code: '+1',
        email: 'correo1@example.com',
        alt_email: 'correo_alternativo1@example.com',
        reference: 'Referencia 1',
        other_reference: 'Otra referencia 1',
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        phone: '9876543210',
        country_code: '+1',
        email: 'correo2@example.com',
        alt_email: 'correo_alternativo2@example.com',
        reference: 'Referencia 2',
        other_reference: 'Otra referencia 2',
        user_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        phone: '5555555555',
        country_code: '+1',
        email: 'correo3@example.com',
        alt_email: 'correo_alternativo3@example.com',
        reference: 'Referencia 3',
        other_reference: 'Otra referencia 3',
        user_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ];

    await queryInterface.bulkInsert('Profiles', profiles, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Profiles', null, {});
  }
};
