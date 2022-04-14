const http = require('http')
const bl = require('bl')
const results = []
let count = 0;
const printResults = () => {
	for(let i=0; i<3; i++){
		console.log(results[i]);
	}
}
for(let i=0; i<3; i++){
	http.get(process.argv[2+i], (response) => {
		response.pipe(bl((err,data) => {
			if(err){
				console.log(err)
			}
			results[i] = data.toString()
			count++

			if(count === 3){
				printResults();
			}
		}))
	})
}