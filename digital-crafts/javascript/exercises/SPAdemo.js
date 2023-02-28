// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
const output = document.getElementById("output");
const button = document.querySelector('#button');
button.addEventListener('click', () => {
  renderSomeText('hi');
});
function renderSomeText (text) {
  output.innerText = text;
}

renderSomeText('peepeepoopoo');