const { Client } = require('pg');

const dotenv = require('dotenv');
dotenv.config();
(() => {
  const client = new Client({
    host: process.env.host,
    database: process.env.database,
    user: process.env.name,
    password: process.env.password,
    port: process.env.port,
    ssl: { sslmode: 'require', rejectUnauthorized: false },
  });

  client.connect();
  client.query(
    `CREATE TABLE foods(foodID SERIAL NOT NULL PRIMARY KEY,name TEXT NOT NULL, flavor TEXT NOT NULL )`,
    (err, data) => {
      if (err) {
        console.log(
          '\n\nERROR-----------DB Table Not Created\n\n',
          err,
          err.stack
        );
      } else {
        console.log('\n\nSUCCESS!!!\n\n    DB Table Created\n\n', data);
      }
      client.end();
    }
  );
})();
