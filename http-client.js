const http = require('http')
const url = process.argv[2].toString()

http.get(url, (response) => {
	response.setEncoding('utf8')
	response.on('data', (x) => console.log(x));
});