import { IAMClient, AddUserToGroupCommand } from '@aws-sdk/client-iam';
const client = new IAMClient();
(async () => {
  try {
    const params = {
      GroupName: 'V3SDKUserGroup',
      UserName: 'newuser3',
    };

    const response = await client.send(new AddUserToGroupCommand(params));
    console.log(response);
  } catch (err) {
    console.log(err);
  }
})();
