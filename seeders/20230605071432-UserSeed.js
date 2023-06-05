'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const users = [
      {
        username: 'ejemplo1',
        firstName: 'Nombre1',
        lastName: 'Apellido1',
        email: 'ejemplo1@example.com',
        phone: '123456789',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'ejemplo2',
        firstName: 'Nombre2',
        lastName: 'Apellido2',
        email: 'ejemplo2@example.com',
        phone: '987654321',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'ejemplo3',
        firstName: 'Nombre3',
        lastName: 'Apellido3',
        email: 'ejemplo3@example.com',
        phone: '555555555',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ];

    await queryInterface.bulkInsert('Users', users, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
