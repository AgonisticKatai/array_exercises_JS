// Write a function findLongestWord() that takes an array of words and returns the length of the longest one.

function findLongestWord (userWords) {
  var count = 0
  for (var i = 0; i < userWords.length; i++) {
    if (userWords[i].length > count) {
      count = userWords[i].length
    }   
  }
  return count
}
findLongestWord(['hello', 'bye', 'return', 'special', 'satisfaction'])
