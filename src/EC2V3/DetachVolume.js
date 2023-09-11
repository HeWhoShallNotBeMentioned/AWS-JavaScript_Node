import { EC2Client, DetachVolumeCommand } from '@aws-sdk/client-ec2';

const config = { region: 'us-west-2' };
const client = new EC2Client(config);
(async () => {
  try {
    const input = {
      Device: '/dev/sdf',
      InstanceId: 'i-0443a869c3efa1a67',
      VolumeId: 'vol-0b0520748b55ae510',
    };
    const command = new DetachVolumeCommand(input);
    const response = await client.send(command);
    console.log('\n EC2 volume detached\n\n\n       ', response);
  } catch (err) {
    console.log(
      '\n\nError.....EC2 volume detaching Failed\n\n  ',
      err.message,
      '\n\n     ',
      err
    );
  }
})();
