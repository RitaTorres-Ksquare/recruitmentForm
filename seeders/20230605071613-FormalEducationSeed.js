'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const formalEducationInfos = [
      {
        university_name: 'Universidad 1',
        state: 'Estado 1',
        country: 'País 1',
        career_name: 'Carrera 1',
        classes_completed: true,
        proof_classes_completed: 'Prueba de clases 1',
        degree_completed: true,
        proof_degree_completed: 'Prueba de grado 1',
        license_completed: false,
        proof_license_completed: null,
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        university_name: 'Universidad 2',
        state: 'Estado 2',
        country: 'País 2',
        career_name: 'Carrera 2',
        classes_completed: true,
        proof_classes_completed: 'Prueba de clases 2',
        degree_completed: true,
        proof_degree_completed: 'Prueba de grado 2',
        license_completed: true,
        proof_license_completed: 'Prueba de licencia 2',
        user_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        university_name: 'Universidad 3',
        state: 'Estado 3',
        country: 'País 3',
        career_name: 'Carrera 3',
        classes_completed: false,
        proof_classes_completed: null,
        degree_completed: false,
        proof_degree_completed: null,
        license_completed: false,
        proof_license_completed: null,
        user_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ];

    await queryInterface.bulkInsert('FormalEducationInfos', formalEducationInfos, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('FormalEducationInfos', null, {});
  }
};
