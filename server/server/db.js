
const mysql = require('mysql');

function createPool() {
  const pool = mysql.createPool({
    host     : '103.69.194.160',
    user     : 'monty',
    password : 'Kidvn95123@',
    database : 'myapp',
    connectionLimit: 100,
  });
  return pool;
}

let pool = createPool();

module.exports = pool;
