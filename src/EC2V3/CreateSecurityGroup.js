import { EC2Client, CreateSecurityGroupCommand } from '@aws-sdk/client-ec2';

const client = new EC2Client({ region: 'us-west-2' });

(async () => {
  try {
    const input = {
      Description: 'Security Group for the EC2 Course work',
      GroupName: 'EC2-Project',
    };

    const response = await client.send(new CreateSecurityGroupCommand(input));

    console.log('\n   Security Group Created\n\n\n       ', response);
  } catch (err) {
    console.log('\n\nError.....\n\n  ', err.message, '\n\n     ', err);
  }
})();
