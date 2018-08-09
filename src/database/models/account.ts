
module.exports = (sequelize, DataTypes) => {
  const accounts = sequelize.define('accounts', {
    nickname: sequelize.TEXT,
    type: sequelize.STRING,
    bankRefrence: sequelize.STRING
  }, {});

  accounts.associate = function (models) {
    // associations can be defined here
  };
  return accounts;
};
