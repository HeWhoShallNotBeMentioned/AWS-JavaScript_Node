const AWS = require('aws-sdk');

const dynamodb = new AWS.DynamoDB({ region: 'us-west-2' });

const params = { Key: { id: { S: '2' } }, TableName: 'employee' };

dynamodb.getItem(params, function (err, data) {
  if (err) {
    console.log('ERROR--------------------------\n', err, err.stack);
  } else {
    console.log('SUCCESS------------------------\n', data);
  }
});
