const { Client } = require('pg');

const dotenv = require('dotenv');
dotenv.config();
(() => {
  const client = new Client({
    host: process.env.host,
    user: process.env.name,
    password: process.env.password,
    port: process.env.port,
    ssl: { sslmode: 'require', rejectUnauthorized: false },
  });

  console.log('process.env.host----------------------', process.env.host);
  client.connect();
  client.query(`CREATE DATABASE beckett`, (err, data) => {
    if (err) {
      console.log(
        '\n\nERROR-----------DB Instance Not Created\n\n',
        err,
        err.stack
      );
    } else {
      console.log('\n\nSUCCESS!!!\n\n    DB Instance Created\n\n', data);
    }
    client.end();
  });
})();
