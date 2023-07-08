const AWS = require('aws-sdk');
// Get information about a table

const dynamodb = new AWS.DynamoDB({ region: 'us-west-2' });

const params = { TableName: 'employee' };

dynamodb.describeTable(params, function (err, data) {
  if (err) {
    console.log(' \n Error-------- \n', err);
  } else {
    console.log('\n Success --------\n', data);
  }
});
