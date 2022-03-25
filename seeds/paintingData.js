const { Painting } = require('../models');

const paintingData = [
    {
        title: 'Intro to HTML',
        gallery_id: 1
    },
    {
        title: 'Intro to HTML',
        gallery_id: 1
    },
    {
        title: 'Intro to HTML',
        gallery_id: 1
    },
    {
        title: 'Intro to HTML',
        fgallery_id: 1
    },
    {
        title: 'Intro to CSS',
        gallery_id: 2
    },
    {
        title: 'Intro to CSS',
        gallery_id: 2
    },
    {
        title: 'Intro to CSS',
        gallery_id: 2
    },
    {
        title: 'Intro to CSS',
        gallery_id: 2
    },
    {
        title: 'Intro to JavaScript',
        gallery_id: 3
    },
    {
        title: 'Intro to JavaScript',
        gallery_id: 3
    },
    {
        title: 'Intro to JavaScript',
        gallery_id: 3
    },
    {
        title: 'Intro to JavaScript',
        gallery_id: 3
    },
    {
        title: 'Intro to mySQL',
        gallery_id: 4
    },
    {
        title: 'Intro to mySQL',
        gallery_id: 4
    },
    {
        title: 'Intro to mySQL',
        gallery_id: 4
    },
    {
        title: 'Intro to mySQL',
        gallery_id: 4
    },
];

const seedPaintings = () => Painting.bulkCreate(paintingData);

module.exports = seedPaintings;