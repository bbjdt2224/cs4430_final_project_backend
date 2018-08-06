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

	primaryKey: true,
	
        type: Sequelize.INTEGER

      },

      userId: {

	allowNull: false,

	foreignKey: true,
	
        type: Sequelize.INTEGER

      },

      acctNum: {

	allowNull: false,

        autoIncrement: true,

        type: Sequelize.INTEGER

      },


      acctType: {

	defaultValue: 'Checking'

        type: Sequelize.STRING

      },

      acctName: {

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

	return queryInterface.dropTable('users');
  }
};
