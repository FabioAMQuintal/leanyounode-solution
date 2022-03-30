const http = require('http')
const bl = require('bl')

const results = []
let count = 0;

const getting = (index) => {
	http.get(process.argv[2+index].toString(), (response) => {
		response.pipe(bl((err,data) => {
			if(err){
				console.log(err)
			}
			results[index] = data.toString()
			count++

			if(count === 3){
				printResults();
			}
}))})}

const printResults = () => {
	for(let i=0; i<3; i++){
		console.log(results[i]);
	}
}

for(let i=0; i<3; i++){
	getting(i)
}
