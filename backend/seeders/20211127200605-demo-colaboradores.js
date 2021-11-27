'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.bulkInsert('colaboradors', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    
  },

  down: async (queryInterface, Sequelize) => {
      await queryInterface.bulkDelete('colaboradors', null, {});
     
  }
};
