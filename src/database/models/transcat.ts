
module.exports = (sequelize, DataTypes) => {
  const transcat = sequelize.define('transcat', {
    amount: sequelize.DECIMAL
  }, {});

  transcat.associate = function (models) {
    // associations can be defined here
  };
  return transcat;
};
