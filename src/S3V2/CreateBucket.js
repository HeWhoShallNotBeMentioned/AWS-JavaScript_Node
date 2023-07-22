const AWS = require('aws-sdk');

const s3 = new AWS.S3({ region: 'us-west-2' });
// can also put accessKeyId and secretAccessKey in config fiel with region

const params = {
  Bucket: 'testingbucket1clu',
  ACL: 'private',

  CreateBucketConfiguration: { LocationConstraint: 'us-west-2' },
};

s3.createBucket(params, function (err, data) {
  if (err) {
    console.log('\n\nERROR-----------\n\n', err, err.stack);
  } else {
    console.log('\n\nSUCCESS!!!\n\n  Bucket Created\n\n', data);
  }
});
