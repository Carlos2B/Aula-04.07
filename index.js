const express = require('express')
require("dotenv").config()
const connectDB = require('./Db')

const app = express()

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