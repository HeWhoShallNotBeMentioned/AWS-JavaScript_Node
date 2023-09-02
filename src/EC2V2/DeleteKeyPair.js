const AWS = require('aws-sdk');

const ec2 = new AWS.EC2({ region: 'us-west-2' });

const params = { KeyName: 'chris-test-key-pair' };

ec2.deleteKeyPair(params, function (err, data) {
  if (err)
    console.error(
      `\nUnable to delete EC2 Security Key Pair(s).\n\n    `,
      err,
      `\n\n         `,
      err.stack
    );
  else console.log(`\nEC2 Security Key Pair(s) deleted.\n\n    `, data);
});
