const AWS = require('aws-sdk');
const process = require('process');

process.argv.forEach((val, index) => {
  console.log(`${index}: ${val}`);
});

const s3 = new AWS.S3({ region: 'us-west-2' });

// to pass the bucket to the program use --args <bucketname> on the command line
// example: node  DeleteBucketNotEmpty.js testingbucket3clu
(async (bucketname = process.argv[2]) => {
  try {
    console.log(`Deleting ${bucketname}`);
    const { Contents } = await s3.listObjects({ Bucket: bucketname }).promise();
    console.log('Contents++++++++', Contents);
    if (Contents.length > 0) {
      await s3
        .deleteObjects({
          Bucket: bucketname,
          Delete: {
            Objects: Contents.map(({ Key }) => ({ Key })),
          },
        })
        .promise();
    }

    // only can delete an empty buckett this way.
    s3.deleteBucket({ Bucket: bucketname }, function (err, data) {
      if (err) {
        console.log('\n\nERROR-----------\n\n', err, err.stack);
      } else {
        console.log('\n\nSUCCESS!!!\n\n  Bucket Deleted\n\n', data);
      }
    });
  } catch (err) {
    console.log(
      '\n\nError----------------------\n\n  ',
      err,
      '\n\n   ',
      err.stack
    );
  }
})();
