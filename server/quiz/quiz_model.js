"use strict";

var mongoose = require('mongoose');

var QuizSchema = new mongoose.Schema({
  content: String,

  title: {
    type: String,
    required: true
  }
});

module.exports = exports = mongoose.model('quiz', QuizSchema);