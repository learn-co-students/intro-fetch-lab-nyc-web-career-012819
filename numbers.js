const oneFactDiv = document.getElementById('one-facts');
const button = document.getElementById('number-one');
const pickANum = document.getElementById('pick-a-number');
const randFact = document.getElementById('random-math-fact');
const yearHistoryDiv = document.getElementById('year-history');
const allNumButton = document.getElementById('all-numbers-button');
const allNumsDiv = document.getElementById('all-the-numbers');

let year = new Date().getFullYear();

setInterval(function(){
  fetch(`http://numbersapi.com/${year}/year`)
  .then(function(resp){
    return resp.text();
  })
  .then(function(text){
    yearHistoryDiv.innerHTML = `
    <p>${text}</p>
    `
    year -= 1;
  })
}, 5000)


button.addEventListener('click', function(e){
  fetch('http://numbersapi.com/1/trivia')
  .then(function(resp){
    return resp.text();
  })
  .then(function(text){
    oneFactDiv.innerHTML = `
    <p>${text}</p>
    `
  })
})

pickANum.addEventListener('change', function(e){
  let input = parseInt(e.target.value);
  if(Number.isInteger(input)){
    fetch(`http://numbersapi.com/${e.target.value}/trivia`)
    .then(function(resp){
      return resp.text()
    })
    .then(function(text){
      randFact.innerHTML =
      `<p>${text}</p>`
    })
  } else {
    randFact.innerHTML =
    `<p>please enter a valid number</p>`
  }
})

allNumButton.addEventListener('click', function(){
  allNumsDiv.innerHTML = '';
  for (let i = 0; i < 100; i++) {
    fetch(`http://numbersapi.com/${Math.floor(Math.random() * 100)}/trivia`)
    .then(function(resp){
      return resp.text();
    })
    .then(function(text){
      allNumsDiv.innerHTML += `
      <li>${text}</li>
      `
    })
  }
})
