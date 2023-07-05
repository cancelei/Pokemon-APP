import './style.css';
import { createCard, populateCard } from './cardUtils.js';
import { updateitemscount } from './homepagecounter.js';

const main = document.querySelector('.main');
const fetchPromises = [];
const MAXCARDS = 9;

for (let i = 1; i <= MAXCARDS; i += 1) {
  const newCard = createCard();
  main.appendChild(newCard);

  const fetchPromise = fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
    .then((response) => response.json())
    .then((data) => {
      populateCard(newCard, data);
      updateitemscount();
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