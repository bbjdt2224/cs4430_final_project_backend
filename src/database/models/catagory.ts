
module.exports = (sequelize, DataTypes) => {
  const catagory = sequelize.define('catagory', {
    name: sequelize.STRING
  }, {});

  catagory.associate = function (models) {
    catagory.belongsToMany(models.transaction, {through:'transCat'});
  };
  return catagory;
};
