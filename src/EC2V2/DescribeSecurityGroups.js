const AWS = require('aws-sdk');

const ec2 = new AWS.EC2({ region: 'us-west-2' });

const params = {
  GroupIds: ['sg-fef2c481', 'sg-0e2bd5989ecea3a13', 'sg-05cffc6f27df0bc54'],
};

// leave params out of the function call if you want all of the security groups in your account.
// for specific group(s) use the params

ec2.describeSecurityGroups(function (err, data) {
  if (err)
    console.log(
      `\nUnable to describe EC2 Instance(s).\n\n    `,
      err,
      `\n\n         `,
      err.stack
    );
  else console.log(`\nEC2 Instance(s) description.\n\n    `, data);
});
