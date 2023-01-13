const mysql = require('mysql2');

const connectionUrl = 'mysql://root@localhost:3306/mydb';
const connection = mysql.createConnection({
  uri: connectionUrl,
  password: 'dkflred21',
});

module.exports = connection;
