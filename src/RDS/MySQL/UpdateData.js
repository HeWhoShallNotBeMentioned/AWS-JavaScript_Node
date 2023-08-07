const mysql = require('mysql');
const dotenv = require('dotenv');
dotenv.config();

const con = mysql.createConnection({
  host: process.env.host,
  port: process.env.port,
  user: process.env.user,
  password: process.env.RDS_Database_Password,
  database: process.env.database,
});

con.connect(function (err, data) {
  if (err) {
    console.log(
      '\n\nERROR-----------DB Instance Not Connected\n\n',
      err,
      '\n\n   ',
      err.stack
    );
  } else {
    console.log('\n\nSUCCESS!!!\n\n    DB Instance Connected\n\n', data);
    const sql =
      'UPDATE customers SET name="Beckett" WHERE email="Beckett@gmail.com"';

    con.query(sql, function (err, result) {
      if (err) {
        console.log(
          'err ----------------- \n\n          ',
          err.message,
          '\n\n',
          err
        );
      } else {
        console.log(
          `\n\nSUCCESS!!!\n\n    ${result.affectedRows} row(s) updated in ${process.env.database}.\n\n`,
          result
        );
      }
    });
  }
});
