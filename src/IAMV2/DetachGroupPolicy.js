const AWS = require('aws-sdk');

const iam = new AWS.IAM();

const params = {
  PolicyArn: 'arn:aws:iam::342445434384:policy/BeckettFullPolicy',
  GroupName: 'Kitteh_Place',
};

iam.detachGroupPolicy(params, function (err, data) {
  if (err) {
    console.log('attachUserPolicy Error', err);
  } else {
    console.log(data);
  }
});
