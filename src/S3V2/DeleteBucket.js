const AWS = require('aws-sdk');

const s3 = new AWS.S3({ region: 'us-west-2' });

const params = { Bucket: 'testingbucket4clu' };

s3.deleteBucket(params, function (err, data) {
  if (err) {
    console.log('\n\nERROR-----------\n\n', err, err.stack);
  } else {
    console.log('\n\nSUCCESS!!!\n\n  Bucket Deleted\n\n', data);
  }
});
