'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
	return queryInterface.createTable('transaction', {

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

	foreignKey: true,
	
        type: Sequelize.INTEGER

      },

      acctNum: {

	allowNull: false,

	foreignKey: true,

        type: Sequelize.INTEGER

      },

      vendor: {
	
        type: Sequelize.STRING

      },

      amount: {

        type: Sequelize.DOUBLE

      },

      date: {

	type: Sequelize.DATE

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

	return queryInterface.dropTable('transaction');
  }
};
