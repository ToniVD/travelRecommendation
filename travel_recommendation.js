const clearSearchButton = document.getElementById("btnClear");
const searchButton = document.getElementById("btnSearch");

function searchRecommendations(){
    const input = document.getElementById('searchInput').value.toLowerCase().trim();
    const recommendationDiv = document.getElementById('recommendation');
    recommendationDiv.innerHTML = '';

    fetch('travel_recommendation_api.json')
      .then(response => response.json())
      .then(data => {
        if (input === "beach" || input === "beaches") {
                    
            for (let i = 0; i < 2; i++){
                let obj = data.beaches[i]
                console.log(obj.name)
                recommendationDiv.innerHTML += `<h3>${obj.name}</h3>`;
                recommendationDiv.innerHTML += `<img src="${obj.imageUrl}" alt="hjh">`;
                recommendationDiv.innerHTML += `<p>${obj.description}</p>`;
            }
        }

        if (input === "temple" || input === "temples") {
            
            for (let i = 0; i < 2; i++){
                let obj = data.temples[i]
                console.log(obj.name)
                recommendationDiv.innerHTML += `<h3>${obj.name}</h3>`;
                recommendationDiv.innerHTML += `<img src="${obj.imageUrl}" alt="hjh">`;
                recommendationDiv.innerHTML += `<p>${obj.description}</p>`;

            }
        }

        if (input === "country" || input === "countries") {
            
            for (let i = 0; i < 2; i++){
                let cities = data.countries[i].cities
                    for (let j = 0; j< 1; j++){
                        console.log(cities[j].name)
                        let obj = cities[i]
                        recommendationDiv.innerHTML += `<h3>${obj.name}</h3>`;
                        recommendationDiv.innerHTML += `<img src="${obj.imageUrl}" alt="hjh">`;
                        recommendationDiv.innerHTML += `<p>${obj.description}</p><br>`;
                    }
            }
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
}



searchButton.addEventListener('click', searchRecommendations);

function clearSearch() {
    const recommendationDiv = document.getElementById('recommendation');
    recommendationDiv.innerHTML = '';
    document.getElementById("searchInput").value = "";
}

clearSearchButton.addEventListener('click', clearSearch);