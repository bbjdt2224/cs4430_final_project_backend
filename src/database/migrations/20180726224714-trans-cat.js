'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('trans-cats', {

            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
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
