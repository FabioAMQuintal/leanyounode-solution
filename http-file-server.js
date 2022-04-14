const http = require('http')
const fs = require('fs')
const providedPort = process.argv[2]
const toWrite = process.argv[3]

const server = http.createServer((req, res) => {
    const src = fs.createReadStream(toWrite)
    src.pipe(res)
})

server.listen(providedPort)