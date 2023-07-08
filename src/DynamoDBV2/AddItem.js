const AWS = require('aws-sdk');

AWS.config.update({ region: 'us-west-2' });

const dynamodb = new AWS.DynamoDB();

const params = {
  TableName: 'employee',
  Item: {
    id: {
      S: '1',
    },
    name: { S: 'Monty' },
    age: { S: '18' },
  },
};

dynamodb.putItem(params, function (err, data) {
  if (err) {
    console.log('error----------', err);
  } else {
    console.log('Success', data);
  }
});
