// const dns = require('node:dns');

// const options = {
//     family: 6,
//     hints: dns.ADDRCONFIG | dns.V4MAPPED,
// };
// dns.lookup('google.com', options, (err, address, family) => {
//     console.log('address: %j family: IPv%s', address, family)
// } )


function someFunction(name) {
    return `hello ${name}`
}

module.exports = someFunction;