const sequelize = require('../config/connection');
const seedTopic = require('./topicData');
const seedSubject = require('./subjectData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedTopic();

  await seedSubject();

  process.exit(0);
};

seedAll();
