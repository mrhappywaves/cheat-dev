const sequelize = require('../config/connection');
const seedFront = require('./frontPageData');
const seedCheat = require('./cheatSheetData');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  
  await seedFront();
  
  await seedCheat();
  
  process.exit(0);
};

seedAll();