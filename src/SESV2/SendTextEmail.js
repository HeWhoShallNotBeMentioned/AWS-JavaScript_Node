const AWS = require('aws-sdk');

const ses = new AWS.SES({ region: 'us-west-2' });

const params = {
  Destination: {
    ToAddresses: ['cunderwoodmn@gmail.com', 'cunderwoodmn@yahoo.com'],
  },
  Message: {
    Body: {
      //   Html: {
      //     Charset: 'UTF-8',
      //     Data: 'This message body contains HTML formatting. It can, for example, contain links like this one: <a class="ulink" href="http://docs.aws.amazon.com/ses/latest/DeveloperGuide" target="_blank">Amazon SES Developer Guide</a>.',
      //   },
      Text: {
        Charset: 'UTF-8',
        Data: 'This is the message body in text format.',
      },
    },
    Subject: {
      Charset: 'UTF-8',
      Data: 'Test email',
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
