const fs = require('fs');
const AWS = require('aws-sdk');

const s3 = new AWS.S3({ region: 'us-west-2' });

var params = {
  Body: fs.createReadStream('./clitScotus.jpeg'),
  Bucket: 'testingbucket3clu',
  Key: 'clitScotus.jpeg',
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
