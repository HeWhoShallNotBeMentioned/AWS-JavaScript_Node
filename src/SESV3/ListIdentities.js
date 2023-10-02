import { SESClient, ListIdentitiesCommand } from '@aws-sdk/client-ses';

const client = new SESClient({ region: 'us-west-2' });

(async () => {
  try {
    const input = {
      IdentityType: 'EmailAddress',
    };

    const response = await client.send(new ListIdentitiesCommand(input));

    console.log('\n   List of Identities...\n\n\n       ', response);
  } catch (err) {
    console.log(
      '\n\nError.....Failed to retrieve identities.\n\n  ',
      err.message,
      '\n\n     ',
      err
    );
  }
})();
