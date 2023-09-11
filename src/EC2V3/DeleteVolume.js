import { EC2Client, DeleteVolumeCommand } from '@aws-sdk/client-ec2';

const config = { region: 'us-west-2' };
const client = new EC2Client(config);
(async () => {
  try {
    const input = {
      VolumeId: 'vol-0b0520748b55ae510',
    };
    const command = new DeleteVolumeCommand(input);
    const response = await client.send(command);
    console.log('\n EC2 volume deleted\n\n\n       ', response);
  } catch (err) {
    console.log(
      '\n\nError.....EC2 volume not deleted\n\n  ',
      err.message,
      '\n\n     ',
      err
    );
  }
})();
