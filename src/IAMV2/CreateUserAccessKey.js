const AWS = require('aws-sdk');

const iam = new AWS.IAM();

var params = {
  UserName: 'Beckett',
};
iam.createAccessKey(params, function (err, data) {
  if (err) console.log(err, err.stack);
  else console.log(data);
});
