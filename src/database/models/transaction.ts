
module.exports = (sequelize, DataTypes) => {
  const transaction = sequelize.define('transactions', {
    vendor: DataTypes.STRING,
    amount: DataTypes.DECIMAL,
    date: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    acctNum: DataTypes.INTEGER
  }, {});

  transaction.associate = function (models) {
    transaction.belongsToMany(models.catagory, {through:'transCat'});
  };
  return transaction;
};
