import { EC2Client, RunInstancesCommand } from '@aws-sdk/client-ec2';

const client = new EC2Client({ region: 'us-west-2' });

(async () => {
  try {
    const input = {
      ImageId: 'ami-002829755fa238bfa',
      MinCount: 1,
      MaxCount: 1,
      InstanceType: 't2.micro',
      KeyName: 'EC2-Project',
      SecurityGroups: ['EC2-Project'],
      TagSpecifications: [
        {
          ResourceType: 'instance',
          Tags: [
            {
              Key: 'Purpose',
              Value: 'test',
            },
          ],
        },
      ],
    };

    const response = await client.send(new RunInstancesCommand(input));

    console.log('\n EC2 Instance Created\n\n\n       ', response);
  } catch (err) {
    console.log(
      '\n\nError.....EC2 Instance Creation Failed\n\n  ',
      err.message,
      '\n\n     ',
      err
    );
  }
})();
