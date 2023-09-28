import { LambdaClient, GetFunctionCommand } from '@aws-sdk/client-lambda';

const lambdaClient = new LambdaClient({ region: 'us-west-2' });

(async () => {
  const params = {
    FunctionName: 'DynamoLambda',
  };

  try {
    const response = await lambdaClient.send(new GetFunctionCommand(params));
    console.log(`\n\nSUCCESS!!!\n\n  Function found.\n\n`, response);
  } catch (err) {
    console.log(
      `\n\nError.....Function not found. \n\n`,
      err.message,
      '  \n\n\n  ',
      err
    );
  }
})();
