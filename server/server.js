const express = require('express');
const models = require('./models');
const mongoose = require('mongoose');
const session = require('express-session');
const passportConfig = require('./services/auth');
const MongoStore = require('connect-mongo')(session);
const passport = require('passport');
const expressGraphQL = require('express-graphql');
const schema = require('./schema/schema');


const app = express();

const MONGO_URI = 'mongodb://ediuser:edipassword@ds243798.mlab.com:43798/edi';
const options = {
  autoIndex: false, // Don't build indexes
  reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
  reconnectInterval: 500, // Reconnect every 500ms
  poolSize: 10, // Maintain up to 10 socket connections
  // If not connected, return errors immediately rather than waiting for reconnect
  bufferMaxEntries: 0
};

mongoose.Promise = global.Promise;

mongoose.connect(MONGO_URI, options);
mongoose.connection
  .once('open', () => console.log('Connected to MongoLab instance.'))
  .on('error', error => console.log('Error connecting to Mongolab:', error));

app.use(session({
  resave: true,
  saveUninitialized: true,
  secret: 'animolasalle',
  store: new MongoStore({
    url: MONGO_URI,
    autoReconnect: true
  })
}));

app.use(passport.initialize());
app.use(passport.session());

app.use('/graphql', expressGraphQL({
  schema,
  graphiql: true
}));

const webpackMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('../webpack.config');

app.use(webpackMiddleware(webpack(webpackConfig)));

module.exports = app;