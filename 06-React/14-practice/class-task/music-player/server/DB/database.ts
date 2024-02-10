import mysql from "mysql2";
require("dotenv").config();

const sqlPassword = process.env.SQL_PASSWORD;
const sqlPort: number = Number(process.env.SQL_PORT);
console.log(sqlPassword, sqlPort)

const connection = mysql.createConnection({
  host: "localhost",
  port: sqlPort,
  user: "root",
  password: sqlPassword,
  database: "multi_musix",
});

connection.connect((err) => {
  try {
    if (err) throw err;
    console.info("🔥 MySQL is connected 🛢 ");
  } catch (error) {
    console.error(error);
  }
});
export default connection;
