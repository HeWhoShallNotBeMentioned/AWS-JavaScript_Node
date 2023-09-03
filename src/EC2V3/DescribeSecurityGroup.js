import { EC2Client, DescribeSecurityGroupsCommand } from '@aws-sdk/client-ec2';

const client = new EC2Client({ region: 'us-west-2' });

(async () => {
  try {
    const input = {
      GroupIds: ['sg-0e53c50ad6abdbfb5'],
    };

    const response = await client.send(
      new DescribeSecurityGroupsCommand(input)
    );

    console.log(
      '\n   Describe Security Groups Retreived\n\n\n       ',
      response,
      '\n\n',
      response.SecurityGroups[0].IpPermissions,
      '\n\n',
      response.SecurityGroups[0].IpPermissions[0].IpRanges
    );
  } catch (err) {
    console.log(
      '\n\nError.....Failed to Retreive Describe Security Group Information\n\n  ',
      err.message,
      '\n\n     ',
      err
    );
  }
})();
