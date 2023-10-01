const AWS = require('aws-sdk');

const ses = new AWS.SES({ region: 'us-west-2' });

var params = {
  EmailAddress: 'cunderwoodmn@yahoo.com',
};
ses.verifyEmailIdentity(params, function (err, data) {
  if (err) {
    console.log(
      '\n\n     ERROR!!! email not verfified -----------\n\n ',
      err,
      err.stack
    );
  } else {
    console.log('\n\nSUCCESS!!!\n\n  Email Verified\n\n', data);
  }
});

// "type": "module",
