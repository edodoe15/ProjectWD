//GET METODA
fetch(`https://ptf-web-dizajn-2022.azurewebsites.net/api/Food`)
    .then(response => {
        return response.json();
    })
    .then(data => {
        meals = data;
        renderMeals(data);
    })

const renderMeals = (meals) => {
    const jelo = document.getElementById('meal');

    let resultHtml = '';

    meals.forEach(element => {
        resultHtml += `
                        <div class="meal-item">
                        <div class="meal-img">
                            <img src="${element.imageUrl}" alt="Hrana" width="500" height="250" >
                        </div>
                        <div class="meal-name">
                            <h3>${element.name}</h3>
                            <p>Cijena: ${element.price} KM</p>
                        </div>
                        </div>`;
    });

    jelo.innerHTML = resultHtml;
}