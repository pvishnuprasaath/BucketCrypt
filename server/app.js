const express = require('express')
const bodyParser = require('body-parser')
const CryptoJS = require("crypto-js")
const routes=require('./routes/api')
const cors = require('cors')
const app = express()

app.use(bodyParser.json())
app.use(cors())
app.use('/api',routes)
//app.use(express.static('public'))

app.get('/', function (req, res) {
    res.send(' Welcome to BucketCrypt '+ ciphertext) 
})

app.listen(process.env.port||3000, function () {
  console.log('Server started at port 3000')
})