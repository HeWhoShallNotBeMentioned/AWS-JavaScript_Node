import { SESClient, CreateTemplateCommand } from '@aws-sdk/client-ses';

const client = new SESClient({ region: 'us-west-2' });

(async () => {
  try {
    const input = {
      Template: {
        TemplateName: 'BeckettIsSleeping',
        HtmlPart:
          'Cats conserve energy by sleeping for an average of 13 to14 hours a day. Cats have flexible bodies and teeth adapted for hunting small animals such as mice and rats. A group of cats is called a clowder, a male cat is called a tom, a female cat is called a molly or queen while young cats are called kittens.',
        SubjectPart: 'AWS Course Sample',
        TextPart:
          'Cats conserve energy by sleeping for an average of 13 to14 hours a day. Cats have flexible bodies and teeth adapted for hunting small animals such as mice and rats. A group of cats is called a clowder, a male cat is called a tom, a female cat is called a molly or queen while young cats are called kittens.',
      },
    };

    const response = await client.send(new CreateTemplateCommand(input));

    console.log('\n  Template Created...\n\n\n       ', response);
  } catch (err) {
    console.log(
      '\n\nError.....Failed to create template.\n\n  ',
      err.message,
      '\n\n     ',
      err
    );
  }
})();
