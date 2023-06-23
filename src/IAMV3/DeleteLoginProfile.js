import { IAMClient, DeleteLoginProfileCommand } from '@aws-sdk/client-iam';

(async () => {
  try {
    const client = new IAMClient();
    const params = {
      UserName: 'newuser2',
    };

    const response = await client.send(new DeleteLoginProfileCommand(params));
    console.log(response);
  } catch (err) {
    console.log(err);
  }
})();
