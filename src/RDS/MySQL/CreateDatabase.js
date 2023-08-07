const AWS = require('aws-sdk');

const rds = new AWS.RDS({ region: 'us-west-2' });

const params = {
  DBName: 'CourseDB',
  DBInstanceIdentifier: 'coursedb',
  AllocatedStorage: 5,
  DBInstanceClass: 'db.t2.micro',
  Engine: 'mysql',
  MasterUsername: 'admin',
  MasterUserPassword: 'KOYQXmluNcxJdUw0wh50',
  Port: 3306,
  EngineVersion: '8.0.28',
  PubliclyAccessible: true,
  StorageType: 'gp2',
};

rds.createDBInstance(params, function (err, data) {
  if (err) {
    console.log(
      '\n\nERROR-----------DB Instance Not Created\n\n',
      err,
      err.stack
    );
  } else {
    console.log('\n\nSUCCESS!!!\n\n    DB Instance Created\n\n', data);
  }
});
