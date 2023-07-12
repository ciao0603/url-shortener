function generateURL() {
  const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
  const upperCaseLetters = lowerCaseLetters.toUpperCase()
  const numbers = '1234567890'

  let collection = []
  collection = collection.concat(lowerCaseLetters.split(''))
  collection = collection.concat(upperCaseLetters.split(''))
  collection = collection.concat(numbers.split(''))

  let url = 'https://URL-shortener.herokuapp.com/'
  for(i=0; i<5; i++) {
    const index = Math.floor(Math.random()*collection.length)
    url+=collection[index]
  }
  return url
}

module.exports = generateURL