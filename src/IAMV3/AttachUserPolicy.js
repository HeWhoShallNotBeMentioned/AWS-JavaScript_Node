import { IAMClient, AttachUserPolicyCommand } from '@aws-sdk/client-iam';

const client = new IAMClient();

(async () => {
  const params = {
    UserName: 'newuser2',
    PolicyArn: 'arn:aws:iam::342445434384:policy/V3FullAccessPolicy',
  };

  const response = await client.send(new AttachUserPolicyCommand(params));
  console.log('response', response);
  try {
  } catch (err) {
    console.log(err);
  }
})();
