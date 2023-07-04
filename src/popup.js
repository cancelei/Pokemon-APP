// function to get data with an specific id 
export default function diplayCard(index) {
    const id = index;
    const fetchPromise = fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then((response) => response.json())
    .then((data) => {
      
    });
}
const Popup = document.querySelector('.Popup');
Popup.innerHTML = `
<!-- The Modal -->
<div id="myModal" class="modal">

  <!-- Modal content -->
  <div class="modal-content">
    <div class="modal-header">
      <span class="close">&times;</span>
      <img src="download.jpeg" alt="" class="pakanon-img">
    </div>
    <div class="modal-body">
      <div class="modal-item">
        <h2>Space 3</h2>
      </div>
      <div class="modal-item">
        <p>Fuel: titanium</p>
        <p>Length: 1000000</p>
      </div>
      <div class="modal-item">        
        <p>Power: 100,000,000</p>
        <p>Weight: 400</p>
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
