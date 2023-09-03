import {
  EC2Client,
  AuthorizeSecurityGroupIngressCommand,
} from '@aws-sdk/client-ec2';
const client = new EC2Client({ region: 'us-west-2' });
(async () => {
  try {
    const input = {
      GroupId: 'sg-0e53c50ad6abdbfb5',
      IpPermissions: [
        {
          IpProtocol: 'tcp',
          FromPort: 22,
          ToPort: 22,
          IpRanges: [
            {
              CidrIp: '172.223.223.129/24',
              Description: 'tcp from my home IP address.',
            },
          ],
        },
        {
          IpProtocol: 'tcp',
          FromPort: 80,
          ToPort: 80,
          IpRanges: [
            {
              CidrIp: '172.223.223.129/24',
              Description: 'tcp from my home IP address.',
            },
          ],
        },
      ],
    };

    const command = new AuthorizeSecurityGroupIngressCommand(input);
    const response = await client.send(command);
    console.log(
      '\n   Security Group Inbound Rules Added\n\n\n       ',
      response
    );
  } catch (err) {
    console.log(
      '\n\nError.....\n\n  Security Group Inbound Rules Not Added\n\n\n      ',
      err.message,
      '\n\n     ',
      err
    );
  }
})();
