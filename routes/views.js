const { Stack } = require('../models');

module.exports = app => {
  app.get('/', (req, res) => {
    Stack.find({ isSaved: false })
      .then(r => res.render('Home', { stacks: r }))
      .catch(e => console.error(e));
  });
  app.get('/saved', (req, res) => {
    Stack.find({ isSaved: true })
      .then(r => res.render('Saved', { stacks: r }))
      .catch(e => console.error(e));
  });
};
