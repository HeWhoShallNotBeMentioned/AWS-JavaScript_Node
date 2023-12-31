const AWS = require('aws-sdk');

const s3 = new AWS.S3({ region: 'us-west-2' });
const params = { Bucket: 'testingbucket2clu', Key: 'moviedata.json' };

s3.getObject(params, function (err, data) {
  if (err) {
    console.log('\n\nERROR-----------\n\n', err, err.stack);
  } else {
    console.log(
      '\n\nSUCCESS!!!\n\n  File retrieved!\n\n',
      JSON.parse(data.Body)
    );
  }
});
