const AWS = require('aws-sdk');

const iam = new AWS.IAM();

var params = {
  NewPassword: 'x5X185?OP0}',
  OldPassword: 'h]6EszR}555555555',
};
iam.changePassword(params, function (err, data) {
  if (err) console.log(err, err.stack);
  else console.log(data);
});
