"use strict";

var express = require('express');
var app = express();
var routers = {};
var QuizRouter = express.Router();
routers.QuizRouter = QuizRouter;

require('./config.js')(app, express, routers);

require('../quiz/quiz_routes.js')(QuizRouter);

module.exports = exports = app;