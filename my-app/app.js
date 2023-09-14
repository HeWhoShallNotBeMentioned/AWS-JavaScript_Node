(async () => {
  const express = require('express');
  const dotenv = require('dotenv');
  dotenv.config();

  const bodyParser = require('body-parser');
  const mysql = require('mysql2');
  const app = express();

  app.use(bodyParser.json());

  const connection = await mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER2,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
  });

  app.get('/api/items', (req, res) => {
    let sql = 'SELECT * FROM items';
    let query = connection.query(sql, (err, results, fields) => {
      if (err) throw err;

      res.send(apiResponse(results, fields));
    });
  });

  function apiResponse(results, fields) {
    return JSON.stringify({
      status: 200,
      error: null,
      response: [results, fields],
    });
  }

  app.listen(process.env.PORT, () => {
    console.log('Server started...');
    if (connection.config.host) {
      console.log('database connected');
    }
  });
})();
