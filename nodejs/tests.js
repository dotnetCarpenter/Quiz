var assert = require('assert');
var Quiz = require('../quiz').quiz;

var newQuiz = new Quiz();

assert.throws( newQuiz.addQuestions, TypeError);