// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

const crypto = require('crypto');
const gravatarUrl = 'https://s.gravatar.com/avatar';
// The size query. Our chat needs 60px images
const query = 's=60';

module.exports = function (options = {}) { // eslint-disable-line no-unused-vars
  return async context => {
    const { email } = context.data;
    const hash = crypto.createHash('md5').update(email).digest('hex');

    context.data.avatar = `${gravatarUrl}/${hash}?${query}`;

    return context;
  };
};
