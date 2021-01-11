/* A pasta config contem os arquivos para configurar
 * nosso servidor na maneira como quisermos. Para que
 * no index.js tenha uma unica coisa que é subir o 
 * nosso servidor
 */

const express = require('express')
const consign = require('consign')

module.exports = () => {
    const app = express()
    
    consign()
        .include('controllers')
        .into(app)

    return app
}