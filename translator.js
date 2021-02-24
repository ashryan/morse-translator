

export const englishMorseAlphabet = {
     'a': '.- ',
     'b': '-... ',
     'c':'-.-. ',
     'd':'-.. ',
     'e':'. ',
     'f':'..-. ',
     'g':'--. ',
     'h':'.... ',
     'i':'.. ',
     'j':'.--- ',
     'k':'-.- ',
     'l':'.-.. ',
     'm':'-- ',
     'n':'-. ',
     'o':'--- ',
     'p':'.--. ',
     'q':'--.- ',
     'r':'.-. ',
     's':'... ',
     't':'- ',
     'u':'..- ',
     'v':'...- ',
     'w':'.-- ',
     'x':'-..- ',
     'y':'-.-- ',
     'z':'--.. ',
     '1':'.---- ',
     '2':'..--- ',
     '3':'...-- ',
     '4':'....- ',
     '5':'..... ',
     '6':'-.... ',
     '7':'--... ',
     '8':'---.. ',
     '9':'----. ',
     '0':'----- '
    }

export const translateMorseToEnglish = (input) => {
    let result = '';
    for(let i = 0; i < input.length; i++) {
        if(Object.values(englishMorseAlphabet).includes(`${input} `)) {
           console.log('it worked')
        }
    } return result
}

 export const translateEnglishToMorse = (input) => {
    let result = '';
    for(let i = 0; i < input.length; i++) {
        if(englishMorseAlphabet.hasOwnProperty(input.charAt(i))){
            result = result + englishMorseAlphabet[input.charAt(i)]
        } else if(!englishMorseAlphabet.hasOwnProperty(input) && input.charAt(i) === ' '){
            result = result + '/ '
        } else {
            result = result + 'invalid character '
        }
    } return result
}

translateEnglishToMorse('')

console.log(translateEnglishToMorse('abcd'))

translateMorseToEnglish('-')