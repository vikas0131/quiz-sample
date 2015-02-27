"use strict";

var Note = require('./quiz_model.js'),
    Q    = require('q'),
    questions = require('./quiz_data.json');

module.exports = exports = {
  get: function (req, res, next) {
    var $promise = Q.nbind(Quiz.find, Quiz);
    $promise()
      .then(function (notes) {
        res.json(notes);
      })
       .fail(function (reason) {
        next(reason);
      });
  },

  post: function (req, res, next) {
    var note = req.body.note;
    var $promise = Q.nbind(Quiz.create, Quiz);
    $promise(note)
      .then(function (id) {
        res.send(id);
      })
      .fail(function (reason) {
        next(reason);
      });
  } ,
  getQuestions: function(req, res) {
    res.send(questions);
  },
  getQuestion: function(req, res) {
    console.log(req.params.questionNumber);
    res.send(questions[req.params.questionNumber-1]);
  }
};