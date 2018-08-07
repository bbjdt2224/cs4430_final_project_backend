'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
	return queryInterface.createTable('users', {

      /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
      */	
	
      id: {

        allowNull: false,

        autoIncrement: true,

        primaryKey: true,

        type: Sequelize.INTEGER

      },

      firstName: {
	
	allowNull: false,

        type: Sequelize.STRING

      },

      lastName: {

	allowNull: false,

        type: Sequelize.STRING

      },

      email: {

	allowNull: false,

        type: Sequelize.STRING

      },

      password: {

	allowNull: false,

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
      Reverting commands here.
      Return a promise to correctly handle asynchronicity.
    */
	return queryInterface.dropTable('users');
  }
};
