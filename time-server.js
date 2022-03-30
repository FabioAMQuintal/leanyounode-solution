const net = require('net');

const server = net.createServer(function (socket) {
    socket.end(buildDate())
})

server.listen(process.argv[2]);

const buildDate = () => {
    const data = new Date();
    const year = data.getFullYear()
    const month = ('0'+(data.getMonth()+1).toString()).slice(-2)
    const day = ('0'+data.getDate().toString()).slice(-2)
    const minutes = ('0'+data.getMinutes().toString()).slice(-2)
    const hour = data.getHours()
    return `${year}-${month}-${day} ${hour}:${minutes}\n`
};


