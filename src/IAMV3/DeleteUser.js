import { IAMClient, DeleteUserCommand } from '@aws-sdk/client-iam';

const client = new IAMClient();

(async () => {
  try {
    const params = {
      UserName: 'newuser2',
    };

    const response = await client.send(new DeleteUserCommand(params));
    console.log(response);
  } catch (err) {
    console.log(err);
  }
})();
