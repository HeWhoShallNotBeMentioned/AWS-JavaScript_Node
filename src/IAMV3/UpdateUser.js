import { IAMClient, UpdateUserCommand } from '@aws-sdk/client-iam';

const iamClient = new IAMClient();

(async () => {
  const params = {
    // UpdateUserRequest
    NewUserName: 'newuser2', // required
    UserName: 'Pfffffttttt',
  };
  try {
    const results = await iamClient.send(new UpdateUserCommand(params));
    console.log('user--------------', results);
  } catch (err) {
    console.log('Error', err);
  }
})();
