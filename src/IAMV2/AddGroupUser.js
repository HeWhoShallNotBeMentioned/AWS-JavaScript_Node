const AWS = require('aws-sdk');

const iam = new AWS.IAM();

var params = {
  GroupName: 'Kitteh_Place',
  UserName: 'Smithson',
};
iam.addUserToGroup(params, function (err, data) {
  if (err) console.log(err, err.stack); // an error occurred
  else console.log(data); // successful response
});
