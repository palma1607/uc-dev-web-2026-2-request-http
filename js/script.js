function responseRequestReturn(response){
    return response.json()
}

function responseRequestBody(data){
    data.forEach(function(item){
        addSuperHeroCard(item)
    });
}

function loadSuperHeroesFromAPI(){
    fetch("https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json")
    .then(responseRequestReturn)
    .then(responseRequestBody)
}

function addSuperHeroCard(item){
    const urlImage = item.images.sm

    const imageElement = document.createElement("img")
    imageElement.src = urlImage

    const divElement = document.getElementById("content")
    divElement.appendChild(imageElement)
}

loadSuperHeroesFromAPI()