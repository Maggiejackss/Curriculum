# API 305

## JavaScript's `.fetch` API is one way to execute common HTTP requests.

**`GET`**
```javascript
async function getData() {
  const data = await fetch('https://sj-demo-contacts.herokuapp.com/contacts?auth=5x76')
      .then(response => response.json())
      .catch(err => console.error(err));
  console.log(data);
}

```

**`DELETE`**
```javascript
async function deleteData(id) {
  const data = await fetch(`https://sj-demo-contacts.herokuapp.com/contacts/delete/${id}?auth=5x76`, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'DELETE',
  })
      .then(response => response.json())
      .catch(err => console.error(err));
  console.log(data);
}


```

**`POST`**
```javascript
async function postData(body) {
  const data = await fetch(`https://sj-demo-contacts.herokuapp.com/contacts/add?auth=5x76`, {
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST',
  })
      .then(response => response.json())
      .catch(err => console.error(err));
  console.log(data);
}


```

**`PUT`**
```javascript
async function updateData(body, id) {
  const data = await fetch(`https://sj-demo-contacts.herokuapp.com/contacts/${id}?auth=5x76`, {
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'PUT',
  })
      .then(response => response.json())
      .catch(err => console.error(err));
  console.log(data);
}



```
