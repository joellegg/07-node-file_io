#!/usr/bin/env node

const { readFileSync } = require('fs');

// readFile('file-io.json', (err, data) => {
//   if (err) throw err;
//   console.log(data.toString());
// });

console.log(readFileSync('file-io.json', encoding = 'utf8'));
