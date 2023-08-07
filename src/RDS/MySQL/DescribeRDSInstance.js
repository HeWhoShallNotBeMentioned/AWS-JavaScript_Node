const AWS = require('aws-sdk');

const rds = new AWS.RDS({ region: 'us-west-2' });

const params = {
  DBInstanceIdentifier: 'coursedb',
};
rds.describeDBInstances(params, function (err, data) {
  if (err) {
    console.log(
      '\n\nERROR-----------DB Instance Not Created\n\n',
      err,
      err.stack
    );
  } else {
    console.log(
      `\n\nSUCCESS!!!\n\n    DB instance info for ${params.DBInstanceIdentifier}\n\n`,
      data
    );
  }
});
