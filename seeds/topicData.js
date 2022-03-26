const { Topic } = require('../models');

const topicData = [
    {
        name: 'HTML'
    },
    {
        name: 'CSS'
    },
    {
        name: 'JavaScript'
    }, 
    {
        name: 'SQL'
    }
];

const seedTopic = () => Topic.bulkCreate(topicData);

module.exports = seedTopic;