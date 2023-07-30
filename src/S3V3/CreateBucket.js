import { S3Client, CreateBucketCommand } from '@aws-sdk/client-s3';

const client = new S3Client({ region: 'us-west-2' });

try {
  const input = {
    ACL: 'private',
    Bucket: 'testingbucket1clu',
    CreateBucketConfiguration: {
      LocationConstraint: 'us-west-2',
    },
  };

  const response = await client.send(new CreateBucketCommand(input));
  console.log('\n\n Bucket created...  \n\n    ', response);
} catch (err) {
  console.log('\n\nError.....\n\n', err);
}
