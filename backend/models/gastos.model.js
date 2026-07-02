const db = require('../config/db')

class GastosModel{

    static async obtenerGastos(){

        const [rows] = await db.query('SELECT * FROM transacciones,ts.sonto,ts.tipo,ts.fecha, FROM transacciones ts INNER JOIN categoria ct ON ts.ct_id=ct.ct_id')
        //[datos][metadatos]
        return rows
    }

}

module.exports = GastosModel