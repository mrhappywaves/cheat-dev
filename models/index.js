const User = require('./User');
const Topic = require('./Topic');
const Subject = require('./Subject');

Topic.hasMany(Subject, {
  foreignKey: 'refID',
});

Subject.belongsTo(Topic, {
  foreignKey: 'refID',
});

module.exports = { User, Topic, Subject };
