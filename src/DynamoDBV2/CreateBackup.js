const AWS = require('aws-sdk');

const dynamodb = new AWS.DynamoDB({ region: 'us-west-2' });

const params = {
  BackupName: 'employee_backup_2023-07-06',
  TableName: 'employee',
};

dynamodb.createBackup(params, function (err, data) {
  if (err) console.log('ERROR--------------------------\n', err, err.stack);
  else console.log('SUCCESS------------------------\n', data);
});
