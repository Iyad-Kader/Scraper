module.exports = app => {
  require('./database')(app);
  require('./views')(app);
};
