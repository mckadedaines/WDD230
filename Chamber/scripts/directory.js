const requestURL = "https://mckadedaines.github.io/WDD230/Chamber/json/data.json";

async function getCards(requestURL) {
    const response = await fetch(requestURL);
    if (response.ok){
        const jsonObject = await response.json();
        console.log(jsonObject);
        const cards = jsonObject['directory'];
        cards.forEach(displayBusiness);
        // prophets.forEach(displayTable);
    }
};

getCards(requestURL);

function displayBusiness(cards) {
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let dob = document.createElement('p');
    let pob = document.createElement('p');
    let img = document.createElement('img');

    h2.textContent = cards.name;
    // Stopped right here
    dob.textContent = `${prophet.birthdate}`;
    pob.textContent = `${prophet.birthplace}`;
    img.setAttribute('src', prophet.imageurl);
    img.setAttribute('alt', `${prophet.name} ${prophet.lastname} ${prophet.order}`);
    card.appendChild(h2);
    card.appendChild(dob);
    card.appendChild(pob);
    card.appendChild(img);
    document.querySelector('.cards').appendChild(card);
}