const { Subject } = require('../models');

const subjectData = [
    {
        title: 'HTML Introduction',
        description: '',
        example: '',
        topic_id: 1
    },
    {
        title: 'HTML Elements',
        topic_id: 1
    },
    {
        title: 'HTML Attributes',
        topic_id: 1
    },
    {
        title: 'HTML Comments',
        fgallery_id: 1
    },
    {
        title: 'CSS Introduction',
        topic_id: 2
    },
    {
        title: 'CSS Syntax',
        topic_id: 2
    },
    {
        title: 'CSS Selectors',
        topic_id: 2
    },
    {
        title: 'CSS Box Model',
        topic_id: 2
    },
    {
        title: 'JavaScript Introduction',
        topic_id: 3
    },
    {
        title: 'JavaScript Statements',
        topic_id: 3
    },
    {
        title: 'JavaScript Syntax ',
        topic_id: 3
    },
    {
        title: 'JavaScript Objects',
        topic_id: 3
    },
    {
        title: 'SQL Intro',
        topic_id: 4
    },
    {
        title: 'SQL Database',
        topic_id: 4
    },
    {
        title: 'SQL Syntax',
        topic_id: 4
    },
    {
        title: 'SQL Select',
        topic_id: 4
    },
];

const seedSubject = () => Subject.bulkCreate(subjectData);

module.exports = seedSubject;
