import { S3Client, CopyObjectCommand } from '@aws-sdk/client-s3';

const client = new S3Client({ region: 'us-west-2' });
(async () => {
  const input = {
    ACL: 'private',
    Bucket: 'testingbucket1clu',
    Key: 'readme.md',
    StorageClass: 'STANDARD',
    CopySource: 'testingbucket2clu/readme.md',
  };
  try {
    const response = await client.send(new CopyObjectCommand(input));
    console.log(
      `\n\nSUCCESS!!!\n\n  ${input.CopySource} ${input.Key} copied to ${input.Bucket}!\n\n`,
      response
    );
  } catch (err) {
    console.log(
      `\n\nError.....Object ${input.Bucket} ${input.CopySource} not copied successfully. \n\n`,
      err.message,
      '  \n\n\n  ',
      err
    );
  }
})();
