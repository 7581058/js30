const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = []

fetch(endpoint)
  .then(blob => blob.json())
  .then(data => cities.push(...data))

function findMatches(wordToMatch, cities) {
  return cities.filter(place => {
    //도시나 주가 검색과 일치하는지 확인 
    const regex = new RegExp(wordToMatch, 'gi') //전역, 대소문자 구분 안함 
    return place.city.match(regex) || place.state.match(regex)
  })
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

function displayMatches() {
  const matchArray = findMatches(this.value, cities)
  const html = matchArray.map(place => {
    const regex = new RegExp(this.value, 'gi')
    const cityName = place.city.replace(regex, /*html*/`<span class="hl">${this.value}</span>`)
    const stateName = place.state.replace(regex, /*html*/`<span class="hl">${this.value}</span>`)  
    return /*html*/`
      <li>
        <span class="name">${cityName}, ${stateName}</span>
        <span class="population">${numberWithCommas(place.population)}</span>
      </li>
    `
  }).join('')
  suggestions.innerHTML = html
}

const searchInput = document.querySelector('.search')
const suggestions = document.querySelector('.suggestions')

//변경될때마다 즉시 갱신
searchInput.addEventListener('change', displayMatches)
searchInput.addEventListener('keyup', displayMatches)