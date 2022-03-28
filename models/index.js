const User = require('./User');
const Topic = require('./Topic');
const Subject = require('./Subject');

Topic.hasMany(Subject, {
  foreignKey: 'topic_id',
});

Subject.belongsTo(Topic, {
  foreignKey: 'topic_id',
});

module.exports = { User, Topic, Subject };
