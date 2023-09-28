import { IAMClient, CreateRoleCommand } from '@aws-sdk/client-iam';

const client = new IAMClient({ region: 'us-west-2' });

(async () => {
  const role_policy = {
    Version: '2012-10-17',
    Statement: [
      {
        Sid: '',
        Effect: 'Allow',
        Principal: { Service: 'lambda.amazonaws.com' },
        Action: 'sts:AssumeRole',
      },
    ],
  };

  const params = {
    AssumeRolePolicyDocument: JSON.stringify(role_policy),
    RoleName: 'JavaScriptLambdaRole',
  };

  try {
    const response = await client.send(new CreateRoleCommand(params));
    console.log('\n\nRole created. \n\n       ', response);
  } catch (err) {
    console.log(
      '\n\n    Error.....IAM Role not created\n\n\n    ',
      err.message,
      '\n\n\n ',
      err
    );
  }
})();
