import {englishMorseAlphabet, translateEnglishToMorse, translateMorseToEnglish} from './translator.js'


const engTranslateInput = document.querySelector(".englishToMorse__input");

const engTranslateBtn = document.querySelector(".englishToMorse__btn");


const engTranslateOutput = document.querySelector(".englishToMorse__output");

const morseTranslateInput = document.querySelector(".morseToEnglish__input");

const morseTranslateBtn = document.querySelector(".morseToEnglish__btn");

const morseTranslateOutput = document.querySelector(".morseToEnglish__output");

console.log(morseTranslateInput)



engTranslateBtn.addEventListener('click', () => {
     engTranslateOutput.value = translateEnglishToMorse(engTranslateInput.value.toLowerCase())
    
    // document.querySelector(".englishToMorse__output").value = result;
})

morseTranslateBtn.addEventListener('click', () => {
    morseTranslateOutput.value = translateMorseToEnglish(morseTranslateInput.value)
})



