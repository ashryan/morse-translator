"use strict";

var _translator = require("./translator.js");

it('Should translate a to .-', function () {
  var result = (0, _translator.translateEnglishToMorse)('a');
  expect(result).toBe('.- ');
});
it('Should translate t to -', function () {
  var result = (0, _translator.translateEnglishToMorse)('t');
  expect(result).toBe('- ');
});
it('Should translate abc to .- -... -.-.', function () {
  var result = (0, _translator.translateEnglishToMorse)('abc');
  expect(result).toBe('.- -... -.-. ');
});
it('Should translate 0 1 2 3 to .---- / ..--- / ...-- / ....-', function () {
  var result = (0, _translator.translateEnglishToMorse)('a');
  expect(result).toBe('.---- / ..--- / ...-- / ....- ');
});
it('Should translate hi i like morse to .... .. / .. .-.. .. -.- . / -- -- .-. ... .', function () {
  var result = (0, _translator.translateEnglishToMorse)('hi i like morse');
  expect(result).toBe('.... .. / .. .-.. .. -.- . / -- -- .-. ... . ');
}); //test loads of valid inputes
//test loads of invalid

it('Should translate ! to invalid', function () {
  var result = (0, _translator.translateEnglishToMorse)('!');
  expect(result).toBe('invalid character ');
});
it('Should translate i //like grapes .. / invalid invalid .-.. -.- . / --. .-. .- .--. . ...', function () {
  var result = (0, _translator.translateEnglishToMorse)('i //like grapes');
  expect(result).toBe('.. / invalid character invalid character .-.. -.- . / --. .-. .- .--. . ... ');
});
it("Should translate '' to empty", function () {
  var result = (0, _translator.translateEnglishToMorse)('');
  expect(result).toBe('empty ');
});