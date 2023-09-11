import { EC2Client, CreateVolumeCommand } from '@aws-sdk/client-ec2';
const client = new EC2Client({ region: 'us-west-2' });
(async () => {
  try {
    const input = {
      AvailabilityZone: 'us-west-2a',
      Encrypted: false,
      Size: 5,
      VolumeType: 'gp2',
      DryRun: false,
      TagSpecifications: [
        {
          ResourceType: 'volume',

          Tags: [
            {
              Key: 'HowBuilt',
              Value: 'JavaScript/Node.js',
            },
          ],
        },
      ],
      MultiAttachEnabled: false,
    };

    const response = await client.send(new CreateVolumeCommand(input));
    console.log('\n EC2 volume Created\n\n\n       ', response);
  } catch (err) {
    console.log(
      '\n\nError.....EC2 volume Creation Failed\n\n  ',
      err.message,
      '\n\n     ',
      err
    );
  }
})();
