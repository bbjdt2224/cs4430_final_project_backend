'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('account', {

            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },

            userId: {
                allowNull: false,
                type: Sequelize.INTEGER
            },

            acctNum: {
                allowNull: false,
                type: Sequelize.INTEGER
            },

            acctType: {
                defaultValue: 'Checking',
                type: Sequelize.STRING
            },

            acctName: {
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
        return queryInterface.dropTable('account');
    }
};
