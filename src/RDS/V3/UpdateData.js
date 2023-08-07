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
    "UPDATE foods SET name='Salad', flavor='It is not meat.' WHERE foodid=3",
    (err, data) => {
      if (err) {
        console.log(
          `\n\nERROR-----------Data not retreived from ${process.env.database}.\n\n`,
          err,
          err.stack
        );
      } else {
        console.log(
          `\n\nSUCCESS!!!\n\n    Data retreived from ${process.env.database}.\n\n`,
          data
        );
      }
      client.end();
    }
  );
})();
