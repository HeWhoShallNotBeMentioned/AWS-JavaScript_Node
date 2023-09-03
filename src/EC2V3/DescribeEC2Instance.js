import { EC2Client, DescribeInstancesCommand } from '@aws-sdk/client-ec2';

const client = new EC2Client({ region: 'us-west-2' });

(async () => {
  try {
    const input = {
      InstanceIds: ['i-036eafcadb1e99333'],
    };

    const response = await client.send(new DescribeInstancesCommand(input));

    console.log(
      '\n   Describe Instances Information Retreived\n\n\n       ',
      response
    );
  } catch (err) {
    console.log(
      '\n\nError.....Failed to Retreive Describe Instances Information\n\n  ',
      err.message,
      '\n\n     ',
      err
    );
  }
})();
