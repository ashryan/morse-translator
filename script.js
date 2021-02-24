import {englishMorseAlphabet, translateEnglishToMorse, translateMorseToEnglish} from './translator.js'


const engTranslateInput = document.querySelector(".englishToMorse__input");

const engTranslateBtn = document.querySelector(".englishToMorse__btn");


let engTranslateOutput = document.querySelector(".englishToMorse__output");



engTranslateBtn.addEventListener('click', () => {
     engTranslateOutput.value = translateEnglishToMorse(engTranslateInput.value.toLowerCase())
    
    // document.querySelector(".englishToMorse__output").value = result;
})



