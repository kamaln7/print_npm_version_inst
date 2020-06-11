const version = require('fs').readFileSync('./version.txt', 'utf8')
console.log(`This package was installed using npm v${version}`)
