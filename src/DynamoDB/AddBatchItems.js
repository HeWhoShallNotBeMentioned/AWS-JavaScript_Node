const AWS = require('aws-sdk');
// Can add up to 25 items in one batch

const dynamodb = new AWS.DynamoDB({ region: 'us-west-2' });

const params = {
  RequestItems: {
    employee: [
      {
        PutRequest: {
          Item: { id: { S: '2' }, age: { S: '19' }, name: { S: 'Lily' } },
        },
      },
      {
        PutRequest: {
          Item: { id: { S: '3' }, age: { S: '4' }, name: { S: 'Smithson' } },
        },
      },
      {
        PutRequest: {
          Item: { id: { S: '4' }, age: { S: '4' }, name: { S: 'Beckett' } },
        },
      },
    ],
  },
};

dynamodb.batchWriteItem(params, function (err, data) {
  if (err) {
    console.log('Error', err);
  } else {
    console.log('Success', data);
  }
});
