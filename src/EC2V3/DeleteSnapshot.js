import { EC2Client, DeleteSnapshotCommand } from '@aws-sdk/client-ec2';

const config = { region: 'us-west-2' };
const client = new EC2Client(config);
(async () => {
  try {
    const input = {
      SnapshotId: 'snap-082b5efc4b33d5156',
    };
    const command = new DeleteSnapshotCommand(input);
    const response = await client.send(command);
    console.log('\n EC2 snapshot deleted\n\n\n       ', response);
  } catch (err) {
    console.log(
      '\n\nError.....EC2 snapshot not deleted\n\n  ',
      err.message,
      '\n\n     ',
      err
    );
  }
})();
