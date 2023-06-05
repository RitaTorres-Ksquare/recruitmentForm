'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const academicInfos = [
      {
        software_devel_comments: 'Comentario 1',
        degree_level: 'Nivel 1',
        informal_education: 'Educación informal 1',
        other_education: 'Otra educación 1',
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        software_devel_comments: 'Comentario 2',
        degree_level: 'Nivel 2',
        informal_education: 'Educación informal 2',
        other_education: 'Otra educación 2',
        user_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        software_devel_comments: 'Comentario 3',
        degree_level: 'Nivel 3',
        informal_education: 'Educación informal 3',
        other_education: 'Otra educación 3',
        user_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ];

    await queryInterface.bulkInsert('AcademicInfos', academicInfos, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('AcademicInfos', null, {});
  }
};
