const AWS = require('aws-sdk');

const ec2 = new AWS.EC2({ region: 'us-west-2' });

ec2.describeSecurityGroupRules(function (err, data) {
  if (err)
    console.log(
      `\nUnable to describe EC2 Instance(s).\n\n    `,
      err,
      `\n\n         `,
      err.stack
    );
  else console.log(`\nEC2 Instance(s) description.\n\n    `, data);
});
