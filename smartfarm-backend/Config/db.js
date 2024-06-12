const mysql = require('mysql2/promise');
require('dotenv').config();

let connection;

const connectDB = async () => {
  if (!connection) {
    try {
      connection = await mysql.createConnection({
        host: process.env.MYSQL_HOST,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DATABASE,
      });
      console.log('MySQL Connected');
    } catch (err) {
      console.error('Error connecting to MySQL:', err.message);
      process.exit(1);
    }
  }
  return connection;
};

module.exports = { connectDB, connection };
