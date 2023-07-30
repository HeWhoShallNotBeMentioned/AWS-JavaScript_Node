import { S3Client, DeleteBucketCommand } from '@aws-sdk/client-s3';

const client = new S3Client({ region: 'us-west-2' });
(async () => {
  try {
    const input = {
      Bucket: 'testingbucket1clu',
    };
    const command = new DeleteBucketCommand(input);
    const response = await client.send(command);
    console.log(`Bucket ${input.Bucket} deleted.  \n\n   `, response);
  } catch (err) {
    console.log(
      '\n\nError.....Bucket not deleted. \n\n',
      err.message,
      '  \n\n\n  ',
      err
    );
  }
})();
