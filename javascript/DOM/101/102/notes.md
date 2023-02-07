# DOM 102
## Modifying the DOM comes down to learning a few methods and properties.

### creating elements
```javascript
const div = document.createElement('div');
div.innerText = 'Hello World';
div.innerHTML = '<h1>Hello World</h1>';
root.append(div);
```

### Selecting elements
```javascript
// returns a list of nodes
document.getElementsByTagName('p');
document.getElementsByClassName('section-content');
document.querySelectorAll('article.section-content');

//returns a single node
document.getElementById('root');
document.querySelector('article #root');
```

### Modifying elements
```javascript
const root = document.getElementById('root');
root.setAttribute('data-id', 'someId');
root.style.color = 'crimson';
root.innerText = 'Some new text here';
root.removeAttribute('date-id');
```

<div>hello world</div>
