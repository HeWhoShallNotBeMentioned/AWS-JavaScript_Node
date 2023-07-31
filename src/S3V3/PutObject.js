import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';

const client = new S3Client({ region: 'us-west-2' });
(async () => {
  try {
    const input = {
      Body: 'funny.jpg',
      Bucket: 'testingbucket1clu',
      Key: 'funny.jpg',
      ACL: 'private',
    };

    const response = await client.send(new PutObjectCommand(input));
    console.log(`Bucket ${input.Bucket} file loaded.  \n\n   `, response);
  } catch (err) {
    console.log(
      '\n\nError.....Object not uploaded. \n\n',
      err.message,
      '  \n\n\n  ',
      err
    );
  }
})();
