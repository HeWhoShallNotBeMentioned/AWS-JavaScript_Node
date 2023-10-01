const AWS = require('aws-sdk');

const ses = new AWS.SES({ region: 'us-west-2' });

var params = {
  IdentityType: 'EmailAddress',
};
ses.listIdentities(params, function (err, data) {
  if (err) {
    console.log(
      '\n\n     ERROR!!! Identities not found-----------\n\n ',
      err,
      err.stack
    );
  } else {
    console.log('\n\nSUCCESS!!!\n\n  Identities found\n\n', data);
  }
});
