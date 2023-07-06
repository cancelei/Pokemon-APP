export default function updateitemscount() {
  const counter = document.body.querySelectorAll('.card');

  const navli = document.getElementById('counter');
  navli.innerHTML = `Spaceships ( ${counter.length} )`;
}