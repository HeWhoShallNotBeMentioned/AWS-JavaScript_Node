const AWS = require('aws-sdk');

const iam = new AWS.IAM();

iam.listUsers((params = {}), function (err, data) {
  if (err) {
    console.log('listUsers rror', err);
  } else {
    console.log(data);
  }
});
