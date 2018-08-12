
module.exports = (sequelize, DataTypes) => {
  const account = sequelize.define('account', {
    nickname: DataTypes.STRING,
    type: DataTypes.STRING,
    bankRefrence: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {});

  account.associate = function (models) {
    // associations can be defined here
  };
  return account;
};
