# API 102
## Promises allow users to keep using a site while data is gathered from somewhere else in the backround

### Terns

**`async`/`await`**
The most recent way to implement a promise. It is fairly easy to read and reason about.

**callback functions**
Before promises were a thing we used callback functions to handle asynchronous code. Callback functions were a headache. If we ever needed to call asynchronous sequentially. This was known as callback hell.

**promise**
A promise returns a response but we cannot control or predict when this will happen. In dev speak we say that a function returns a promise when the function has asynchronous logic that other code depends upon before it can be executed.

**`Promise`**
A class made available by javascript. We use an instance of this class to wrap asynchronous code.