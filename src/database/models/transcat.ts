
module.exports = (sequelize, DataTypes) => {
  const transcat = sequelize.define('transcat', {
    amount: DataTypes.DECIMAL
  }, {});

  transcat.associate = function (models) {
    // associations can be defined here
  };
  return transcat;
};
