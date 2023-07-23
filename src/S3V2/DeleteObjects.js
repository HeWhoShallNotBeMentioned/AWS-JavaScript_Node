const AWS = require('aws-sdk');

const s3 = new AWS.S3({ region: 'us-west-2' });

const params = {
  Bucket: 'testingbucket2clu',
  Delete: {
    Objects: [{ Key: 'funny.jpg' }, { Key: 'moviedata.json' }],
    Quiet: false,
  },
};

s3.deleteObjects(params, function (err, data) {
  if (err) {
    console.log('\n\nERROR-----------\n\n', err, err.stack);
  } else {
    console.log(`\n\nSUCCESS!!!\n\n  Objects deleted!\n\n`, data);
  }
});
