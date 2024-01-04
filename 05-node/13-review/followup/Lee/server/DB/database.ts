import mysql from "mysql2";

const sqlPassword = process.env.SQLPASSWORD;

//@ts-ignore
const connection = mysql.createConnection({
  host: "localhost",
  port: "3306",
  user: "root",
  password: sqlPassword,
  database: "users",
});

connection.connect((err) => {
  try {
    if (err) throw err;
    console.log("mySQL sever is connected :-)");
  } catch (error) {
    console.error(error);
  }
});

export default connection;
