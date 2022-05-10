const http = require('http')

const port = 8080
const server = http.createServer((request, response) => {
    response.writeHead(200, { "Content-type": "text/plain" });
    response.end("Hello world\n");
})

server.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})