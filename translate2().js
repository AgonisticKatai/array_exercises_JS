// Represent a small bilingual lexicon as a Javascript object in the following fashion {"merry":"god", "christmas":"jul", "and":"och", "happy":gott", "new":"nytt", "year":"år"} and use it to translate your Christmas cards from English into Swedish.

function translate( message ) {
  var oDictionary = {
    "merry": "god",
    "christmas": "jul",
    "and": "och",
    "happy": "gott",
    "new": "nytt",
    "year": "år"
  }

  var aWords = message.split(" ")
  var nNumWords = aWords.length
  var aTranslation = []
  for (var i=0; i<nNumWords; i++) {
    var sCurrentWord = aWords[i]
    if (oDictionary[sCurrentWord]) {
      aTranslation.push( dictionary[currentWord] )
    }
  }
  return aTranslation.join(' ')
}

translate("merry christmas and happy new year")
// god jul och gott nytt år


