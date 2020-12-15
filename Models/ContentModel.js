
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contentSchema = new Schema({
  title: String,
  body: String
});


const Content = mongoose.model('content',contentSchema);

module.exports = Content;