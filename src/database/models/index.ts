import * as fs from 'fs';
import * as path from 'path';
import Sequelize from 'sequelize';
const basename  = path.basename(__filename);
const env       = 'development';
import configfile from './../config/config';
const config = configfile[env];

const sequelize = new Sequelize(config.database, config.username, config.password, config);

const db:any = {
  // account: sequelize.import('./account'),
  // transaction: sequelize.import('./transaction'),
  // transcat: sequelize.import('./transcat'),
  // catagories: sequelize.import('./catagories'),
  user: sequelize.import('./user')
};

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;