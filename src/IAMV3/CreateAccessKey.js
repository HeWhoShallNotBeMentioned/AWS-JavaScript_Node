import { IAMClient, CreateAccessKeyCommand } from '@aws-sdk/client-iam';
(async () => {
  try {
    const client = new IAMClient();
    const params = {
      UserName: 'newuser2',
    };

    const response = await client.send(new CreateAccessKeyCommand(params));
    console.log(response);
  } catch (err) {
    console.log(err);
  }
})();
