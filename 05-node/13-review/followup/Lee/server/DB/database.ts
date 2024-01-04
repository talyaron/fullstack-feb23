import mysql from "mysql2";

const sqlPassword = process.env.SQLPASSWORD;

//@ts-ignore
const connection = mysql.createConnection({
  host: "localhost",
  port: "3306",
  user: "root",
});

export default connection;
