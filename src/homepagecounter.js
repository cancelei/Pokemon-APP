export function updateitemscount() {
  const counter = document.body.querySelectorAll('.card');

  const navli = document.getElementById('counter');
  navli.innerHTML = `Pokémon ( ${counter.length} )`;
}

export async function newLike(index) {
  const appid = 'eT8XH25HH0nbRLIKTkDi'; // Replace with your previous app ID
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

  try {
    const response = await fetch(url, requestOptions);
    if (response.ok) {
      return response.text(); // Return the response text
    } else {
      throw new Error('Request failed with status ' + response.status);
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

export async function LikeCounter(index) {
  const appid = 'eT8XH25HH0nbRLIKTkDi'; // Replace with your previous app ID
  const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appid}/likes`;

  try {
    const response = await fetch(url, {
      method: 'GET',
    });

    if (response.ok) {
      const data = await response.json();
      const matchingData = data.find((item) => item.item_id === index);
      if (matchingData) {
        const { likes } = matchingData;
        const likeCounter = document.querySelector(`#likeCounter-${index}`);
        likeCounter.innerHTML = `${likes} likes`;
        return likes; // Return the updated like count
      }
    } else {
      throw new Error('Request failed with status ' + response.status);
    }
  } catch (error) {
    console.error('Error:', error);
  }
}
