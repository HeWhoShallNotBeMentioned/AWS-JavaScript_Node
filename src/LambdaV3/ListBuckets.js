import { S3Client, ListBucketsCommand } from '@aws-sdk/client-s3';

const s3 = new S3Client({ region: 'us-west-2' });

export const handler = async (event) => {
  const data = await s3.send(new ListBucketsCommand({}));
  console.log('data', data);
  return data;
};
