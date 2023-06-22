import { IAMClient, CreateGroupCommand } from '@aws-sdk/client-iam';

const client = new IAMClient();

(async () => {
  try {
    const params = {
      GroupName: 'V3SDKUserGroup',
    };

    const response = await client.send(new CreateGroupCommand(params));
    console.log(response);
  } catch (err) {
    console.log(error);
  }
})();
