const { Topic } = require('../models');

const topicData = [
  {
    name: 'HTML',
    logo: '1-HTML.png',
    description: 'HTML symbol',
    info: 'The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript.'
  },
  {
    name: 'CSS',
    logo: '2-CSS.png',
    description: 'CSS symbol',
    info: 'CSS is the language we use to style an HTML document.\nCSS describes how HTML elements should be displayed.'
  },
  {
    name: 'JavaScript',
    logo: '3-JS.png',
    description: 'JavaScript symbol',
    info: 'JavaScript is the world\'s most popular programming language.\nJavaScript is the programming language of the Web'
  },
  {
    name: 'SQL',
    logo: '4-SQL.png',
    description: 'SQL symbol',
    info: 'SQL is a standard language for storing, manipulating and retrieving data in databases.'
  
  },
];

const seedTopic = () => Topic.bulkCreate(topicData);

module.exports = seedTopic;
