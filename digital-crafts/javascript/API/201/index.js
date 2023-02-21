// var shoppingList = ['apples', 'biscuits', 'cabbage'];

// function addItem(item) {
//     setTimeout(() => {
//       shoppingList.push(item);
//       console.log("Item added to shopping list");
//     }, 200);
//   }
  
//   function getAllItems() {
//     setTimeout(() => {
//       console.log('Shopping List Items:');
//       console.log(shoppingList);
//     }, 100);
//   }
  
//   addItem('dip');
//   getAllItems();

// callback functions can help us deal with asynchronous code but it can also get messy if we have multiple sequential callbacks (not shown here)

var shoppingList = ['apples', 'biscuits', 'cabbage'];

function addItem(item, callback) {
  setTimeout(() => {
    shoppingList.push(item);
    console.log("Item added to shopping list");
    callback();
  }, 200);
}

function getAllItems() {
  setTimeout(() => {
    console.log('Shopping List Items:');
    console.log(shoppingList);
  }, 100);
}

addItem('dip', getAllItems);