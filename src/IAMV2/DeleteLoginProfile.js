const AWS = require('aws-sdk');

const iam = new AWS.IAM();

var params = {
  UserName: 'Smithson',
};
iam.deleteLoginProfile(params, function (err, data) {
  if (err) console.log(err, err.stack);
  else console.log(data);
});
