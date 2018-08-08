const users = sequelize.define('users',
{
	fName: Sequelize.STRING,
	lName: Sequelize.STRING,
	email: Sequelize.STRING,
	password: Sequelize.STRING
});

const accounts = sequelize.define('accounts',{
	nickname: Sequelize.STRING,
	type: Sequelize.STRING,
	bankRefrence: Sequelize.STRING
});

users.hasMany(accounts);

const transaction = sequelize.define('transaction',{
	vendor: Sequelize.STRING,
	amount: Sequelize.DECIMAL,
	date: { type: Sequelize.DATE, defaultValue: Sequelize.NOW}
});

accounts.hasMany(transaction);

const transCat = sequelize.define('transCat',{
	amount: Sequelize.DECIMAL
});

const categories = sequelize.define('categories',{
	name: Sequelize.STRING
});

categories.belongsToMany(transaction, {through:'transCat'});
transaction.belongsToMany(categories, {through:'transCat'});