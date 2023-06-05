'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const skills = [
      {
        preferred_programming_language: 'JavaScript',
        experience: 'Intermediate',
        disability: 'None',
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        preferred_programming_language: 'Python',
        experience: 'Advanced',
        disability: 'None',
        user_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        preferred_programming_language: 'Java',
        experience: 'Beginner',
        disability: 'Visual impairment',
        user_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ];

    await queryInterface.bulkInsert('Skills', skills, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Skills', null, {});
  }
};
