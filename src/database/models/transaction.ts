
module.exports = (sequelize, DataTypes) => {
  const transaction = sequelize.define('transactions', {
    vendor: sequelize.STRING,
    amount: sequelize.DECIMAL,
    date: { type: sequelize.DATE, defaultValue: sequelize.NOW }
  }, {});

  transaction.associate = function (models) {
    transaction.belongsToMany(models.catagory, {through:'transCat'});
  };
  return transaction;
};
