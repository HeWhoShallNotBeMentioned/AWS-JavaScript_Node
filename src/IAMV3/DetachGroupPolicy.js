import { IAMClient, DetachGroupPolicyCommand } from '@aws-sdk/client-iam'; // ES Modules import
(async () => {
  try {
    const client = new IAMClient();
    const params = {
      GroupName: 'V3SDKUserGroup',
      PolicyArn: 'arn:aws:iam::342445434384:policy/V3FullAccessPolicy',
    };

    const response = await client.send(new DetachGroupPolicyCommand(params));
    console.log(response);
  } catch (err) {
    console.log(err);
  }
})();
