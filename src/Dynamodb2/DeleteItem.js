const AWS = require('aws-sdk');

const docClient = new AWS.DynamoDB.DocumentClient({ region: 'us-west-2' });

const params = { TableName: 'Movies', Key: { year: 2022, title: 'MS13' } };

docClient.delete(params, function (err, data) {
  if (err) console.log('\n Unable to delete item.\n', err);
  else console.log('\nItem successfully deleted. \n', data);
});
