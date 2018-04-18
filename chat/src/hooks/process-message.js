// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

module.exports = function (options = {}) { // eslint-disable-line no-unused-vars
  return async context => {
    const { data } = context;

    if(!data.text) {
      throw new Error('A message must have a text');
    }

    const user = context.params.user;
    const text = context.data.text
      .substring(0, 400);

    context.data = {
      text,
      userId: user._id,

      createdAt: new Date().getTime()
    };

    return context;
  };
};
