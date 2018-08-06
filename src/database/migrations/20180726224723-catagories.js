'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */

      id: {

	allowNull: false,

	primaryKey: true,
	
        type: Sequelize.STRING

      },

      catName: {

	allowNull: false,
	
	defaultValue: 'Groceries'
	
        type: Sequelize.STRING

      },


      createdAt: {

        allowNull: false,

        type: Sequelize.DATE

      },

      updatedAt: {

        allowNull: false,

        type: Sequelize.DATE

      }

    });

  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
