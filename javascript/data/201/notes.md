# JavaScript data 201
## Data types can be collected in other structures like objects and arrays

### Objects
An object describes something. It lives inside of opening and closing curly braces and is organized as key:value pairs, separated by commas. The key and the value are themselves separated by a ':'. Objects will always look like key:value pairs.
```
const car = {
  color: 'green',
  mileage: 67302,
  isNew: false
};
```

### Arrays
An array is a list of items. It's defined by opening and closing square brackets. The items in the array are separated by commas. Each item in an array is indexed with a number. Arrays can contain all other data types as well as objects.
```
const shoppingList = ['apples', 'celery', 'bread'];
const ages = [7, 7, 8, 8, 7 1/2, 10];
const cars = [
  {
    color: 'purple',
  mileage: 67301,
  isNew: false
},
{
    color: 'yellow',
  mileage: 6730,
  isNew: false
},  
{
    color: 'green',
  mileage: 6732,
  isNew: false
},
{
    color: 'blue',
  mileage: 7302,
  isNew: false
},
];



```
Javascript considers arrays to be objects. So the shopping list above looks like this in JS.
```
const shoppingList= {
  0: 'apples',
  1: 'celery',
  2: 'bread'
}
```