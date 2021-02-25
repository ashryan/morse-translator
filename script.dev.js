"use strict";

var _translator = require("./translator.js");

var engTranslateInput = document.querySelector(".englishToMorse__input");
var engTranslateBtn = document.querySelector(".englishToMorse__btn");
var engTranslateOutput = document.querySelector(".englishToMorse__output");
var morseTranslateInput = document.querySelector(".morseToEnglish__input");
var morseTranslateBtn = document.querySelector(".morseToEnglish__btn");
var morseTranslateOutput = document.querySelector(".morseToEnglish__output");
console.log(morseTranslateInput);
engTranslateBtn.addEventListener('click', function () {
  engTranslateOutput.value = (0, _translator.translateEnglishToMorse)(engTranslateInput.value.toLowerCase()); // document.querySelector(".englishToMorse__output").value = result;
});
morseTranslateBtn.addEventListener('click', function () {
  morseTranslateOutput.value = (0, _translator.translateMorseToEnglish)(morseTranslateInput.value);
});