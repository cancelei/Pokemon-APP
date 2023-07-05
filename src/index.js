import './style.css';
import { createCard, populateCard } from './cardUtils.js';
import './popup';

const main = document.querySelector('.main');
const fetchPromises = [];

for (let i = 1; i <= 6; i += 1) {
  const newCard = createCard(i);
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
