const express = require('express')
const cors = require('cors')
const calculator = require('./src/endpoints/calculator')
const {
	loadDataCryptoReturn
} = require('./src/dataHandlers/load-data-crypto-return')
const axios = require('axios')
const { coin } = require('./src/endpoints/calculator/calculatorUtils')
const middlewareCors = require('./src/middlewares/middleware-cors')

const app = express()
const port = 5000

app.use(middlewareCors())

const calculatorHandlers = calculator({ loadDataCryptoReturn, axios, coin })
app.get('/calculator', calculatorHandlers.getCryptoReturn)
app.use(function (req, res) {
	res.status(404).json({ ok: false, status: 404, message: 'Page not found' })
})

app.listen(port, () => {
	console.log(`** Servidor corriendo en: http://localhost:${port}/ **`)
})

module.exports = app
