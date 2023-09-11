import { EC2Client, DescribeVolumesCommand } from '@aws-sdk/client-ec2';
const config = { region: 'us-west-2' };
const client = new EC2Client(config);
(async () => {
  try {
    const input = {};
    const command = new DescribeVolumesCommand(input);
    const response = await client.send(command);
    console.log('\n EC2 volumes listed\n\n\n       ', response);
  } catch (err) {
    console.log(
      '\n\nError.....EC2 volume listing Failed\n\n  ',
      err.message,
      '\n\n     ',
      err
    );
  }
})();
