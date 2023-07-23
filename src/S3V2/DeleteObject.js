const AWS = require('aws-sdk');

const s3 = new AWS.S3({ region: 'us-west-2' });

const params = { Bucket: 'testingbucket1clu', Key: 'Funny.jpg' };

s3.deleteObject(params, function (err, data) {
  if (err) {
    console.log('\n\nERROR-----------\n\n', err, err.stack);
  } else {
    console.log(
      `\n\nSUCCESS!!!\n\n  Object ${params.Bucket} ${params.Key} deleted!\n\n`,
      data
    );
  }
});
