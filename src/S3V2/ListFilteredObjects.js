const AWS = require('aws-sdk');

const s3 = new AWS.S3({ region: 'us-west-2' });

const params = { Bucket: 'testingbucket2clu', Prefix: 'fun' };

s3.listObjects(params, function (err, data) {
  if (err) {
    console.log('\n\nERROR-----------\n\n', err, err.stack);
  } else {
    console.log('\n\nSUCCESS!!!\n\n  List retrieved!\n\n', data);
  }
});
