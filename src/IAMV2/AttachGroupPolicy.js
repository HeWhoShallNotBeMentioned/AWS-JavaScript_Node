const AWS = require('aws-sdk');

const iam = new AWS.IAM();

var params = {
  GroupName: 'Kitteh_Place',
  PolicyArn: 'arn:aws:iam::342445434384:policy/BeckettFullPolicy',
};
iam.attachGroupPolicy(params, function (err, data) {
  if (err) console.log(err, err.stack);
  else console.log(data);
});
