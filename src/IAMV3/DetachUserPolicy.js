import { IAMClient, DetachUserPolicyCommand } from '@aws-sdk/client-iam';

const client = new IAMClient();

(async () => {
  const params = {
    UserName: 'newuser2',
    PolicyArn: 'arn:aws:iam::342445434384:policy/V3FullAccessPolicy',
  };

  try {
    const response = await client.send(new DetachUserPolicyCommand(params));
    console.log('Policy is detached', response);
  } catch (err) {
    console.log(err);
  }
})();
