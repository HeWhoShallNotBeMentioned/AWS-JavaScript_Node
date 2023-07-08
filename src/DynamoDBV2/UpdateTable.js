const AWS = require('aws-sdk');

const dynamodb = new AWS.DynamoDB({ region: 'us-west-2' });

const params = {
  ProvisionedThroughput: {
    ReadCapacityUnits: 1,
    WriteCapacityUnits: 1,
  },
  TableName: 'employee',
};

dynamodb.updateTable(params, function (err, data) {
  if (err) console.log(err, err.stack);
  else console.log(data);
});
