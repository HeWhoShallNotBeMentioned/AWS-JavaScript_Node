import { SESClient, SendTemplatedEmailCommand } from '@aws-sdk/client-ses';

const client = new SESClient({ region: 'us-west-2' });

(async () => {
  try {
    const input = {
      Source: 'cunderwoodmn@gmail.com',
      Destination: {
        ToAddresses: ['cunderwoodmn@gmail.com', 'cunderwoodmn@yahoo.com'],
      },
      ReplyToAddresses: ['cunderwoodmn@gmail.com'],

      Template: 'BeckettIsSleeping',
      TemplateData: '{"replace":"value"}',
    };

    const response = await client.send(new SendTemplatedEmailCommand(input));

    console.log('\n   Sent email with template ..\n\n\n       ', response);
  } catch (err) {
    console.log(
      '\n\nError.....Failed to send email with template.\n\n  ',
      err.message,
      '\n\n     ',
      err
    );
  }
})();
