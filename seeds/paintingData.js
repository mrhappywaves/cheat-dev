const { Painting } = require('../models');

const paintingData = [
    {
        title: 'HTML Introduction',
        gallery_id: 1
    },
    {
        title: 'HTML Elements',
        gallery_id: 1
    },
    {
        title: 'HTML Attributes',
        gallery_id: 1
    },
    {
        title: 'HTML Comments',
        fgallery_id: 1
    },
    {
        title: 'CSS Introduction',
        gallery_id: 2
    },
    {
        title: 'CSS Syntax',
        gallery_id: 2
    },
    {
        title: 'CSS Selectors',
        gallery_id: 2
    },
    {
        title: 'CSS Box Model',
        gallery_id: 2
    },
    {
        title: 'JavaScript Introduction',
        gallery_id: 3
    },
    {
        title: 'JavaScript Statements',
        gallery_id: 3
    },
    {
        title: 'JavaScript Syntax ',
        gallery_id: 3
    },
    {
        title: 'JavaScript Objects',
        gallery_id: 3
    },
    {
        title: 'SQL Intro',
        gallery_id: 4
    },
    {
        title: 'SQL Database',
        gallery_id: 4
    },
    {
        title: 'SQL Syntax',
        gallery_id: 4
    },
    {
        title: 'SQL Select',
        gallery_id: 4
    },
];

const seedPaintings = () => Painting.bulkCreate(paintingData);

module.exports = seedPaintings;