
module.exports = (sequelize, DataTypes) => {
  const catagory = sequelize.define('catagotries', {
    name: DataTypes.STRING
  }, {});

  catagory.associate = function (models) {
    catagory.belongsToMany(models.transaction, {through:'transCat'});
  };
  return catagory;
};
