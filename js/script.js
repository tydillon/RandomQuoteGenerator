//instead of working from my actual quote array, I'm creating a copy of the array so that I can replenish when empty
let copy = []
let dogpic = ''

// 'database' of quotes
const quotes = [
  {
    quote:
      'The world would be a nicer place if everyone had the ability to love as unconditionally as a dog.',
    source: 'M.K. Clinton',
    citation: 'The Returns',
    year: '2013'
  },
  {
    quote:
      'A dog is the only thing on earth that loves you more than he loves himself.',
    source: 'Josh Billings',
    category: 'inspirational'
  },
  {
    quote: 'Dogs are not our whole life, but they make our lives whole.',
    source: 'Roger Caras'
  },
  {
    quote: 'The better I get to know men, the more I find myself loving dogs.',
    source: 'Charles de Gaulle',
    category: 'humor'
  },
  {
    quote:
      'The only creatures that are evolved enough to convey pure love are dogs and infants.',
    source: 'Johnny Depp',
    citation: 'Pirates of the Caribbean',
    year: '2000',
    category: 'inspirational'
  },
  {
    quote:
      'What counts is not necessarily the size of the dog in the fight; it’s the size of the fight in the dog.',
    source: 'Dwight D. Eisenhower'
  },
  {
    quote:
      'A dog can’t think that much about what he’s doing, he just does what feels right.',
    source: 'Barbara Kingsolver'
  },
  {
    quote:
      'Once you have had a wonderful dog, a life without one, is a life diminished.',
    source: 'Dean Koontz'
  },
  {
    quote:
      'Dogs don’t rationalize. They don’t hold anything against a person. They don’t see the outside of a human but the inside of a human.',
    source: 'Cesar Milan'
  },
  {
    quote:
      'No one appreciates the very special genius of your conversation as the dog does.',
    source: 'Christopher Morley',
    category: 'inspirational'
  },
  {
    quote:
      'If you think dogs can’t count, try putting three dog biscuits in your pocket and then give him only two of them.',
    source: 'Phil Pastoret',
    category: 'humor'
  }
]

//retrieve random quote from the list
const getRandomQuote = () => {
  //if my copy is empty, set it equal to my quotes array. Works because of the spread syntax
  if (copy.length < 1) {
    copy = [...quotes]
  }
  //generates random quote from the copy array
  let randnum = Math.floor(Math.random() * copy.length)
  let randQuote = copy[randnum]
  //removes the quote that was just generated from the copy array
  copy.splice(randnum, 1)
  return randQuote
}

//Using new fetch method instead of previous method above to get a dog picture
const newDogPic = () => {
  const img = document.querySelector('#toppic')
  fetch('https://dog.ceo/api/breeds/image/random')
    .then(r => r.json())
    .then(data => (img.src = data.message))
    .catch(error => console.log('Looks like there was a problem', error))
}

// prints quote to the HTML
const printQuote = () => {
  let quoteToPrint = getRandomQuote()
  let str = ''
  str = `<img id="toppic" src="${dogpic}"><p class="quote">${
    quoteToPrint.quote
  }</p><p class="source">${quoteToPrint.source}`
  quoteToPrint.citation
    ? (str += `<span class="citation">${quoteToPrint.citation}</span>`)
    : null
  quoteToPrint.year
    ? (str += `<span class="year">${quoteToPrint.year}</span>`)
    : null
  str += `</p>`
  quoteToPrint.category
    ? (str += `<p><span class="category">#${quoteToPrint.category}</span></p>`)
    : null
  document.getElementById('quote-box').innerHTML = str
}

//change background color
const getRandomColor = () => {
  var letters = '0123456789ABCDEF'
  var color = '#'
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * letters.length)]
  }
  document.body.style.backgroundColor = color
  document.getElementById('loadQuote').style.backgroundColor = color
}

//calls both functions at the same time
const quoteAndColor = () => {
  getRandomColor()
  printQuote()
  newDogPic()
}

//If the user hasn't pushed the button in 10 seconds, a new quote automatically loads
const onInter = () => {
  setInterval(quoteAndColor, 10000)
}
onInter()

// code for the button to generate a new quote
document
  .getElementById('loadQuote')
  .addEventListener('click', quoteAndColor, false)
