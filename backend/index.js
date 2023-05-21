const express = require('express');
const app = express();
const PORT = 3001; 

app.listen(PORT, () => {
  console.log(`Backend server is running on port ${PORT}`);
});

const mysql = require('mysql2');

// Establish a connection with the data bsae

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'your_mysql_username',
  password: 'your_mysql_password',
  database: 'music_app_db',
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL database:', err);
    return;
  }
  console.log('Connected to MySQL database');
});
