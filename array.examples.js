var beatles = ['john', 'paul', 'george', 'ringo']

beatles.forEach (function (item, index, array) {
  console.log('Beatle number ' + (index + 1) + ' is ' + item)
})

beatles.map (function (item) {
  return item.toUpperCase()
})

beatles.filter (function (item) {
  return (item.indexOf('o') !== -1)
})

beatles.every ( function (item) {
  return item.length >= 4
})

beatles.some (function (item) {
  return item[0] === 'j'
})

beatles.reduce(function (acc, item) {
  acc[item] = item.length
  return acc
}, {})

Array(100).fill(0).map (function (item, index, array) {
  return Math.floor(Math.random() * array.length)
})
