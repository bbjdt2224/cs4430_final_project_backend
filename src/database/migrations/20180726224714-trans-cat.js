'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
	return queryInterface.createTable('trans-cat', {
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
	
        type: Sequelize.STRING

      },

      transId: {

	allowNull: false,

        type: Sequelize.INTEGER

      },

      amount: {

        type: Sequelize.DOUBLE

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

	return queryInterface.dropTable('trans-cat');
  }
};
