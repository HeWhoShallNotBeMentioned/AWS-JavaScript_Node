import { S3Client, PutBucketPolicyCommand } from '@aws-sdk/client-s3';

const client = new S3Client({ region: 'us-west-2' });

// only works if Block Public Policy rules in AWS Console are turned off.

(async () => {
  try {
    const BUCKET_NAME = 'testingbucket1clu';

    const readOnlyUserPolicy = {
      Version: '2012-10-17',
      Statement: [
        {
          Sid: 'AddPerm',
          Effect: 'Allow',
          Principal: '*',
          Action: ['s3:GetObject'],
          Resource: [''],
        },
      ],
    };

    const bucketResource = 'arn:aws:s3:::' + BUCKET_NAME + '/*';

    readOnlyUserPolicy.Statement[0].Resource[0] = bucketResource;

    const input = {
      Bucket: BUCKET_NAME,
      Policy: JSON.stringify(readOnlyUserPolicy),
    };

    const response = await client.send(new PutBucketPolicyCommand(input));
    console.log(
      `\n\n Bucket policy applied to ${input.Bucket}.\n\n    `,
      response
    );
  } catch (err) {
    console.log(
      '\n\nError.....Policy not added. \n\n',
      err,
      '  \n\n\n  ',
      err.message
    );
  }
})();
