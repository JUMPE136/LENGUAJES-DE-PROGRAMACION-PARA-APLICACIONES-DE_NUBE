const express = require('express')
const router = express.Router()
const GastosController = require('../controllers/gastos.controller')


router.get('/gastos',GastosController.obtenerGastos)

module.exports = router