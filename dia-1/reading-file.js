const fileSystem = require('fs')

module.exports = async function lerArquivo () {
    return await new Promise((resolve) => {
        fileSystem.readFile('./content.txt', (err, data) => {
            resolve(data)
        })
    })
}
