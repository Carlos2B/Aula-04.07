const express = require('express')
const {Client} = require('pg')
require("dotenv").config()

const client = new Client({
    host:process.env.host,
    port:process.env.port,
    user:process.env.user,
    password:process.env.password,
    database:process.env.database
})

const app = express()

const connectDB = async () => {
    client
    .connect()
    .then(() => {
        console.log(' a conexão funcionou ')
    }).catch((err) => {
        console.log('Erro ao conectar')
    });
};

connectDB()

app.get('/', function(req, res){
    res.send(' QUEM LEU É GAY ')

})

app.listen(8000)












function filtrarPares(arr) {
    return arr.filter(num => num % 2 === 0);
}

const arr = [1, 2, 3, 4, 5];

console.log(filtrarPares(arr));