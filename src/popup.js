import countComments from './commentCounter';
// ----- get Comments from api -----
export async function diplayComments() {
  const form = document.querySelector('.form');
  const itemId = form.id;
  const commentList = document.querySelector('.comment-list');
  let commentCounter = 0;
  const involvementApiUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/eT8XH25HH0nbRLIKTkDi';
  await fetch(`${involvementApiUrl}/comments?item_id=${itemId}`)
    .then((response) => (response.json()))
    .then((data) => {
      data.forEach((element) => {
        const userComment = document.createElement('p');
        userComment.innerHTML = `${element.creation_date}  ${element.username}: ${element.comment}`;
        commentList.appendChild(userComment);
        commentCounter += 1;
      });

      countComments(commentCounter);
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
}

// -------- function to set the Details of each card popup --------
function setPopupDetails(data) {
  const img = document.querySelector('.pakanon-img');
  const title = document.querySelector('.title');
  const type = document.querySelector('.type');
  const weight = document.querySelector('.weight');
  const Length = document.querySelector('.length');
  const cardTitle = data.name.charAt(0).toUpperCase();
  const cardTitleUpperCase = cardTitle + data.name.slice(1);
  type.textContent = data.types[0].type.name;
  weight.textContent = data.weight;
  Length.textContent = data.stats.length;
  title.innerHTML = cardTitleUpperCase;
  img.src = data.sprites.front_default;
  diplayComments();
}

// function to get data with an specific id
export default function diplayCard(index) {
  const form = document.querySelector('.form');
  form.setAttribute('id', `${index}`);
  const id = index;
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      setPopupDetails(data);
    })
    .catch((error) => {
      console.log(error);
    });
}

// -- Create PopUp ----
const Popup = document.querySelector('.Popup');
Popup.innerHTML = `
  <!-- The Modal -->
  <div id="myModal" class="modal">
  
    <!-- Modal content -->
    <div class="modal-content">
      <div class="modal-header">
        <span class="close">&times;</span>
        <img src="" alt="" class="pakanon-img">
      </div>
      <div class="modal-body">
        <div class="modal-item">
          <h2 class='title'>Space 3</h2>
        </div>
        <div class="modal-item">
          <p>Type: <span class="type"></span></p>
          <p>Length: <span class="length"></span></p>
        </div>
        <div class="modal-item">        
          <p>Weight: <span class="weight"></span></p>
        </div>
        <div class="modal-item">
          <h2>Comments (<span class='counter'></span>)</h2>
        </div>
        <div class="modal-item">
          <div class='comment-list'></div>
        </div>
      </div>
      <div >
        <form action="" class="form" >
          <fieldset class="add-cooment-form">
            <legend>Add Comment</legend>
            <input type="text" placeholder="Your Name" class="user" required>
            <textarea  cols="5" rows="5" placeholder="Your insight" class='userComment' required></textarea>
            <input type="submit" value="Comment" class="btn-comment">
          </fieldset>
        </form>
      </div>
    </div>
  
  </div>
  `;

// Get the modal
const modal = document.querySelector('#myModal');

// Get the <span> element that closes the modal
const span = document.getElementsByClassName('close')[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = 'none';
  const commentList = document.querySelector('.comment-list');
  commentList.innerHTML = '';
  countComments('0');
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = 'none';
    const commentList = document.querySelector('.comment-list');
    commentList.innerHTML = '';
    countComments('0');
  }
};
// --- add a new comment ---
const sendComment = async (id, user, comment) => {
  const involvementApiUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/eT8XH25HH0nbRLIKTkDi';
  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  const raw = JSON.stringify({
    item_id: id,
    username: user,
    comment,
  });
  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow',
  };
  fetch(`${involvementApiUrl}/comments`,
    requestOptions);
};
// get the form data
const getFormData = async () => {
  const userInput = document.querySelector('.user');
  const userComments = document.querySelector('.userComment');
  const form = document.querySelector('.form');
  const user = userInput.value;
  const comment = userComments.value;
  const itemId = form.id;
  await sendComment(itemId, user, comment);
  userInput.value = '';
  userComments.value = '';
  modal.style.display = 'none';
  const commentList = document.querySelector('.comment-list');
  commentList.innerHTML = '';
};

const form = document.querySelector('.form');
form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent form submission

  getFormData();
});