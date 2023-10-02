const AWS = require('aws-sdk');

const ses = new AWS.SES({ region: 'us-west-2' });

const params = {
  Source: 'cunderwoodmn@gmail.com',
  Destination: {
    ToAddresses: ['cunderwoodmn@gmail.com', 'cunderwoodmn@yahoo.com'],
  },
  ReplyToAddresses: ['cunderwoodmn@gmail.com'],

  Template: 'SmitsonIsSleeping',
  TemplateData: '{"replace":"value"}',
};
ses.sendTemplatedEmail(params, function (err, data) {
  if (err) {
    console.log(
      '\n\n     ERROR!!! Template emails not sent-----------\n\n ',
      err,
      err.stack
    );
  } else {
    console.log('\n\nSUCCESS!!!\n\n  Template emails sent\n\n', data);
  }
});
