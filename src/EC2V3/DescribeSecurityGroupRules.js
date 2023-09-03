import {
  EC2Client,
  DescribeSecurityGroupRulesCommand,
} from '@aws-sdk/client-ec2';

const client = new EC2Client({ region: 'us-west-2' });

(async () => {
  try {
    const input = {
      //GroupIds: ['sg-0e53c50ad6abdbfb5'],
      // Remove specific GroupIds to receive all of the rules.
    };

    const response = await client.send(
      new DescribeSecurityGroupRulesCommand(input)
    );

    console.log(
      '\n   Describe Security Groups RulesRetreived\n\n\n       ',
      response
      //   '\n\n',
      //   response.SecurityGroups[0].IpPermissions,
      //   '\n\n',
      //   response.SecurityGroups[0].IpPermissions[0].IpRanges
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
