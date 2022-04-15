const http = require('http')
const url = require('url')

const endpoints = {
    '/api/parsetime': urlObject => {
        const date = new Date(urlObject.query.iso)
        return {
            "hour": date.getHours(),
            "minute": date.getMinutes(),
            "second": date.getSeconds()
        }
    },
    '/api/unixtime': urlObject => {
        const date = new Date(urlObject.query.iso)
        return {
            "unixtime": date.getTime()
        }
    }
}

const server = http.createServer((req, res) => {
    const endpoint = url.parse(req.url, 'http://example.com')
    const target = endpoints[endpoint.pathname];
    if(target){
        res.writeHead(200, {'Content-type': 'application/json'})
        console.log(JSON.stringify(target(endpoint)))
        res.end(JSON.stringify(target(endpoint)))
    } else {
        res.writeHead(400);
        res.end()
    } 
})

server.listen(process.argv[2])
