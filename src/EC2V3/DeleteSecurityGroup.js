import { EC2Client, DeleteSecurityGroupCommand } from '@aws-sdk/client-ec2';

const client = new EC2Client({ region: 'us-west-2' });

(async () => {
  try {
    const input = {
      GroupName: 'EC2-Project',
    };

    const response = await client.send(new DeleteSecurityGroupCommand(input));

    console.log('\n    Security Group Deleted.\n\n\n       ', response);
  } catch (err) {
    console.log(
      '\n\nError.....Security Group Not Deleted.\n\n  ',
      err.message,
      '\n\n     ',
      err
    );
  }
})();
