import diplayCard from './popup';

export function createCard(index) {
  const card = document.createElement('div');
  card.className = 'card';

  const imageElement = document.createElement('img');
  imageElement.className = 'pokeimg';
  imageElement.id = 'pokeimg';
  imageElement.alt = 'pokeimage';
  card.appendChild(imageElement);

  const cardInfo = document.createElement('div');
  cardInfo.className = 'card-info';
  card.appendChild(cardInfo);

  const titleParent = document.createElement('div');
  titleParent.className = 'cardtitleparent';
  cardInfo.appendChild(titleParent);

  const titleElement = document.createElement('h2');
  titleElement.className = 'cardtitle';
  titleParent.appendChild(titleElement);

  const likeButton = document.createElement('p');
  likeButton.className = 'likebutton';
  titleParent.appendChild(likeButton);

  const likeButtonCounter = document.createElement('p');
  likeButtonCounter.className = 'likebuttoncounter';
  likeButtonCounter.textContent = '(Like Counter)';
  cardInfo.appendChild(likeButtonCounter);

  let modal = document.querySelector("#myModal");

  const commentButton = document.createElement('button');
  commentButton.classList.add('commentbutton') ;
  commentButton.classList.add('btn') ;
  commentButton.classList.add('myBtn');
  commentButton.setAttribute('id', `${index}`);
  commentButton.addEventListener('click',function(element){
    modal.style.display = "block";
    diplayCard(index);
  })
  commentButton.textContent = 'Comment';
  cardInfo.appendChild(commentButton);

  const reservationButton = document.createElement('button');
  reservationButton.className = 'reservationbutton btn';
  reservationButton.textContent = 'Reservation';
  cardInfo.appendChild(reservationButton);

  return card;
}

export function populateCard(card, data) {
  const nameElement = card.querySelector('.cardtitle');
  const imageElement = card.querySelector('.pokeimg');

  const capitalizedFirstLetter = data.name.charAt(0).toUpperCase();
  const modifiedName = capitalizedFirstLetter + data.name.slice(1);

  nameElement.textContent = modifiedName;
  imageElement.src = data.sprites.front_default;
}
