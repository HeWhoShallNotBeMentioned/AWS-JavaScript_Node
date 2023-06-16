const AWS = require('aws-sdk');

const iam = new AWS.IAM();

const params = {
  GroupName: 'Kitteh_Place',
};

iam.createGroup(params, function (err, data) {
  if (err) {
    console.log('New UserGroup Error', err);
  } else {
    console.log('New User', data);
  }
});
