import './style.css';
import { createCard, populateCard } from './cardUtils.js';

const main = document.querySelector('.main');
const fetchPromises = [];

for (let i = 1; i <= 6; i += 1) {
  const newCard = createCard();
  main.appendChild(newCard);

  const fetchPromise = fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
    .then((response) => response.json())
    .then((data) => {
      populateCard(newCard, data);
    });

  fetchPromises.push(fetchPromise);
}

Promise.all(fetchPromises)
  .then(() => {});

// function populateCard(card, data) {
//   const nameElement = card.querySelector('.cardtitle');
//   const imageElement = card.querySelector('.pokeimg');

//   const capitalizedFirstLetter = data.name.charAt(0).toUpperCase();
//   const modifiedName = capitalizedFirstLetter + data.name.slice(1);

//   nameElement.textContent = modifiedName;
//   imageElement.src = data.sprites.front_default;
// }