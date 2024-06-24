const clearSearchButton = document.getElementById("btnClear");
const searchButton = document.getElementById("btnSearch");

function searchRecommendations(){
    const input = document.getElementById('wordInput').value.toLowerCase();
    const resultDiv = document.getElementById('recommendation');
    resultDiv.innerHTML = '';

    fetch('health_analysis.json')
      .then(response => response.json())
      .then(data => {
        const word = data.words.find(item => item.name.toLowerCase() === input);
        // use || (OR) for find like || data.temples.name.find()
        // || data.countries.name.cities.name.find() etc
        // Task 7: if beach || temple || country
        // find in? like if they type australia, that should bring up
        // australia sydney or melbourne

      })
}

clearSearchButton.addEventListener('click', clearSearch);

searchButton.addEventListener('click', searchRecommendation);

function clearSearch() {
   // document.getElementById("wordInput").placeholder = "";
}

function searchRecommendation() {
    
}