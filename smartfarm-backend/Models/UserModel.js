const { connection } = require('../Config/db');

const findUserByEmail = async (email) => {
  const [rows] = await connection.query('SELECT * FROM users WHERE email = ?', [email]);
  return rows[0];
};

const createUser = async (username, email, password, location) => {
  const [result] = await connection.query(
    'INSERT INTO users (username, email, password, location) VALUES (?, ?, ?, ?)',
    [username, email, password, location]
  );
  return result.insertId;
};

const findUserById = async (id) => {
  const [rows] = await connection.query('SELECT id, username, email, location FROM users WHERE id = ?', [id]);
  return rows[0];
};

module.exports = {
  findUserByEmail,
  createUser,
  findUserById,
};
