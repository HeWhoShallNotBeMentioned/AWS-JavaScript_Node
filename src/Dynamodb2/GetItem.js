const AWS = require('aws-sdk');

const docClient = new AWS.DynamoDB.DocumentClient({ region: 'us-west-2' });

const params = {
  TableName: 'Movies',
  Key: {
    year: 2022,
    title: 'MS13',
  },
};

docClient.get(params, function (err, data) {
  if (err) console.log(err);
  else console.log(data);
});
