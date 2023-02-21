const shoppingList = ['apples', 'biscuits', 'cabbage', 'dip'];
const isCode200 = () => Math.random() >= 0.5;

function getShoppingList() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isCode200()) {
        resolve(shoppingList);
      } else {
        reject('There was a problem with the server, please try again.');
      }
    }, 500);
  });
}

getShoppingList()
  .then(data => console.log(data))
  .catch(err => console.error(`ERR: ${err}`));