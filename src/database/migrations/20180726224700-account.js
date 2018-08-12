'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('accounts', {

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

            bankRefrence: {
                allowNull: false,
                type: Sequelize.INTEGER
            },

            type: {
                defaultValue: 'Checking',
                type: Sequelize.STRING
            },

            nickname: {
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
