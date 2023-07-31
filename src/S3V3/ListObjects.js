import { S3Client, ListObjectsCommand } from '@aws-sdk/client-s3';

const config = { region: 'us-west-2' };
const client = new S3Client(config);
(async () => {
  try {
    const input = { Bucket: 'testingbucket1clu' };

    const response = await client.send(new ListObjectsCommand(input));

    console.log(`Object in ${input.Bucket} $:  \n\n   `, response.Contents);
  } catch (err) {
    console.log(
      `\n\nError.....Unable to delete object(s) for ${input.Bucket}  \n\n`,
      err.message,
      '  \n\n\n  ',
      err
    );
  }
})();
