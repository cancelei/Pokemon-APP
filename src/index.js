import './style.css';

const cards = document.getElementsByClassName('card');
const fetchPromises = [];

function populateCard(card, data) {
  const nameElement = card.querySelector('.cardtitle');
  const imageElement = card.querySelector('.pokeimg');

  const capitalizedFirstLetter = data.name.charAt(0).toUpperCase();
  const modifiedName = capitalizedFirstLetter + data.name.slice(1);

  nameElement.textContent = modifiedName;
  imageElement.src = data.sprites.front_default;
}

for (let i = 1; i <= cards.length; i + 1) {
  const card = cards[i - 1];

  const fetchPromise = fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
    .then((response) => response.json())
    .then((data) => {
      populateCard(card, data);
    })
    .catch(() => {});

  fetchPromises.push(fetchPromise);
}

Promise.all(fetchPromises)
  .then(() => {});