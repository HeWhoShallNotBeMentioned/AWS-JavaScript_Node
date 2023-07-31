import { S3Client, DeleteObjectsCommand } from '@aws-sdk/client-s3';

const config = { region: 'us-west-2' };
const client = new S3Client(config);
(async () => {
  try {
    const input = {
      Bucket: 'testingbucket1clu',
      Delete: { Objects: [{ Key: 'funny.jpg' }, { Key: 'moviedata.json' }] },
    };

    const response = await client.send(new DeleteObjectsCommand(input));
    console.log(`\n\n     Requested objects have been deleted.\n\n`, response);
  } catch (err) {
    console.log(
      `\n\nError.....Unable to delete object(s) for ${input.Bucket}  \n\n`,
      err.message,
      '  \n\n\n  ',
      err
    );
  }
})();
