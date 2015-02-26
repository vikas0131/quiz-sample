"use strict";

var Note = require('./quiz_model.js'),
    Q    = require('q');

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
  }
};