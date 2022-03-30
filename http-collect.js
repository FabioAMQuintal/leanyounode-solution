const http = require('http')
const bl = require('bl')
const url = process.argv[2].toString()

http.get(url, (response) => {
	response.setEncoding('utf8')
	response.pipe(bl(function (err, data){
		if(err){
			console.log(err)
		}
	data = data.toString()
	console.log(data.length)
	console.log(data)
}))
});