const clearSearchButton = document.getElementById("btnClear");
const searchButton = document.getElementById("btnSearch");

function searchRecommendations(){
    const input = document.getElementById('searchInput').value.toLowerCase();
    // const resultDiv = document.getElementById('recommendation');
    // resultDiv.innerHTML = '';

    fetch('travel_recommendation_api.json')
      .then(response => response.json())
      .then(data => {
                if (input === "beach" || input === "beaches") {
                    
                    for (let i = 0; i < data.beaches.length; i++){
                        let obj = data.beaches[i].name
                        console.log(obj)
                    }
                }
      })
      .catch(error => {
        console.error('Error:', error);
      });
}

// clearSearchButton.addEventListener('click', clearSearch);

searchButton.addEventListener('click', searchRecommendations);

// function clearSearch() {
//    // document.getElementById("wordInput").value = "";
// }
