const AWS = require('aws-sdk');

const docClient = new AWS.DynamoDB.DocumentClient({ region: 'us-west-2' });

const params = {
  TableName: 'Movies',
  Key: {
    year: 2022,
    title: 'MS13',
  },
  UpdateExpression: 'set info.rating = :r, info.plot= :p, info.actors=:a',
  ExpressionAttributeValues: {
    ':r': 3.5,
    ':p': 'Boring. Derivative. Drivell',
    ':a': ['Drew Carey', 'Jim Carrey', 'Jennifer Grey'],
  },
  ReturnValues: 'UPDATED_NEW',
};

console.log('\nUpdating Item..........\n');

docClient.update(params, function (err, data) {
  if (err) console.log('\nCould not update item. \n\n', err, err.stack);
  else console.log('Updated item fields successfully.\n\n', data);
});
