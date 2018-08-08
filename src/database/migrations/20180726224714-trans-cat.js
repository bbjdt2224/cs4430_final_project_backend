'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('trans-cat', {

            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
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
        return queryInterface.dropTable('trans-cat');
    }
};
