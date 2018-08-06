'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
	return queryInterface.dropTable('users');
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

      transId: {

	allowNull: false,

        autoIncrement: true,

        type: Sequelize.INTEGER

      },

      amount: {

        type: Sequelize.INTEGER

      },

      catId: {

	type: Sequelize.INTEGER

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
