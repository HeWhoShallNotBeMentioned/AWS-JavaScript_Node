import { S3Client, ListBucketsCommand } from '@aws-sdk/client-s3';
const config = { region: 'us-west-2' };
const client = new S3Client(config);
(async () => {
  try {
    const input = {};

    const response = await client.send(new ListBucketsCommand(input));
    console.log(`List of buckets:  \n\n   `, response.Buckets);
  } catch (err) {
    console.log(
      '\n\nError.....Unable to list buckets. \n\n',
      err.message,
      '  \n\n\n  ',
      err
    );
  }
})();
