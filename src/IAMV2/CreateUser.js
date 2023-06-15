const AWS = require('aws-sdk');

const iam = new AWS.IAM();

const params = {
  UserName: 'Smithson',
};

iam.createUser(params, function (err, data) {
  if (err) {
    console.log('New User Error', err);
  } else {
    console.log('New User', data);
  }
});
