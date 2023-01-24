# JavaScript Data 301
## Understanding immutability comes down to understanding how data is stored in memory.
**Definition of immutability**
Primitive data types are immutable. Immutability means that whenever a variable is declared, it lives at a unique address in memory and if it is later re-initialized (e.g. re-assigned), it will live at a new unique address. If a variable is initialized by reference, instead of by value its unique address points to the referred address.

**List of primitive data types**
* strings
* booleans 
* numbers
* null
* undefined

**Example**
```
let age = 32; //intitializes by value, it gets a unique addree (e.g. Hx78)
let marysAge = age; // initializes by reference, it gets a unique address (Rt27) but this doesn't hold a value, it simply points to Hx78
age = 33; // with reinitialization the new value is stored at a new address (e.g Xa17) 
// cannot get a new value with a same name and keep the same address. 
```

**Definition of mutability**
Collections of primitive data types are mutable, which means that when they are modified or updated the data is not stored at a new address, but remains at the original address when the variable was first declared.

**List of Collections**
* arrays
* objects

