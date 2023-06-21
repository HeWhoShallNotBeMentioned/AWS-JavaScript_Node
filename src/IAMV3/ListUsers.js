import { IAMClient, ListUsersCommand } from '@aws-sdk/client-iam';
const iamClient = new IAMClient();

(async () => {
  const params = {};
  try {
    const { Users } = await iamClient.send(new ListUsersCommand(params));
    //console.log('All users--------------', Users);
    Users.forEach(function (user) {
      console.log('\n' + 'User : ' + user.UserName + '  Arn : ' + user.Arn);
    });
    return Users;
  } catch (err) {
    console.log('Error', err);
  }
})();
