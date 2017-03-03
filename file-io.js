#!/usr/bin/env node

const { readFileSync } = require('fs');
// encoding = 'utf8' returns it as a native string
console.log(readFileSync('file-io.json', encoding = 'utf8'));

//// Alternate method
// readFile('file-io.json', (err, data) => {
//   if (err) throw err;
//   console.log(data.toString());
// });
