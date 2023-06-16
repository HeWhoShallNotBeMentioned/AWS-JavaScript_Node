const AWS = require('aws-sdk');

const iam = new AWS.IAM();

const params = {
  Scope: 'All',
  PolicyUsageFilter: 'PermissionsPolicy',
};

iam.listPolicies(params, function (err, data) {
  if (err) {
    console.log('listPolicies Error', err);
  } else {
    console.log('listPolicies data', data);
  }
});
