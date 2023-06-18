const AWS = require('aws-sdk');

const iam = new AWS.IAM();

var params = {
  UserName: 'usertobedeleted',
};
iam.deleteUser(params, function (err, data) {
  if (err) console.log(err, err.stack);
  else console.log(data);
});
// Only can delete user after all other pieces are deleted such as passwords,
// permissions, groups, etc are also deleted. See the documentation for details.
