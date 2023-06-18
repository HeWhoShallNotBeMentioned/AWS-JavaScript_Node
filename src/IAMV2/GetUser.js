const AWS = require('aws-sdk');

const iam = new AWS.IAM();

const params = {
  UserName: 'aws_JS_EB_workshop',
};
iam.getUser(params, function (err, data) {
  if (err) console.log(err, err.stack);
  else console.log(data);
});
