const feathers = require('@feathersjs/feathers');
const memory = require('feathers-memory');
const configureMessages = require('./messages.service.js');

const app = feathers();

app.configure(configureMessages);