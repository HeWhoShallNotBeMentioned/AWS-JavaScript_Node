import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { default as fs } from 'fs';

const s3 = new S3Client({ region: 'us-west-2' });

export const handler = async (event) => {
  const fileContent = fs.readFileSync('star-wars-#53.jpeg');

  const params = {
    Bucket: 'testingbucket2clu',
    ACL: 'public-read',
    Key: 'xwingimg.png',
    Body: fileContent,
  };

  const data = await s3.send(new PutObjectCommand(params));
  console.log('\n\n\n  data--------------------------------\n\n\n\n', data);
  return data;
};
