import { EC2Client, DeleteKeyPairCommand } from '@aws-sdk/client-ec2';

const client = new EC2Client({ region: 'us-west-2' });

(async () => {
  try {
    const input = {
      KeyName: 'EC2-Project',
    };

    const response = await client.send(new DeleteKeyPairCommand(input));

    console.log('\n    Key Pair Deleted.\n\n\n       ', response);
  } catch (err) {
    console.log(
      '\n\nError.....Key Pair Not Deleted.\n\n  ',
      err.message,
      '\n\n     ',
      err
    );
  }
})();
