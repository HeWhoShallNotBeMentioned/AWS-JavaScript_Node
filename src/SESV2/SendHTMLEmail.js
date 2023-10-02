const AWS = require('aws-sdk');

const ses = new AWS.SES({ region: 'us-west-2' });

const html_contents =
  '<html>' +
  "<h1 style='text-align:center'>AWS with JavaScript and NodeJS</h1>" +
  "<p style='color:red'>Welcome to the course and thanks for the buying</p>" +
  '</html>';

const params = {
  Destination: {
    ToAddresses: ['cunderwoodmn@gmail.com', 'cunderwoodmn@yahoo.com'],
  },
  Message: {
    Body: {
      Html: {
        Charset: 'UTF-8',
        Data: html_contents,
      },
    },
    Subject: {
      Charset: 'UTF-8',
      Data: 'Test email with HTML',
    },
  },
  Source: 'cunderwoodmn@gmail.com',
  ReplyToAddresses: ['cunderwoodmn@gmail.com'],
};
ses.sendEmail(params, function (err, data) {
  if (err) {
    console.log(
      '\n\n     ERROR!!! Emails not sent-----------\n\n ',
      err,
      err.stack
    );
  } else {
    console.log('\n\nSUCCESS!!!\n\n  Emails sent\n\n', data);
  }
});
