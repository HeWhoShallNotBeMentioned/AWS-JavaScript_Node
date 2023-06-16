const AWS = require('aws-sdk');

const iam = new AWS.IAM();

const params = {
  PolicyArn: 'arn:aws:iam::342445434384:policy/BeckettFullPolicy',
  UserName: 'Beckett',
};

iam.detachUserPolicy(params, function (err, data) {
  if (err) {
    console.log('deleteUserPolicy Error', err);
  } else {
    console.log(data);
  }
});
