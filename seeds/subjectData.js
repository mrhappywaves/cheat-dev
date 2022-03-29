const { Subject } = require('../models');

const subjectdata = [
  {
    title: 'Blossoming Apricot',
    exhibition_date: 'March 30, 2018',
    topic_id: 1,
    filename: '01-blossoming-apricot.jpg',
    description:
      'Branches with pink apricot blossoms against a blue background.',
  },
  {
    title: 'Cosmos Flowers',
    exhibition_date: 'May 05, 2017',
    topic_id: 1,
    filename: '02-cosmos-flowers.jpg',
    description: 'Pink cosmos flowers against a blue sky.',
  },
  {
    title: 'Sand + Sea = Summer',
    exhibition_date: 'June 10, 2019',
    topic_id: 2,
    filename: '03-sand-sea-summer.jpg',
    description: 'Sandy beach with the blue sea and sky in the background.',
  },
  {
    title: 'Beach Chairs',
    exhibition_date: 'July 4, 2020',
    topic_id: 2,
    filename: '04-beach-chairs.jpg',
    description: 'Two beach chairs under a beach umbrella on the beach.',
  },
  {
    title: 'Beach Sunrise',
    exhibition_date: 'August 14, 2016',
    topic_id: 2,
    filename: '05-beach-sunrise.jpg',
    description: 'Sun setting in the horizon with waves lapping the shore.',
  },
  {
    title: 'Fall Colors',
    exhibition_date: 'October 15, 2018',
    topic_id: 3,
    filename: '06-fall-colors.jpg',
    description:
      'Trees with red, orange, yellow leaves reflected on a still lake.',
  },
  {
    title: 'Autumn Mountains',
    exhibition_date: 'November 3, 2016',
    topic_id: 3,
    filename: '07-autumn-mountains.jpg',
    description:
      'Mountains with red and yellow leaves against a background of hazy rolling hills.',
  },
  {
    title: 'Frozen River',
    exhibition_date: 'December 24, 2020',
    topic_id: 4,
    filename: '08-frozen-river.jpg',
    description:
      'Trees with white frozen branches reflected on a frozen river against a light pink sky.',
  },
  {
    title: 'Winter Home',
    exhibition_date: 'January 20, 2018',
    topic_id: 4,
    filename: '09-winter-home.jpg',
    description:
      'Log cabin blanketed in heavy white snow with tall snow covered pine trees in the background.',
  },
];

const seedSubjects = () => Subject.bulkCreate(subjectdata);

module.exports = seedSubjects;
