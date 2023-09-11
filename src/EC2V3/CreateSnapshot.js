import { EC2Client, CreateSnapshotCommand } from '@aws-sdk/client-ec2';

const config = { region: 'us-west-2' };
const client = new EC2Client(config);
(async () => {
  try {
    const input = {
      Description: 'Testing for JS AWS class.',
      VolumeId: 'vol-0b0520748b55ae510',
      TagSpecifications: [
        {
          ResourceType: 'snapshot',
          Tags: [
            {
              Key: 'type',
              Value: 'snapshot volume',
            },
          ],
        },
      ],
    };
    const command = new CreateSnapshotCommand(input);
    const response = await client.send(command);
    console.log('\n EC2 volume snapshot created\n\n\n       ', response);
  } catch (err) {
    console.log(
      '\n\nError.....EC2 volume snapshot not created\n\n  ',
      err.message,
      '\n\n     ',
      err
    );
  }
})();
