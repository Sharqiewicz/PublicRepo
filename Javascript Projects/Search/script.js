const uri = "https://raw.githubusercontent.com/Sharqiewicz/PublicRepo/master/Javascript%20Projects/Search/data.json";

let cities = [];

fetch(uri)
    .then(rawData => rawData.json())
    .then(data => cities = data)


    function findMatches(wordToMatch, cities){
        return cities.cities.filter((place) => {
            // RegExp is the way to match patterns inside of string
            const regex = new RegExp(wordToMatch, 'gi');
            return place.city.match(regex) || place.region.match(regex);
        })
    }

    function displayMatches(){
        const matchResult = findMatches(this.value, cities);
        const htmlCode = matchResult.map(place=>{
            return `<li>${place.city}, ${place.region}</li>`
        }).join("");
        searchUl.innerHTML = htmlCode;
    }

    const searchInput = document.querySelector('.search');
    const searchUl = document.querySelector('ul');

    searchInput.addEventListener('change', displayMatches);
    searchInput.addEventListener('keyup', displayMatches);