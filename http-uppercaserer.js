const http = require('http')
const mapper = require('through2-map')
const toListen = process.argv[2]

const server = http.createServer((req, res) => {
    req.pipe(mapper(x => x.toString().toUpperCase())).pipe(res)
});

server.listen(toListen)