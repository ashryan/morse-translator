import {translateEnglishToMorse, translateMorseToEnglish} from './translator.js'

it ('Should translate a to .-', () => {
    const result = translateEnglishToMorse('a')
    expect(result).toBe('.-')
})

it ('Should translate t to -', () => {
    const result = translateEnglishToMorse('t')
    expect(result).toBe('-')
})

it ('Should translate abc to .- -... -.-.', () => {
    const result = translateEnglishToMorse('abc')
    expect(result).toBe('.- -... -.-.')
})

it ('Should translate 0 1 2 3 to .---- / ..--- / ...-- / ....-', () => {
    const result = translateEnglishToMorse('a')
    expect(result).toBe('.---- / ..--- / ...-- / ....-')
})

it ('Should translate hi i like morse to .... .. / .. .-.. .. -.- . / -- -- .-. ... .', () => {
    const result = translateEnglishToMorse('hi i like morse')
    expect(result).toBe('.... .. / .. .-.. .. -.- . / -- -- .-. ... .')
})

//test loads of valid inputes

//test loads of invalid

it ('Should translate ! to invalid', () => {
    const result = translateEnglishToMorse('!')
    expect(result).toBe('invalid')
})

it ('Should translate i //like grapes .. / invalid invalid .-.. -.- . / --. .-. .- .--. . ...', () => {
    const result = translateEnglishToMorse('i //like grapes')
    expect(result) .toBe('.. / invalid invalid .-.. -.- . / --. .-. .- .--. . ...')
})

// it ('Should translate  to .-', () => {
//     const result = translateEnglishToMorse('a')
//     expect(result).toBe('.-')
// })

// it ('Should translate a to .-', () => {
//     const result = translateEnglishToMorse('a')
//     expect(result) .toBe('.-')
// })

// it ('Should translate a to .-', () => {
//     const result = translateEnglishToMorse('a')
//     expect(result) .toBe('.-')
// })

// it ('Should translate a to .-', () => {
//     const result = translateEnglishToMorse('a')
//     expect(result) .toBe('.-')
// })


//test null/empty

it ("Should translate '' to empty", () => {
    const result = translateEnglishToMorse('')
    expect(result).toBe('empty')
})

