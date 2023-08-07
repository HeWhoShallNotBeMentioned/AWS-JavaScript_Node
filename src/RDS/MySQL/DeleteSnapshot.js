const AWS = require('aws-sdk');

const rds = new AWS.RDS({ region: 'us-west-2' });

var params = {
  DBSnapshotIdentifier: 'database-1-snapshot',
};
rds.deleteDBSnapshot(params, function (err, data) {
  if (err) {
    console.log(
      `\n\nERROR-----------DB Snapshot ${params.DBSnapshotIdentifier} Not Deleted\n\n`,
      err,
      err.stack
    );
  } else {
    console.log(
      `\n\nSUCCESS!!!\n\n    DB snapshot ${params.DBSnapshotIdentifier} deleted.\n\n`,
      data
    );
  }
});
