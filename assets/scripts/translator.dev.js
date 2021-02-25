"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.translateMorseToEnglish = translateMorseToEnglish;
exports.translateEnglishToMorse = exports.englishMorseAlphabet = void 0;
var englishMorseAlphabet = {
  'a': '.- ',
  'b': '-... ',
  'c': '-.-. ',
  'd': '-.. ',
  'e': '. ',
  'f': '..-. ',
  'g': '--. ',
  'h': '.... ',
  'i': '.. ',
  'j': '.--- ',
  'k': '-.- ',
  'l': '.-.. ',
  'm': '-- ',
  'n': '-. ',
  'o': '--- ',
  'p': '.--. ',
  'q': '--.- ',
  'r': '.-. ',
  's': '... ',
  't': '- ',
  'u': '..- ',
  'v': '...- ',
  'w': '.-- ',
  'x': '-..- ',
  'y': '-.-- ',
  'z': '--.. ',
  '1': '.---- ',
  '2': '..--- ',
  '3': '...-- ',
  '4': '....- ',
  '5': '..... ',
  '6': '-.... ',
  '7': '--... ',
  '8': '---.. ',
  '9': '----. ',
  '0': '----- '
};
exports.englishMorseAlphabet = englishMorseAlphabet;

var translateEnglishToMorse = function translateEnglishToMorse(input) {
  var result = '';

  for (var i = 0; i < input.length; i++) {
    if (englishMorseAlphabet.hasOwnProperty(input.charAt(i))) {
      result = result + englishMorseAlphabet[input.charAt(i)];
    } else if (!englishMorseAlphabet.hasOwnProperty(input) && input.charAt(i) === ' ') {
      result = result + '/ ';
    } else {
      result = result + 'invalid character ';
    }
  }

  return result.trim();
};

exports.translateEnglishToMorse = translateEnglishToMorse;

function translateMorseToEnglish(input) {
  var morseSplit = input.split(' ');
  var result = '';

  var _loop = function _loop(i) {
    if (morseSplit[i] == '/') {
      result = result + ' ';
    } else {
      result = result + Object.keys(englishMorseAlphabet).find(function (key) {
        return englishMorseAlphabet[key] === "".concat(morseSplit[i], " ");
      });
    }
  };

  for (var i = 0; i < morseSplit.length; i++) {
    _loop(i);
  }

  return result;
}

console.log(translateEnglishToMorse('a'));
console.log(translateMorseToEnglish('-'));