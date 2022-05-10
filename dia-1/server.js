const http = require('http')
const lerArquivo = require('./reading-file')

const port = 8080

const server = http.createServer(async (request, response) => {
    const resposta = await lerArquivo()

    if(resposta) {
        response.writeHead(200, { "Content-type": "text/plain" });
        response.end(resposta);
    } else {
        response.writeHead(500, { "Content-type": "text/plain" });
        response.end('Nao foi possivel ler o arquivo');
    }

})

server.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})