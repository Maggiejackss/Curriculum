# Javascript Data 202
## The syntax to read data depends on the data type or data collection in which data types are found.
## arrays
We use an index to read data from an array by enclosing the index value within square brackets.
```
const shoppingList = ['apples', 'celery', 'bread'];
console.log(shoppingList [0]); //expecting apples from console.log
```

## objects
We use bracket notation or dot notation to read data.
```
const car = {
  color: 'green',
  mileage: 67302,
  isNew: false
};
console.log(car[mileage]) //expecting to print out 67302
console.log(car.mileage) //expecting same result

```

## strings, booleans and numbers
Refer to the variable name to read the data.
```
const name = 'Paul';
console.log(name); //expecting result of Paul
```