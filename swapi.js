function getOpeningCrawl() {
  fetch('https://swapi.co/api/films/1/')
    .then(response => response.json())
    .then(film => document.getElementById("crawlDiv").innerText = film.opening_crawl)
}

function getPlanet() {
  const input = parseInt(document.getElementById("planetInput").value)
  fetch(`https://swapi.co/api/planets/${input}/`)
    .then(response => response.json())
    .then(planet => document.getElementById("planetData").innerHTML = 
      `<br><h3>${planet.name}</h3><p>Climate: ${planet.climate}</p>`
    )
}

function getDroids() {
  ["2", "3"].forEach(function(id) { 
    fetch(`https://swapi.co/api/people/${id}/`)
      .then(response => response.json())
      .then(function(droid) {
        document.getElementById(`droid-${id}`).innerHTML = 
          `<h4>${droid.name}</h4>
          <p>Height: ${droid.height}<br>
          Mass: ${droid.mass}<br>
          <span id="droid-planet-${id}"></span>
          <button id="droid-btn-${id}">Get Home Planet</button></p><br>`

        const getHomeWorld = function() {
          fetch(`${droid.homeworld}`)
            .then(response => response.json())
            .then(planet => document.getElementById(`droid-planet-${id}`).innerHTML = `Home World: ${planet.name}<br>`)
        }

        document.getElementById(`droid-btn-${id}`).addEventListener("click", getHomeWorld)
      })
  })
}

function validateInput() {
  const input = parseInt(document.getElementById("planetInput").value)
  return (input >= 1 && input <= 60) ? true : false
}

const findPlanetBtn = document.getElementById("findPlanet")
const crawlBtn = document.getElementById("crawlBtn")

crawlBtn.addEventListener("click", getOpeningCrawl)
findPlanetBtn.addEventListener("click", function(e) {
  e.preventDefault()
  validateInput() ? getPlanet() : alert("Only numbers 1 through 60 are valid")
})

getDroids()