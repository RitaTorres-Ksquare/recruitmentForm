'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const personalInfos = [
      {
        name: 'Nombre1',
        last_name: 'Apellido1',
        second_last_name: 'Apellido2',
        gender: 'Masculino',
        gender_other: null,
        date_of_birth: new Date('1990-01-01'),
        city_of_birth: 'Ciudad1',
        state_of_birth: 'Estado1',
        country_of_birth: 'País1',
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Nombre2',
        last_name: 'Apellido3',
        second_last_name: 'Apellido4',
        gender: 'Femenino',
        gender_other: null,
        date_of_birth: new Date('1995-02-02'),
        city_of_birth: 'Ciudad2',
        state_of_birth: 'Estado2',
        country_of_birth: 'País2',
        user_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Nombre3',
        last_name: 'Apellido5',
        second_last_name: 'Apellido6',
        gender: 'Otro',
        gender_other: 'Especificar',
        date_of_birth: new Date('2000-03-03'),
        city_of_birth: 'Ciudad3',
        state_of_birth: 'Estado3',
        country_of_birth: 'País3',
        user_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ];

    await queryInterface.bulkInsert('PersonalInfos', personalInfos, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('PersonalInfos', null, {});
  }
};
