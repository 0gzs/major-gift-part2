const mysql = require('mysql2')
const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: "",
  database: "mgp2"
})

conn.connect()

module.exports = conn
