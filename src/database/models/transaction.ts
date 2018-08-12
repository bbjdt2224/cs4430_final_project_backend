
module.exports = (sequelize, DataTypes) => {
  const transaction = sequelize.define('transactions', {
    vendor: DataTypes.STRING,
    amount: DataTypes.DECIMAL,
    date: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
  }, {});

  transaction.associate = function (models) {
    transaction.belongsToMany(models.catagory, {through:'transCat'});
  };
  return transaction;
};
