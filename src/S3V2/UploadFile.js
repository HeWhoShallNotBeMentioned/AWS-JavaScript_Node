const fs = require('fs');
const AWS = require('aws-sdk');

const s3 = new AWS.S3({ region: 'us-west-2' });

const params = {
  Body: fs.readFileSync('./moviedata.json', { encoding: 'utf8', flag: 'r' }),
  Bucket: 'testingbucket2clu',
  Key: 'moviedata.json',
  ACL: 'private',
};
s3.upload(params, function (err, data) {
  if (err) {
    console.log('\n\nERROR-----------\n\n', err, err.stack);
  } else {
    console.log('\n\nSUCCESS!!!\n\n  File Uploaded\n\n', data);
  }
});
