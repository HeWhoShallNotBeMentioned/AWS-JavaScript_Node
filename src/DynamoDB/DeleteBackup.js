const AWS = require('aws-sdk');

const dynamodb = new AWS.DynamoDB({ region: 'us-west-2' });

const params = {
  BackupArn:
    'arn:aws:dynamodb:us-west-2:342445434384:table/employee/backup/01688685140625-ea0c0b39',
};

dynamodb.deleteBackup(params, function (err, data) {
  if (err) console.log('ERROR--------------------------\n', err, err.stack);
  else console.log('SUCCESS------------------------\n', data);
});
