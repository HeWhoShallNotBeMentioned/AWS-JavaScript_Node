const AWS = require('aws-sdk');

const ses = new AWS.SES({ region: 'us-west-2' });

var params = {
  Template: {
    TemplateName: 'SmitsonIsSleeping',
    HtmlPart: '<h1>SMITHSON!!!!!!</h1>',
    SubjectPart: 'AWS Course Sample',
    TextPart:
      'Cats conserve energy by sleeping for an average of 13 to14 hours a day. Cats have flexible bodies and teeth adapted for hunting small animals such as mice and rats. A group of cats is called a clowder, a male cat is called a tom, a female cat is called a molly or queen while young cats are called kittens.',
  },
};
ses.createTemplate(params, function (err, data) {
  if (err) {
    console.log(
      '\n\n     ERROR!!! Email template not created-----------\n\n ',
      err,
      err.stack
    );
  } else {
    console.log('\n\nSUCCESS!!!\n\n  Email template created \n\n', data);
  }
});
