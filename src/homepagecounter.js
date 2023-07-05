export function updateitemscount() {
  const counter = document.body.querySelectorAll('.card');

  const navli = document.getElementById('counter');
  navli.innerHTML = `Spaceships ( ${counter.length} )`;
}

export function likecount() {
  // const likebutton = document.querySelectorAll('.likebutton');
  // const likebuttoncounter = document.querySelectorAll('.likebuttoncounter');

  // likebutton.forEach((button) => {
  //   button.addEventListener('click', () => {
  //     const likebuttoncounter = button.nextElementSibling;
  //     likebuttoncounter.innerHTML = 'Liked';
  //   });
  // });
}