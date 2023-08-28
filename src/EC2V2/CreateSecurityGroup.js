const AWS = require('aws-sdk');
//const fs = require('fs');

const ec2 = new AWS.EC2({ region: 'us-west-2' });

const params = {
  Description: 'security group with javascript',
  GroupName: 'sdksecurity',
};

ec2.createSecurityGroup(params, function (err, data) {
  if (err)
    console.log(
      `\nUnable to create security group.\n\n    `,
      err,
      `\n\n         `,
      err.stack
    );
  else console.log(`\nSecurity group created.\n\n    `, data);
});
