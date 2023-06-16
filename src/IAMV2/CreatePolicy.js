const AWS = require('aws-sdk');

const iam = new AWS.IAM();

var policy_document = {
  Version: '2012-10-17',
  Statement: [
    {
      Effect: 'Allow',
      Action: '*',
      Resource: '*',
    },
  ],
};

const params = {
  PolicyDocument: JSON.stringify(policy_document),
  PolicyName: 'BeckettFullPolicy',
  Description: 'All the power to Mr. B',
  Tags: [
    {
      Key: 'animal',
      Value: 'kitteh',
    },
  ],
};

iam.createPolicy(params, function (err, data) {
  if (err) console.log(err, err.stack);
  else console.log(data);
});
