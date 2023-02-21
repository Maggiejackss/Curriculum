import './style.css';
const ul = document.getElementById('app');
const output = document.getElementById('output');

const handleClick = e => {
  const val = e.target.getAttribute('number');
  if (val) {
  const message = `You have clicked on ${val.toUpperCase()}`;
  output.innerText = message;
  } else {
    output.innerText = 'Please click a red box.';
  }
};

ul.addEventListener ('click', handleClick); 