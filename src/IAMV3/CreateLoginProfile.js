import { IAMClient, CreateLoginProfileCommand } from '@aws-sdk/client-iam';

const client = new IAMClient();

(async () => {
  try {
    const params = {
      UserName: 'newuser2',
      Password: 'Stewy12#%&@',
      PasswordResetRequired: false,
    };

    const response = await client.send(new CreateLoginProfileCommand(params));
    console.log(response);
  } catch (err) {
    console.log(err);
    return data;
  }
})();
