

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
    } return result.trim()
}


export function translateMorseToEnglish(input) {
    const morseSplit = input.split(' ')
    let result = ''
    for(let i=0; i < morseSplit.length; i++) {
        if (morseSplit[i] == '/'){
            result = result + ' '
        } else {
         result = result + Object.keys(englishMorseAlphabet).find(key => englishMorseAlphabet[key] === `${morseSplit[i]} `);}
       
        } return result
    }
   




console.log(translateEnglishToMorse('a'))

console.log(translateMorseToEnglish('-'))

