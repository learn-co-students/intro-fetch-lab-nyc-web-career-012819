// Write your swapi code in this file!
// ******************* fetching *******************
function fetchSWData() {
  fetch('https://swapi.co/api/films/1/')
  .then(res => res.json())
  .then(starwars => crawl.innerText = starwars.opening_crawl)
  // .then(starwars => console.log(starwars)); // show in crawlDiv(HTML)
}

function getPlanet(planetNumber) {
  fetch(`https://swapi.co/api/planets/${planetNumber}/`)
  .then(res => res.json())
  .then(function(planet) {
    planetInfo.innerHTML =
    `
    <h4>Planet Name: "${planet.name}"</h4>
    <h4>Planet Climate: "${planet.climate}"</h4>
    `;
  })
}

function getPeople() {
  //getDroids
  [2, 3].forEach(function(num) {
    fetch(`https://swapi.co/api/people/${num}/`)
    .then(res => res.json())
    // .then(person => console.log(person))
    .then(function(person) {
      document.getElementById(`droid-${num}`).innerHTML +=
      `
      <span id="foundDroid${num}">
      <p>Name: ${person.name}</p>
      <p>Height: ${person.height}</p>
      <p>Mass: ${person.mass}</p>
      <button type="button" id="droid-${num}-btn">Planet Info</button><br>
      </span>
      `;
      obj[`${num}`] = `${person.homeworld}`;
    })
  })
}
getPeople();

function getHomePlanet(planetURL, droidID) {
  fetch(planetURL)
  .then(res => res.json())
  .then(function(planet) {
    document.getElementById(`droid-${droidID}`).innerHTML +=
    `
    <p>Planet Name: ${planet.name}</p>
    <p>Planet Climate: ${planet.climate}</p>
    `;
  })
}

// let promiseForData = fetch('https://swapi.co/api/films/1/');
// let something  = promiseForData.then(response => response.json());
// *************************************************

// ******************* Get Opening Crawl *******************
const openingCrawlBtn = document.getElementById('crawlBtn');
const crawlDiv = document.getElementById('crawlDiv');
let crawl = document.createElement('p');

openingCrawlBtn.addEventListener('click', function(event) {
  fetchSWData();
  crawlDiv.appendChild(crawl);
})
// *********************************************************

// ******************* Planet Search *******************
const findPlanetBtn = document.getElementById('findPlanet');
const planetInput = document.getElementById('planetInput');
const planetDataDiv = document.getElementById('planetData');
const planetInfo = document.createElement('div');

findPlanetBtn.addEventListener('click', function(event) {
  let planetNumber = parseInt(planetInput.value)

  // if the value is between 1-60, pass, anything else not pass.
  if (planetNumber >= 1 && planetNumber <= 60 ) {
    getPlanet(planetNumber);
    planetDataDiv.appendChild(planetInfo);
  } else {
    alert('only from 1 to 60, nothing else.')
  }
})
// ********************************************************

// ******************* Find These Driods *******************
// name, height, mass for id 2 and 3
const bigColumn = document.querySelector('.eight.wide.column');
const droid2Span = document.getElementById('foundDroid2');
const droid3Span = document.getElementById('foundDroid3');
let obj = {};

bigColumn.addEventListener('click', function(event) {
  const planetSearchBtn2 = document.getElementById('droid-2-btn') // can't be global due to being promise.
  const planetSearchBtn3 = document.getElementById('droid-3-btn') // can't be global due to being promise.
  if (event.target.id === "droid-2-btn") {
    // console.log('clicked')
    // debugger
    let droidID = parseInt(Object.keys(obj)[0]);
    let planetURL = obj[`${droidID}`];
    getHomePlanet(planetURL, droidID);

  } else if (event.target.id === "droid-3-btn") {
    // console.log('clickeeeee')
    let droidID = parseInt(Object.keys(obj)[1]);
    let planetURL = obj[`${droidID}`];
    getHomePlanet(planetURL, droidID);
  }
})
// *********************************************************
