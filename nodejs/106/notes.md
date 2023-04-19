***
BCRYPT
`npm i bcrypt`
[npm Docs](https://www.npmjs.com/package/bcrypt)
Creates a hashed string from an input. Uses callbacks, not promises.
 
 
***
BODY PARSER – DO NOT USE (SEE NOTES BELOW)
`npm i body-parser`
[npm Docs](https://www.npmjs.com/package/body-parser)
Parses incoming request bodies.
On September 28, 2017, Express released v4.16.0 which makes using body-parser obsolete. For example, we used to call `bodyParser.json()` but now we call `express.json()`.


***
COOKIE PARSER
`npm i cookie-parser`
[npm docs](https://www.npmjs.com/package/cookie-parser)
Reads cookie data from requests and makes it available on the request object.


***
EXPRESS
`npm i express`
[docs](http://expressjs.com/)
Creates a server as well as handles requests and responses.


***
EXPRESS SESSION
`npm i express-session`
[npm docs](https://www.npmjs.com/package/express-session)
Checks if a request is a part of an active session.


***
NODEMON
`npm i nodemon`
[npm docs](https://www.npmjs.com/package/nodemon)
Restarts a node server when file changes are detected.


***
PATH
no `npm i` necessary since `path` is a core module
[docs](https://nodejs.org/api/path.html)
Resolves a sequence of paths or path segments into an absolute path.


***
PG
`npm i pg`
[npm docs](https://www.npmjs.com/package/pg)
PostgreSQL client for NodeJS. When using sequelize, this is one of two libraries you should install (the other is `pg-promise`).


***
PG-PROMISE
`npm i pg-promise`
[npm docs](https://www.npmjs.com/package/pg-promise)
PostgreSQL client for NodeJS. When using sequelize, this is one of two libraries you should install (the other is `pg`).


***
SEQUELIZE
`npm i sequelize`
[docs](https://sequelize.org/)
ORM tool. Either `pg` or `pg-promise` should be installed, as well, when using sequelize.


***
SEQUELIZE CLI
`npm i sequelize-cli`
[npm docs](https://www.npmjs.com/package/sequelize-cli)
Executes actions related to database management.


***
SEQUELIZE CONNECT SESSION
`npm i connect-session-sequelize`
[npm docs](https://www.npmjs.com/package/connect-session-sequelize)
Keeps the session active so users do not have to login again if the server restarts.


***
TEMPLATE ENGINE
`npm i express-es6-template-engine`
[npm docs](https://www.npmjs.com/package/express-es6-template-engine)
Handles variables inside of HTML.


- - -
Most of this was compiled by @mayra84 from Digital Crafts