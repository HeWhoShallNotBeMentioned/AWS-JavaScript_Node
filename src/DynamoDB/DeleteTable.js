const AWS = require('aws-sdk');

const dynamodb = new AWS.DynamoDB({ region: 'us-west-2' });

const params = { TableName: 'Article' };

dynamodb.deleteTable(params, function (err, data) {
  if (err) {
    console.log('ERROR--------------------------\n', err, err.stack);
  } else {
    console.log('SUCCESS------------------------\n', data);
  }
});
