import { S3Client, DeleteObjectCommand } from '@aws-sdk/client-s3';

const config = { region: 'us-west-2' };
const client = new S3Client(config);
(async () => {
  try {
    const input = { Bucket: 'testingbucket1clu', Key: 'funny.jpg' };

    const response = await client.send(new DeleteObjectCommand(input));
    console.log(
      `Object ${input.Bucket} ${input.Key} deleted:  \n\n   `,
      response
    );
  } catch (err) {
    console.log(
      `\n\nError.....Unable to delete object ${input.Bucket} ${input.Key}. \n\n`,
      err.message,
      '  \n\n\n  ',
      err
    );
  }
})();
