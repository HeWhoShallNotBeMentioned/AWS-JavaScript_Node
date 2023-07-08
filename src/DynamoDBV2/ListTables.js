const AWS = require('aws-sdk');
// List all available tables

const dynamodb = new AWS.DynamoDB({ region: 'us-west-2' });

dynamodb.listTables({ Limit: 10 }, function (err, data) {
  if (err) {
    console.error(err);
  } else {
    console.log('\n Success--------------- \n', data);
  }
});
