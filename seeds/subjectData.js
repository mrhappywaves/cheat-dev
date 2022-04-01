const { Subject } = require('../models');

// for testing
const subjectData = [
  {
   title: 'HTML Elements',
   definition: 'is defined by a start tag, some content, and an end tag.',
   example: '<tagname>Content goes here...</tagname>',
   refID: 1,
  },
  {
    title: 'HTML Attributes',
    definition: 'provide additional information about HTML elements.',
    example: '<tagname attribute1-name=attribute1-property attribute2-name=attribute2-property> some content here </tagname>',
    refID: 1,
  },
  {
    title: 'HTML Headings',
    definition: 'are defined with the <h1> to <h6> tags, <h1> defines the most important heading, and <h6> defines the least important heading',
    example: '<h1> This is a biggest heading </h1>',
    refID: 1,
  },
  {
    title: 'HTML Paragraphs',
    definition: 'is always starting on a new line, and is usually a basic block of text carrying information.',
    example: '<p> Some \"boring\" text goes here </p>',
    refID: 1,
  },
  {
    title: 'CSS Syntax',
    definition: 'CSS rule consists of a selector and a declaration block.',
    example: '\{ color: red; text-align: center; \} Where color and text-align are selectors while red and center are declaration blocks',
    refID: 2,
  },
  {
    title: 'CSS Selectors',
    definition: 'CSS selector allows to select an HTML element(s) you want to style.',
    example: 'p\{ color: red; text-align: center; \} Where p is the HTML paragraph element we are selecting',
    refID: 2,
  },
  {
    title: 'CSS Comments',
    definition: 'CSS comments are not displayed in the browser, but they can help document your source code.',
    example: '/* This is a single-line comment */',
    refID: 2,
  },
  {
    title: 'CSS Colors',
    definition: 'In CSS, a color can be specified by using a predefined color name.',
    example: 'Colors are specified using predefined color names, or RGB, HEX, HSL, RGBA, HSLA values.',
    refID: 2,
  },
  {
    title: 'JavaScript Statements',
    definition: 'A computer program is a list of "instructions" to be "executed" by a computer. In a programming language, these programming instructions are called statements.',
    example: 'Statement 1: let x, y, z; Statement 2: x = 5; Statement 3: z = x + y;',
    refID: 3,
  },
  {
    title: 'JavaScript Syntax',
    definition: 'JavaScript syntax is the set of rules, how JavaScript programs are constructed:',
    example: 'JavaScript Literals: 10, \"John Doe\", JavaScript Variables: let x = 4;',
    refID: 3,
  },
  {
    title: 'JavaScript Comments',
    definition: 'JavaScript comments can be used to explain JavaScript code, and to make it more readable. JavaScript comments can also be used to prevent execution, when testing alternative code.',
    example: '// Single line comment //',
    refID: 3,
  },
  {
    title: 'JavaScript Variables',
    definition: 'Variables are containers for storing data (storing data values), which can be operated on later.',
    example: 'var x = 5;',
    refID: 3,
  },
  {
    title: 'SQL Statements',
    definition: 'Most of the actions you need to perform on a database are done with SQL statements.',
    example: 'SELECT * FROM Customers;',
    refID: 4,
  },
  {
    title: 'SQL SELECT Statement',
    definition: 'The SELECT statement is used to select data from a database.',
    example: 'SELECT * FROM table_name;',
    refID: 4,
  },
  {
    title: 'SQL SELECT DISTINCT Statement',
    definition: 'The SELECT DISTINCT statement is used to return only distinct (different) values.',
    example: 'SELECT DISTINCT Country FROM Customers;',
    refID: 4,
  },
  {
    title: 'SQL WHERE Clause',
    definition: 'The WHERE clause is used to filter records.',
    example: 'SELECT * FROM Customers WHERE Country=\'Mexico\';',
    refID: 4,
  },
];

const seedSubjects = () => Subject.bulkCreate(subjectData);

module.exports = seedSubjects;

