const englishMorseAlphabet = {
     a: '.-',
     'b': '-...',
     'c':'-.-.',
     'd':'-..',
     'e':'.',
     'f':'..-.',
     'g':'--.',
     'h':'....',
     'i':'..',
     'j':'.---',
     'k':'-.-',
     'l':'.-..',
     'm':'--',
     'n':'-.',
     'o':'---',
     'p':'.--.',
     'q':'--.-',
     'r':'.-.',
     's':'...',
     't':'-',
     'u':'..-',
     'v':'...-',
     'w':'.--',
     'x':'-..-',
     'y':'-.--',
     'z':'--..',
     '1':'.----',
     '2':'..---',
     '3':'...--',
     '4':'....-',
     '5':'.....',
     '6':'-....',
     '7':'--...',
     '8':'---..',
     '9':'----.',
     '0':'-----'
    }

const translateMoreseToEnglish = (input) => {
    
}

 export const translateEnglishToMorse = (input) => {
    if(englishMorseAlphabet.hasOwnProperty(input)){
        return englishMorseAlphabet[input]
    } else if(!englishMorseAlphabet.hasOwnProperty(input) && input === ' '){
        return ' / '
    }
}

translateEnglishToMorse('0')