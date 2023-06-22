import { IAMClient, AttachGroupPolicyCommand } from '@aws-sdk/client-iam';

const client = new IAMClient();
(async () => {
  try {
    const params = {
      GroupName: 'V3SDKUserGroup',
      PolicyArn: 'arn:aws:iam::342445434384:policy/V3FullAccessPolicy',
    };

    const response = await client.send(new AttachGroupPolicyCommand(params));
    console.log(response);
  } catch (err) {
    console.log(err);
  }
})();
