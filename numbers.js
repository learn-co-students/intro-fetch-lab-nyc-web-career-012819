// Write your numbers code in this file!
document.addEventListener('DOMContentLoaded', function(){

  const buttonOne = document.querySelector('#number-one')
  const oneFact = document.querySelector('#one-facts')
  const pickNumber = document.querySelector('#pick-a-number')
  const randomFact = document.querySelector('#random-math-fact')
  const yearHistory = document.querySelector('#year-history')
  const allNumbersButton = document.querySelector('#all-numbers-button')

  buttonOne.addEventListener('click', function(){
    fetch('http://numbersapi.com/1/trivia')
    .then(res => res.text())
    .then(str => {
      oneFact.innerText = str
    })
  })


  pickNumber.addEventListener('change', function(e){
    if (isNaN(e.target.value) === false) {
      fetch(`http://numbersapi.com/${e.target.value}/trivia`)
      .then(res => res.text())
      .then(str => {
        randomFact.innerText = str
    })} else {
      randomFact.innerText = 'please enter a valid number'
    }
  })

  let year = 2019

  setInterval(function(){
    getYearFact()
  }, 5000)

    function getYearFact(){
      fetch(`http://numbersapi.com/${year--}/year`)
      .then(res => res.text())
      .then(str => {
        yearHistory.innerText = str
      })
    }

    let allTheNumbers = document.querySelector("#all-the-numbers")
    let ul = document.createElement('ul')
    allTheNumbers.appendChild(ul)

  allNumbersButton.addEventListener('click', function(){
    ul.innerText = ''
    fetch(`http://numbersapi.com/1..100`)
    .then(res => res.json())
    .then(json => (Object.values(json)).forEach(fact => {
      let li = document.createElement('li')
      li.innerText += fact
      ul.appendChild(li)
      })
    )
  })
  getYearFact()
})
