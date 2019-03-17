// Write your swapi code in this file!

const crawlButton = document.querySelector('#crawlBtn')
const crawlDiv = document.querySelector('#crawlDiv')
const planetInput = document.querySelector('#planetInput')
const planetData = document.querySelector('#planetData')
const findPlanetBtn = document.querySelector('#findPlanet')
const droid2 = document.querySelector('#droid-2')
const droid3 = document.querySelector('#droid-3')



// document.addEventListener('DOMContentLoaded', function getDroids() {
  fetch('https://swapi.co/api/people/')
  .then(resp => resp.json())
  // .then(console.log(resp));
  .then(json => {
    droid2.innerHTML = `<span>${json.results[1].name}</span> <span>${json.results[1].height}</span> <span>${json.results[1].mass}</span>`
    droid3.innerHTML = `<span>${json.results[2].name}</span> <span>${json.results[2].height}</span> <span>${json.results[2].mass}</span>`
  })


  crawlButton.addEventListener('click', function getOpeningCrawl() {
    fetch('https://swapi.co/api/films/1/')
    .then(resp => resp.json())
    .then(json => {
      crawlDiv.innerHTML = json['opening_crawl']
    })
  })

  // planetInput.addEventListener('click', (e) => console.log(e);)



  findPlanetBtn.addEventListener('click', function getPlanet() {
    // console.log(planetInput.value);
  if (planetInput.value > 0 && planetInput.value < 61) {
    fetch(`https://swapi.co/api/planets/${planetInput.value}`)
    .then(resp => resp.json())
    .then(json => {
      planetData.innerText = `${json['name']}
       ${json['climate']}`
      })
    } else {
      planetData.innerHTML = 'not found'
    }
  // })




})
