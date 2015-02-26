"use strict";

var controller = require('./quiz_controllers.js');

module.exports = exports = function (router) {
  router.route('/')
    .get(controller.get)
    .post(controller.post);
};