# Iterations 101

## Imperatively looping over arrays

## Terms

**`break`**
Exits a loop programatically. Used only with imperative statements.

**`continue`**
Skips over code within a loop but allows the loop to continue. Used only with imperative statements.

**imperative programming**
Exposes the execution of steps taken in order to acheive a result- the HOW is just as important as the WHAT. 

**infinite loops**
an infinite loop is an iteration which has no exit condition so it runs infinitely.

**iterate**
To cycle through each individual item in a list.

**statement**
A loop construct. 

### Statements

**for**
The statement has three parts- _begin_, _condition_ and _next_. After _begin_, which is executed only once, the order of firing is _condition_, _body_, and _next_. 

```javascript
for (let i = 1; i < 10; i++) {
    console.log(i);
}


for (let i = 1; i < 10; i++) {
    // print multiples of 3 only
    if ( i % 3 != 0) continue
    console.log(i);
}
```


**while**
Executes code as long as the condition is 'tru'. It is possible that the condition is written so that the code never executes.

```javascript
let count = 10;
while (count > 0) {
    console.log(count);
    count--;
}

// break when 'count' is 5.

let count = 10;
while (count > 0) {
    if (count === 5) {
        console.log('We reached 5');
        break;
    }
    console.log(count);
    count--;
}
```

**do...while**
Executes code as long as the condition is 'true'. It will always execute code in the body at least once.

```javascript
let i = 0;
do {
console.log(i);
i++;
} while (i < 3)
// will output final value twice when met
```

**for...of**
Iterates by value. This is a more succinct alternative to the **for** statement explained above.
```javascript
const items = ['apples', 'rice', 'soup'];
for (const item of items) {
    console.log(item);
}
```
