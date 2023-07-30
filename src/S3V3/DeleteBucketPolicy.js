import { S3Client, DeleteBucketPolicyCommand } from '@aws-sdk/client-s3';
// Deletes the entire policy field text not just most recent changes or other subset

const client = new S3Client({ region: 'us-west-2' });
(async () => {
  try {
    const input = {
      Bucket: 'testingbucket1clu',
    };
    const command = new DeleteBucketPolicyCommand(input);
    const response = await client.send(command);
    console.log(
      `Bucket ${input.Bucket} policy file deleted.  \n\n   `,
      response
    );
  } catch (err) {
    console.log(
      '\n\nError.....Bucket policy not deleted. \n\n',
      err.message,
      '  \n\n\n  ',
      err
    );
  }
})();
