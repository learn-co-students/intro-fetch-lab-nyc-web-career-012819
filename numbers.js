function fetchTrivia(number) {
  return fetch(`http://numbersapi.com/${number}/trivia`)
      .then(response => response.text())
      .then(text => text)
}

function fetchAndSetHistoricalFact() {
  fetch(`http://numbersapi.com/${year--}/year`)
    .then(response => response.text())
    .then(text => yearHistoryDiv.innerText = text)
}

function fetchOneHundredNumbers() {
  return fetch("http://numbersapi.com/1..100")
      .then(response => response.json())
}

const factsAboutOne = document.querySelector("#number-one")
const pickNumberField = document.querySelector("#pick-a-number")
const randomMathFactDiv = document.querySelector("#random-math-fact")
const oneFactsDiv = document.querySelector("#one-facts")
const yearHistoryDiv = document.querySelector("#year-history")
const allNumbersBtn = document.querySelector("#all-numbers-button")
const allNumbersDiv = document.querySelector("#all-the-numbers")
let year = new Date().getFullYear()

factsAboutOne.addEventListener("click", function() {
  fetchTrivia(1).then(result => oneFactsDiv.innerText = result)
})

pickNumberField.addEventListener("change", function() {
  if (/\D/g.test(pickNumberField.value)) {
    randomMathFactDiv.innerText = "please enter a valid number"
  } else {
    fetchTrivia(pickNumberField.value).then(result => randomMathFactDiv.innerText = result)
  }
})

allNumbersBtn.addEventListener("click", function() {
  fetchOneHundredNumbers().then(function(numbers) {
    allNumbersDiv.innerHTML = ""
    
    const ul = document.createElement("ul")
    allNumbersDiv.appendChild(ul)

    for (number in numbers) {
      const li = document.createElement("li")
      li.innerHTML = numbers[number]
      ul.appendChild(li)
    }
  })
})

document.addEventListener("DOMContentLoaded", function() {
  fetchAndSetHistoricalFact()
  setInterval(fetchAndSetHistoricalFact, 5000)
})

