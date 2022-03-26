// Dependencies
const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const helpers = require('./utils/helpers');

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

// Express App
const app = express();
const PORT = process.env.PORT || 3306;

// Sessions
app.use(session({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));

// Handlebars
app.engine('handelbars', hbs.engine);
app.set('view engine', 'handlebars');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);


sequelize.sync({ force: false }).then(function() {
    app.listen(PORT, function() {
        console.log(`Server running on port ${PORT}.`)
    })
});


