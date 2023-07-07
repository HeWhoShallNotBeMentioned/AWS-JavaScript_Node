const AWS = require('aws-sdk');

const dynamodb = new AWS.DynamoDB({ region: 'us-west-2' });

const params = {
  RequestItems: {
    employee: {
      Keys: [{ id: { S: '2' } }, { id: { S: '4' } }],
    },
  },
};

dynamodb.batchGetItem(params, function (err, data) {
  if (err) {
    console.log('ERROR--------------------------\n', err, err.stack);
  } else {
    console.log(
      'SUCCESS------------------------\n',
      // put in a couple of names in data to return just the array of employee records
      JSON.stringify(data['Responses']['employee'])
    );
  }
});
