// Write a function translate() that will translate a text into "rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".

/* Way 1 */
function translate( textToTranslate ) {
  var textTranslated = ''
  for (var i=0; i<textToTranslate.length; i++) {
    if ('aeiou '.indexOf(textToTranslate[i]) === -1) {
      textTranslated += textToTranslate[i] + 'o' + textToTranslate[i]
    }
    else {
      textTranslated += textToTranslate[i]
    }
  }
  return textTranslated
}

/* Way 2 */
function translate( textToTranslate ) {
  var aVowels = ['a', 'e', 'i', 'o', 'u', ' ']
  var sLetters = textToTranslate.split('')
  var aTranslation = sLetters.map( function(letter) {
    var isVowel = aVowels.some(function(vowel) { return vowel === letter })
    if (isVowel) { return letter }
      else { return letter + 'o' + letter }
    })
  return aTranslation.join('')
}

/* Way 2 compressed */
function isVowel( character ) {
  var aVowels = ['a', 'e', 'i', 'o', 'u', ' ']
  return aVowels.some(function(vowel) {
    return vowel === character
  })
}

function translate( textToTranslate ) {
  return textToTranslate
  .split('')
  .map( function(letter) {
    if ( isVowel(letter) ) { return letter }
      else { return letter + 'o' + letter }
    })
  .join('')
}

/* Way 3 compressed */
function translate( textToTranslate ) {
  return textToTranslate
  .split('')
  .map( function(letter) {
    if ( isVowel(letter) ) { return letter }
      else { return letter + 'o' + letter }
    })
  .join('')
}

/* Way 4 regular expression */
function translate( text ) {
  return text.replace(/[b-df-hj-np-tv-z]/g, '$&o$&')
}