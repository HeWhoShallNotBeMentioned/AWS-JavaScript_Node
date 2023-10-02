const AWS = require('aws-sdk');

const ses = new AWS.SES({ region: 'us-west-2' });

var params = {};
ses.listTemplates(params, function (err, data) {
  if (err) {
    console.log(
      '\n\n     ERROR!!! Template(s) not found-----------\n\n ',
      err,
      err.stack
    );
  } else {
    console.log('\n\nSUCCESS!!!\n\n  Template(s) found\n\n', data);
  }
});
