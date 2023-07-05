export function updateitemscount() {
  const counter = document.body.querySelectorAll('.card');

  const navli = document.getElementById('counter');
  navli.innerHTML = `Spaceships ( ${counter.length} )`;
}

export default function newLike(index) {
  // console.log('check the API in postman to see if it workedAdded a like to item_id' + index);

  const appid = 'eT8XH25HH0nbRLIKTkDi';
  const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appid}/likes`;

  const requestBody = {
    item_id: index,
  };

  const requestOptions = {
    method: 'POST',
    body: JSON.stringify(requestBody),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  };

  fetch(url, requestOptions);
}