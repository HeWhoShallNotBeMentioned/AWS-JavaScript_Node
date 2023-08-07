const AWS = require('aws-sdk');

const rds = new AWS.RDS({ region: 'us-west-2' });

var params = {
  DBInstanceIdentifier: 'coursedb',
  DeleteAutomatedBackups: true,
  FinalDBSnapshotIdentifier: 'coursedb-final-snapshot',
  SkipFinalSnapshot: false,
};
rds.deleteDBInstance(params, function (err, data) {
  if (err) {
    console.log(
      '\n\nERROR-----------DB Instance Not Deleted\n\n',
      err,
      err.stack
    );
  } else {
    console.log(
      `\n\nSUCCESS!!!\n\n    DB instance ${params.DBInstanceIdentifier} deleted.\n\n`,
      data
    );
  }
});
