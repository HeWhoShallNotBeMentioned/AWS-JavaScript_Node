const AWS = require('aws-sdk');

const iam = new AWS.IAM();

const params = {
  GroupName: 'Kitteh_Place' /* required */,
};
iam.getGroup(params, function (err, data) {
  if (err) console.log(err, err.stack);
  else console.log(data);
});
