const AWS = require('aws-sdk');

const s3 = new AWS.S3({ region: 'us-west-2' });
const params = {
  Bucket: 'testingbucket2clu',
  Key: 'moviedata.json',
  ObjectAttributes: [
    'ETag',
    'Checksum',
    'StorageClass',
    'ObjectParts',
    'ObjectSize',
  ],
};

s3.getObjectAttributes(params, function (err, data) {
  if (err) {
    console.log('\n\nERROR-----------\n\n', err, err.stack);
  } else {
    console.log('\n\nSUCCESS!!!\n\n  File data retrieved!\n\n', data);
  }
});
