# NodeJS 104

## Modules make it easier to scale and maintain Node applications

### Modules
- compartmentalize code
- act as building blocks in an application
- adhere to an import export pattern

### Types
- core: modules that come with node install
- local: modules that you define as a developer
- third-party
### Import
```javascript
const someModule = require('someModule');
```

### Export
```javascript
function someFunction() {

}

module.exports = someFunction;
```