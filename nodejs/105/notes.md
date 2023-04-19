# NodeJS 105

## **package.json** manages third party modules found at [npm's repository](https://www.npmjs.com/)

### what is npm?
- it is an online repository for the publishing of open-source Node.js projects
- it is a command-line utility for interacting with said repository that aids in package installation, version management and dependency management

### Open-source
- free to use as per a specific license
- developers are not compensated
- not guranteed to work at all times

### synonyms
- library
- module
- package

### npm commands
- `npm-v` (version)
-`npm install -g <someModule>` {global install, not recommended}
- `npm install <someModule>` {local install, preferred}
- `npm init -y` {creates **package.json** with default values}

### package.json
- 'dependencies' list production dependencies
- 'devdependencies' list the libraries used to write the code itself
- is created by `npm init -y`
- determines the contents of **node_modules/**

### node_modules/
- contains all third party modules installed with 'npm'
- each module has its own **package.json** so this repository can be pretty large
-do not ever modify the code within this directory

### executing commands if applicable
- using 'cowsay' as an example (node_modules/.bin/cowsay)
- npx cowsay 
```
 ____
< JS ftw >
 ----
        \   ^__^
         \  (oo)\_______
            (__)\       )\/\
                ||----w |
                ||     ||
                
```