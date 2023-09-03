import { EC2Client, TerminateInstancesCommand } from '@aws-sdk/client-ec2';

const client = new EC2Client({ region: 'us-west-2' });

(async () => {
  try {
    const input = {
      InstanceIds: ['i-036eafcadb1e99333'],
    };

    const response = await client.send(new TerminateInstancesCommand(input));

    console.log('\n   EC2 Instance(s) Terminated.\n\n\n       ', response);
  } catch (err) {
    console.log(
      '\n\nError.....Failed to Terminate EC2 Instance(s)\n\n  ',
      err.message,
      '\n\n     ',
      err
    );
  }
})();
