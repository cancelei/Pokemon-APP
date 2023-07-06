import './style.css';
import { createCard, populateCard } from './cardUtils.js';
import { updateitemscount, LikeCounter } from './homepagecounter.js';
import './popup.js';

const main = document.querySelector('.main');
const fetchPromises = [];
const MAXCARDS = 9;

for (let i = 1; i <= MAXCARDS; i += 1) {
  const newCard = createCard(i);
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

LikeCounter(3);