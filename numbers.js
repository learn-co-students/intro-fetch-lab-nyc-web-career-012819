// Write your numbers code in this file!
// *********************************************
// works just fine, but many don't pass the spec
// *********************************************
const num1 = document.getElementById('number-one');
const oneFact = document.getElementById('one-facts');
let numOneText;

function fetchRandomFact(n) {
  return fetch(`http://numbersapi.com/${n}/trivia`)
  .then(response => response.text())
  }

num1.addEventListener('click', function(event) {
  fetchRandomFact(1).then(text => (oneFact.innerHTML = `<p>${text}</p>`));
    // debugger
})

// ********************************************
const pickNumInput = document.querySelector('#pick-a-number');
pickNumInput.value = '';
const mathFactDiv = document.getElementById('random-math-fact');

pickNumInput.addEventListener('change', function(event) {
  let userInput = parseInt(event.target.value);
  // debugger
  if (typeof userInput === 'number') {
    fetchRandomFact(userInput).then(text => (mathFactDiv.innerHTML = `<p>${text}</p>`));

  } else {
    mathFactDiv.innerHTML = `<p>please enter a valid number</p>`;
  }
})

// ********************************************
const yearHistoryDiv = document.querySelector('#year-history');
let year = new Date().getFullYear();

function factOfTheYear(year) {
  fetch(`http://numbersapi.com/${year}/year`)
  .then(res => res.text())
  .then(fact => yearHistoryDiv.innerHTML = `<p>${fact}</p>`);
}

factOfTheYear(year);

setInterval(function() {
  factOfTheYear(year);
  year--;
}, 5000);

// ********************************************
const allNumsDiv = document.querySelector('#all-the-numbers');
const allNumsBtn = document.querySelector('#all-numbers-button');
const arrayOfHundred = function() {
  let array = [];
  for (let i = 1; i < 101; i++) {
    array.push(i);
  }
  return array;
}

allNumsBtn.addEventListener('click', function(event) {
  arrayOfHundred.forEach(function(num) {
    fetch(`http://numbersapi.com/${n}/trivia`)
    .then(res => res.text())
    .then(facts => allNumsDiv.innerHTML = `<p>${facts}</p>`);
  })
})
