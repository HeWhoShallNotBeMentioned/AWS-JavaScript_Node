const AWS = require('aws-sdk');

const iam = new AWS.IAM();

const params = { NewUserName: 'Beckett', UserName: 'Monty' };

iam.updateUser(params, function (err, data) {
  if (err) {
    console.log('updateUser error', err);
  } else {
    console.log(data);
  }
});
