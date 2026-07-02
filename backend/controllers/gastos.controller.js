const GastosModel = require('../models/gastos.model');

class GastosController {
    // Maneja la petición GET /gastos
    static async obtenerTodos(req, res) {
        try {
            const gastos = await GastosModel.obtenerGastos();
            res.json(gastos);
        } catch (error) {
            res.status(500).json({ error: 'Error interno en el servidor al obtener datos' });
        }
    }
}

module.exports = GastosController;