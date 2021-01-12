/* A pasta config contem os arquivos para configurar
 * nosso servidor na maneira como quisermos. Para que
 * no index.js tenha uma unica coisa que é subir o 
 * nosso servidor
 */

const express = require('express')
const consign = require('consign')
const bodyParser = require('body-parser')

module.exports = () => {
    const app = express()

    app.use(bodyParser.urlencoded({extended: true}))
    app.use(bodyParser.json())

    
    consign()
        .include('controllers')
        .into(app)

    return app
}