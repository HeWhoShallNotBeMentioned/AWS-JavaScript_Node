import { EC2Client, ModifyVolumeCommand } from '@aws-sdk/client-ec2';

const config = { region: 'us-west-2' };
const client = new EC2Client(config);
(async () => {
  try {
    const input = {
      VolumeId: 'vol-0b0520748b55ae510',
      Size: 11,
    };
    const command = new ModifyVolumeCommand(input);
    const response = await client.send(command);
    console.log('\n EC2 volume modified\n\n\n       ', response);
  } catch (err) {
    console.log(
      '\n\nError.....EC2 volume modifaction failed\n\n  ',
      err.message,
      '\n\n     ',
      err
    );
  }
})();
