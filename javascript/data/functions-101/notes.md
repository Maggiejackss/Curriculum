# JavaScript Functions 101

## A general overview

### Terms

**anonymous function**
A function that is not named (see also function expression)

**argument**
A hardcoded value passed into a function when it is executed.
In the example below `'John'` in between the parentheses is the argument.
```
greeting('Alex')
```

**call**
An action which executes (or fires) the function.


**callback function**


**function**
There are two contexts. One is the function definitions itself. Another is the code within the definition which executes when called and which sometimes returns a value.


**function body**
Contains the code of the function itself within a set of curly braces.


**function declaration**
Uses the _function_ keyword to declare a named function. The name of the function immediately follows the _function_ keyword.
```
function greeting() {
return 'Hello, you sure look nice today.';
}
```
**function expression**
A function that is the initialization of a variable declaration. The variable, which is named, stores the function but the function itself is considered anonymous or unnamed.
```
const greeting = function() {
return 'Hello, you sure look nice today.';
}
```

**hoisting**
Allows a function declaration to be used in code before it is declared.

**IIFE**


**named function**
See function declaration.

**parameter**
A placeholder whose value equals the argument passed into the function when it was called. This value is accessed only within the function itself.
In the example below 'name' inside the parantheses is the parameter.
```
function greeting(name) {
return `Hello, ${name}, you sure look nice today.`;
}
```
**parentheses**
The parentheses have two purposes. One is to execute or call a function. Another is a part of the syntax to define the function. In the former, it may contain arguments. In the latter it may contain parameters.


**return**
If implemented, it executes the last line fo a funtions code. It precedes a data type or a collection to be returned. We say that a function closes or exits when the code that follows _return_ executes which also means that any lines beneath it are ignored.

**scope**
Refers to what values are available in memory at a given time during the execution of code.
