const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "fitness.db",
  port: 3306,
});

module.exports = db;
