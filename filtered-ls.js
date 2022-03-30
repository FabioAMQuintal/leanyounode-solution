const fs = require('fs')
const path = require('path')

const directory = process.argv[2].toString()
const extension = '.'+process.argv[3].toString()

const callback = (err, list) => {
	if(err){
		console.log(err);
	} else {
		const filtered = list.filter(x => path.extname(x) === extension)
		for(let i=0; i<filtered.length; i++){
			console.log(filtered[i]);
		}
	}
}

fs.readdir(directory, callback)