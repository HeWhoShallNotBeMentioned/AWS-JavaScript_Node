import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';

const client = new SESClient({ region: 'us-west-2' });

(async () => {
  try {
    const input = {
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

    const response = await client.send(new SendEmailCommand(input));

    console.log('\n   Sent plain  email  ..\n\n\n       ', response);
  } catch (err) {
    console.log(
      '\n\nError.....Failed to send plain text email.\n\n  ',
      err.message,
      '\n\n     ',
      err
    );
  }
})();
