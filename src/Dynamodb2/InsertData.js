const AWS = require('aws-sdk');

const docClient = new AWS.DynamoDB.DocumentClient({ region: 'us-west-2' });

const params = {
  TableName: 'Movies',
  Item: {
    year: 2022,
    title: 'MS13',
    info: { plot: 'This is a sample test movie.', rating: 1.5 },
  },
};

console.log('\nAdding the movie...\n');

docClient.put(params, function (err, data) {
  if (err) console.log('\n Unable to load movie \n', err);
  else console.log('\n Movie added \n', data);
});
