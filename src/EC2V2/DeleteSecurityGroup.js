const AWS = require('aws-sdk');

const ec2 = new AWS.EC2({ region: 'us-west-2' });

const params = { GroupId: 'sg-05cffc6f27df0bc54' };

ec2.deleteSecurityGroup(params, function (err, data) {
  if (err)
    console.error(
      `\nUnable to delete EC2 SecurityGroup(s).\n\n    `,
      err,
      `\n\n         `,
      err.stack
    );
  else console.log(`\nEC2 SecurityGroup(s) deleted.\n\n    `, data);
});
