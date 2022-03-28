const User = require('./User');
const Gallery = require('./Gallery');
const Subject = require('./Subject');

Gallery.hasMany(Subject, {
  foreignKey: 'gallery_id',
});

Subject.belongsTo(Gallery, {
  foreignKey: 'gallery_id',
});

module.exports = { User, Gallery, Subject };
