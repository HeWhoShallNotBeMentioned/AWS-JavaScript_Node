import { SESClient, GetTemplateCommand } from '@aws-sdk/client-ses';

const client = new SESClient({ region: 'us-west-2' });

(async () => {
  try {
    const input = {
      TemplateName: 'BeckettIsSleeping',
    };

    const response = await client.send(new GetTemplateCommand(input));

    console.log(
      '\n   Retrieved template information...\n\n\n       ',
      response
    );
  } catch (err) {
    console.log(
      '\n\nError.....Failed to retrieve template information.\n\n  ',
      err.message,
      '\n\n     ',
      err
    );
  }
})();
