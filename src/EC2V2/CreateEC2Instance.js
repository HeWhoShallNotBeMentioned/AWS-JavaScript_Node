const AWS = require('aws-sdk');

const ec2 = new AWS.EC2({ region: 'us-west-2' });

const params = {
  ImageId: 'ami-002829755fa238bfa',
  MinCount: 1,
  MaxCount: 1,
  InstanceType: 't2.micro',
  KeyName: 'chris-test-key-pair',
  SecurityGroups: ['sdksecurity'],
  TagSpecifications: [
    {
      ResourceType: 'instance',
      Tags: [
        {
          Key: 'Purpose',
          Value: 'test',
        },
      ],
    },
  ],
};

ec2.runInstances(params, function (err, data) {
  if (err)
    console.error(
      `\nUnable to create EC2 Instance.\n\n    `,
      err,
      `\n\n         `,
      err.stack
    );
  else console.log(`\nEC2 Instance created.\n\n    `, data);
});
