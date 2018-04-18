const feathers = require('@feathersjs/feathers');
const express = require('@feathersjs/express');
const bodyParser = require('body-parser');

const app = express(feathers());

app.configure(express.rest())
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({extended: true}))
  .use(function(req, res, next) {
    req.feathers.fromMiddleware = 'Hello world';
    next();
  });

app.use('/todos', {
  get(id, params) {
    console.log(params.provider); // -> 'rest'
    console.log(params.fromMiddleware); // -> 'Hello world'

    return Promise.resolve({
      id, params,
      description: `You have to do ${id}!`
    });
  }
});

app.listen(3030);