let meals = [];

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
                            <button type="button" class="btn btn-danger" onclick="deleteMeal(${element.id})">Izbriši</button>
                            <button type="button" onclick="editMeal(${element.id})" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" data-whatever="@getbootstrap">Uredi</button>
                        </div>
                        </div>`;
    });

    jelo.innerHTML = resultHtml;
}

//DELETE
const deleteMeal = (id) => {
    fetch(`https://ptf-web-dizajn-2022.azurewebsites.net/api/Food/${id}`, {
        method: 'DELETE'
    })
    .then(res => {
        console.log(res);
    })
}

//PUT
const editMeal = (elementId) => {
    const element = meals.find(element => element.id === elementId);
    const mealFormId = document.getElementById('jelo-id')
    const mealFormNaziv = document.getElementById('jelo-naziv')
    const mealFormCijena = document.getElementById('jelo-cijena')
    const mealFormURL = document.getElementById('jelo-url')

    mealFormId.value = element.id;
    mealFormNaziv.value = element.name;
    mealFormCijena.value = element.price;
    mealFormURL.value = element.imageUrl;
}

const updateMeal = () => {
    const mealFormId = document.getElementById('jelo-id').value;
    const mealFormNaziv = document.getElementById('jelo-naziv').value;
    const mealFormCijena = document.getElementById('jelo-cijena').value;
    const mealFormURL = document.getElementById('jelo-url').value;

    fetch(`https://ptf-web-dizajn-2022.azurewebsites.net/api/Food`, {
        method: 'PUT',
        headers: new Headers({
            'Content-Type': 'application/json'
        }),
        body: JSON.stringify ({
            id: mealFormId,
            name: mealFormNaziv,
            price: mealFormCijena,
            imageUrl: mealFormURL
        })
    })
    .then(response => {
        if(!response.ok)
        {
            alert('[GRESKA]');
        }
    })

}

//POST
const dodajJelo = () => {
    const hranaFormId = document.getElementById('hrana-id').value;
    const hranaFormNaziv = document.getElementById('hrana-naziv').value;
    const hranaFormCijena = document.getElementById('hrana-cijena').value;
    const hranaFormURL = document.getElementById('hrana-url').value;

    fetch(`https://ptf-web-dizajn-2022.azurewebsites.net/api/Food`, {
        method:'POST',
        headers: new Headers({
            'Content-Type': 'application/json'
        }),
        body: JSON.stringify({
            id: hranaFormId,
            name: hranaFormNaziv,
            price: hranaFormCijena,
            imageUrl: hranaFormURL
        })
    })
    .then(response => {
        console.log(response);
    })

}