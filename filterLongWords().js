// Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.

function filterLongWords (userWords, integer) {
  var longWords = []
  for (var i = 0; i < userWords.length; i++) {
    if (userWords[i].length > integer) {
      longWords.push(userWords[i])
    } 
  }
  return longWords.join(', ')
}
filterLongWords(['hello', 'bye', 'return', 'special', 'satisfaction'], 5)
