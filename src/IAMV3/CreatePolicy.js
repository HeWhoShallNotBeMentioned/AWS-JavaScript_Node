import { IAMClient, CreatePolicyCommand } from '@aws-sdk/client-iam'; // ES Modules import
const iamClient = new IAMClient();

(async () => {
  const policy_document = {
    Version: '2012-10-17',
    Statement: [{ Effect: 'Allow', Action: '*', Resource: '*' }],
  };
  const params = {
    PolicyName: 'V3FullAccessPolicy',
    PolicyDocument: JSON.stringify(policy_document),
    Description: 'Rule for testing policy creation in sdk V3',
    Tags: [
      {
        Key: 'Dirty',
        Value: 'Butt',
      },
    ],
  };
  try {
    const response = await iamClient.send(new CreatePolicyCommand(params));
    console.log(response);
  } catch (err) {
    console.log(err);
  }
})();
