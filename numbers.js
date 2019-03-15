// Write your numbers code in this file!
document.addEventListener("DOMContentLoaded", function(){

  const numberOneButton = document.querySelector("#number-one");
  numberOneButton.addEventListener('click', fetchRandomFactForNumberOne);

  let chosenNumberInput = document.querySelector("#pick-a-number");
  chosenNumberInput.addEventListener('change', pickNumber);

  let currentDate = new Date();
  let year = currentDate.getFullYear();

  const allOfTheNumber = document.querySelector('#all-numbers-button');
  allOfTheNumber.addEventListener('click', fetchFactOfAllNumbers);

  function fetchRandomFact(n) {
    return fetch(`http://numbersapi.com/${n}/trivia`)
    .then(response => {
      return response.text()
    })
  }

  function fetchRandomFactForNumberOne() {
    fetchRandomFact(1).then(text => {
      document.querySelector('#one-facts').innerHTML = text;
    })
  }

  function pickNumber() {
    let n = chosenNumberInput.value;
    if (isNaN(n)) {
      document.querySelector('#random-math-fact').innerHTML = 'please enter a valid number'
    } else {
      fetchRandomFact(n).then(text => {
        document.querySelector('#random-math-fact').innerHTML = text;
      })
    }
  }

  getFactOfYear(year);

  function getFactOfYear(year) {
    fetch(`http://numbersapi.com/${year}/year`)
    .then(response => {
      return response.text()})
      .then(funFact => {
        document.querySelector('#year-history').innerHTML = funFact;
      })
    }

    setInterval(function(){
      getFactOfYear(year);
      year--;
    },5000)


    function fetchFactOfAllNumbers(){
      fetch("http://numbersapi.com/1..100")
      .then(response => {
        return response.json()})
        .then(json => {
          var ul=document.createElement('ul');
          allOfTheNumber.appendChild(ul);
          let keys = Object.keys(json);
          keys.forEach(function (fact){
            let li = document.createElement("li");
            li.innerHTML = json[fact];
            ul.appendChild(li);
            console.log(json[fact]);
          })
        })
      }

})
