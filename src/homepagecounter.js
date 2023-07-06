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

  // create a function that will use get request to get a data File. after that we will do a for loop to check if the id of the item is equal to the id of the item in the data file. if it is equal we will add the likes to the item counter

  function LikeCounter(index) {
    const appid = 'eT8XH25HH0nbRLIKTkDi';
    const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appid}/likes`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        for (let i = 0; i < data.length; i += 1) {
          if (data[i].item_id === index) {
            const { likes } = data[i];
            const likeCounter = document.getElementById('likeCounter');
            likeCounter.innerHTML = `${likes} likes`;
          }
        }
      });
  }

  const requestOptions = {
    method: 'POST',
    body: JSON.stringify(requestBody),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  };

  fetch(url, requestOptions);
}