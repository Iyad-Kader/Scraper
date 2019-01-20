// title (div.summary (child -> h3 child -> a text)) (String)
// url   (div.summary (child -> h3 child -> a href)) (String)
// author (div.started (child -> a text (!.started-link))) (String)

const { Schema, model } = require('mongoose');

const stackSchema = new Schema({
  title: String,
  url: String,
  isSaved: Boolean
});

const Stack = model('Stack', stackSchema);

module.exports = Stack;
