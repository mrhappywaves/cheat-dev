const sequelize = require('../config/connection');
const seedTopic = require('./topicData');
const seedSubjects = require('./subjectData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedTopic();

  await seedSubjects();

  process.exit(0);
};

seedAll();
