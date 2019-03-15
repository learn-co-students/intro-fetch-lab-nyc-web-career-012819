// Write your swapi code in this file!
const getOpeningcrawlButton = document.getElementById('crawlBtn');

getOpeningcrawlButton.addEventListener('click', getOpeningCrawl);

function getOpeningCrawl() {
  fetch('https://swapi.co/api/films/1/')
  .then(res => res.json())
  .then(json => console.log(json));
}
