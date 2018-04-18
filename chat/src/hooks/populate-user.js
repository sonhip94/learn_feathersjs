// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

module.exports = function (options = {}) { // eslint-disable-line no-unused-vars
  return async context => {
    // Get `app`, `method`, `params` and `result` from the hook context
    const { app, method, result, params } = context;

    const messages = method === 'find' ? result.data : [ result ];

    await Promise.all(messages.map(async message => {
      const user = await app.service('users').get(message.userId, params);

      message.user = user;
    }));

    return context;
  };
};