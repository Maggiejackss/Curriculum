# NodeJS 201

## define npm scripts with greater efficiency

### scripts live in package.json
```json
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  }
```
### we can easily add new scripts
```json
  "scripts": {
    "cowsay1": "node_modules/.bin/cowsay js ftw!",
    "dev": "nodemon server.js",
    "start": "node server.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  }
```

### execute scripts from CLI
- 'npm run dev'
- 'nom run start'
- etc...