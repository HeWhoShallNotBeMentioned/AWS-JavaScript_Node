const AWS = require('aws-sdk');

const dynamodb = new AWS.DynamoDB({ region: 'us-west-2' });

const params = {
  AttributeDefinitions: [
    {
      AttributeName: 'year',
      AttributeType: 'N',
    },
    {
      AttributeName: 'title',
      AttributeType: 'S',
    },
  ],
  KeySchema: [
    {
      AttributeName: 'year',
      KeyType: 'HASH',
    },
    {
      AttributeName: 'title',
      KeyType: 'RANGE',
    },
  ],
  ProvisionedThroughput: {
    ReadCapacityUnits: 1,
    WriteCapacityUnits: 1,
  },
  TableName: 'Movies',
};

dynamodb.createTable(params, function (err, data) {
  if (err) {
    console.log('ERROR--------------------------\n', err, err.stack);
  } else {
    console.log('SUCCESS------------------------\n', data);
  }
});
