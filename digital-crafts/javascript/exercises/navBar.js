// Import stylesheets
import 'navBar.css';

// Write Javascript code!
const app = document.getElementById("app");

const header = document.createElement("header");

const hello = (e, name) => {
  e.preventDefault();
  const div = document.createElement('div');
  div.innerText = `I am ${name}`;
  app.append(div);
};

app.append(header);
const navs = [
  {
    href: './Home',
    name: 'Home'
  },
  {
    href: './Portfolio',
    name: 'Portfolio'
  },
  {
    href: './About',
    name: 'About'
  },
  {
    href: './Contact',
    name: 'Contact'
  },
  {
    href: './PrivPol',
    name: 'Privacy Policy'
  }
]

function createNav() {
  console.log(navs[0].title);
  for (let i = 0; i < navs.length; i++){
    let nav = document.createElement("a");
    nav.innerText = navs[i].name;
    nav.href = navs[i].href;
    nav.addEventListener('click', (e) => hello(e, navs[i].name));
    header.append(nav);
  }
}
console.log('hello');
createNav();
