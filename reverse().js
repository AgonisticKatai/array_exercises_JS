// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".

function reverse (userText) {
  userText = userText.split('').reverse().join('')
  return userText
}
reverse('aeiou')
