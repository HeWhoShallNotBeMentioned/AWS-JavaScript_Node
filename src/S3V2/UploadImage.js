const fs = require('fs');
const AWS = require('aws-sdk');

const s3 = new AWS.S3({ region: 'us-west-2' });

const params = {
  Body: fs.createReadStream('./funny.jpeg'),
  Bucket: 'testingbucket3clu',
  Key: 'funny.jpeg',
  ACL: 'private',
  ContentType: 'application/octet-stream',
};

s3.putObject(params, function (err, data) {
  if (err) {
    console.log('\n\nERROR-----------\n\n', err, err.stack);
  } else {
    console.log('\n\nSUCCESS!!!\n\n  Image Uploaded\n\n', data);
  }
});
