import { EC2Client, StopInstancesCommand } from '@aws-sdk/client-ec2';

const client = new EC2Client({ region: 'us-west-2' });

(async () => {
  try {
    const input = {
      InstanceIds: ['i-036eafcadb1e99333'],
    };

    const response = await client.send(new StopInstancesCommand(input));

    console.log('\n   EC2 Instances Stopped.\n\n\n       ', response);
  } catch (err) {
    console.log(
      '\n\nError.....Failed to Stop EC2 Instances\n\n  ',
      err.message,
      '\n\n     ',
      err
    );
  }
})();
