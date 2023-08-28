const AWS = require('aws-sdk');

const ec2 = new AWS.EC2({ region: 'us-west-2' });

const params = {
  GroupId: 'sg-05cffc6f27df0bc54',
  IpPermissions: [
    {
      IpProtocol: 'tcp',
      FromPort: 22,
      ToPort: 22,
      IpRanges: [
        {
          CidrIp: '172.223.223.129/0',
          Description: 'tcp from my home IP address.',
        },
      ],
    },
  ],
};

ec2.authorizeSecurityGroupIngress(params, function (err, data) {
  if (err)
    console.log(
      `\nUnable to modify security group.\n\n    `,
      err,
      `\n\n         `,
      err.stack
    );
  else
    console.log(`\nSecurity group inbound permissions updated.\n\n    `, data);
});
