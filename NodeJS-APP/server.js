const express = require('express')
const app = express()
const path = require('path')

app.use('/', express.static(__dirname + '/'))

app.listen(3001, function () {
    console.log('app listining on port 3001')

})