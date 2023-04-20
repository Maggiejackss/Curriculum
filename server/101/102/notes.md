# Server 102
## Common express methods to handle client requests

`.get`  
Returns data to the client which the client has requested  
URL  
https://highonlife.com/members/328  
REQUEST BODY
```json
null
```
RESPONSE BODY
```json
{
  "city": "Austin",
  "hobbies": ["camping", "hiking", "skiing"],
  "id": 328,
  "isNewMember": false,
  "name": "Andrea"
}
```

`.post`  
Receives data from the client, usually as a value that corresponds to the key `body`, that is then used to create a record in a database (an ID is created by the database)  
URL  
https://highonlife.com/members/new  
REQUEST BODY
```json
{
  "city": "Birmingham",
  "hobbies": ["dozing", "napping", "sleeping"],
  "isNewMember": true,
  "name": "Billy",
}
```
RESPONSE BODY
```json
{
  "id": 329,
  "message": "new member created"
}
```

`.delete`  
Receives data from the client, usually an id, that is then used to delete a record from a database  
URL  
https://highonlife.com/members/delete/328  
REQUEST BODY
```json
null
```
RESPONSE BODY
```json
{
  "id": 328,
  "message": "member deleted"
}
```

`.patch`  
Receives data from the client which updates a record in the database by updating only part of it (e.g. a single value in an object with multiple key/value pairs)  
URL  
https://highonlife.com/members/modify/329  
REQUEST BODY
```json
{
  "city": "Boston"
}
```
RESPONSE BODY
```json
{
  "id": 329,
  "message": "member modified"
}
```

`.put`  
Receives data from the client which updates a record in the database by replacing the group it belongs to entirely  
URL  
https://highonlife.com/members/modify/329  
REQUEST BODY
```json
{
  "city": "Boston",
  "hobbies": ["dozing", "napping", "sleeping"],
  "id": 329,
  "isNewMember": false,
  "name": "Billy",
}
```
RESPONSE BODY
```json
{
  "id": 329,
  "message": "member updated"
}
```