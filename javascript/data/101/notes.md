# JavaScript data 101
## Writing data to memory in JavaScript can be done with one of 3 keywords

`var` 
declares variable with name that is 'name' with a value of Paul
without quotes, variable Paul is not declared
not really recommended, older than the other two but isn't incorrect
```
var name = 'Paul';
```
`let`
allows for future change, does not permanently mark a variable as value
if value will change, use let 
```
let name = 'Paul';
```
`const`
means constant, declares variable and cannot be reassigned
e.g. const name = 'Paul'
const name = 'Paula' <= this cannot work
if value will never change, use const
```
const name = 'Paul';
```