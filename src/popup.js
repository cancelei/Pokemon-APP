// function to get data with an specific id
let cardDetails = null; 
export default function diplayCard(index) {
    const id = index;
    const url=`https://pokeapi.co/api/v2/pokemon/${id}`
    fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      setPopupDetails(data);
    })
    .catch(error => {
      console.log('could not recive data')
    });
  
}
// -------- function to set the Details of each card popup --------
function setPopupDetails(data){
  const img = document.querySelector('.pakanon-img');
  const title = document.querySelector('.title');
  const type = document.querySelector('.type');
  const weight = document.querySelector('.weight');
  const Length = document.querySelector('.length')
  type.textContent = data.types[0].type.name;
  weight.textContent = data.weight;
  Length.textContent = data.stats.length;
  title.innerHTML =  data.species.name;
  img.src = data.sprites.front_default;
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
          <h2>Comments (2)</h2>
        </div>
        <div class="modal-item">
          <p class="comments"><span>2000/04/09</span> <B>Alex</B>: <i>Alex's comments</i></p>
        </div>
      </div>
      <div >
        <form action="" >
          <fieldset class="add-cooment-form">
            <legend>Add Comment</legend>
            <input type="text" placeholder="Your Name">
            <textarea name="" id="" cols="5" rows="5" placeholder="Your insight"></textarea>
            <input type="submit" value="Comment" class="btn-comment">
          </fieldset>
        </form>
      </div>
    </div>
  
  </div>
  `;


// Get the modal
let modal = document.querySelector("#myModal");

// Get the button that opens the modal
let btn= document.querySelector('.myBtn');

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
