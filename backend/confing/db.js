const mysql = require('mysql2')

const pool = mysql.createPool(
 {
    user: 'root',
    host: 'localhost',
    password: '1234',
    port: 3308,
    database: 'gastos'
 }   
)

const promisePool = pool.promise()

module.exports = promisePool