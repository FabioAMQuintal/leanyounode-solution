//import {readFileSync} from 'fs';
const fs = require('fs')
const reading = fs.readFileSync(process.argv[2]).toString()

console.log(reading.split('\n').length-1)