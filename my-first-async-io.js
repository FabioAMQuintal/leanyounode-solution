//import * as fs from 'fs/promises'
const fs = require('fs');

function asyncReading(err, texto){
	if(err){
		console.log(err)
	} else {
		console.log(texto.split('\n').length-1)
	}
}

fs.readFile(process.argv[2].toString(), 'utf8', asyncReading)