import { SESClient, VerifyEmailAddressCommand } from '@aws-sdk/client-ses';

const client = new SESClient({ region: 'us-west-2' });

(async () => {
  try {
    const input = {
      EmailAddress: 'cunderwoodmn@gmail.com',
    };

    const response = await client.send(new VerifyEmailAddressCommand(input));

    console.log('\n   Email Verified!\n\n\n       ', response);
  } catch (err) {
    console.log(
      '\n\nError.....Failed to verify email address.\n\n  ',
      err.message,
      '\n\n     ',
      err
    );
  }
})();
