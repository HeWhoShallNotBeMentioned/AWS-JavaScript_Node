const AWS = require('aws-sdk');

const iam = new AWS.IAM();

var params = {
  Password: 'h]6EszR}vJ*m',
  PasswordResetRequired: false,
  UserName: 'Smithson',
};
iam.createLoginProfile(params, function (err, data) {
  if (err) console.log(err, err.stack);
  else console.log(data);
});
