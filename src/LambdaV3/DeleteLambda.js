import { LambdaClient, DeleteFunctionCommand } from '@aws-sdk/client-lambda';

const lambdaClient = new LambdaClient({ region: 'us-west-2' });

(async () => {
  const params = {
    FunctionName: 'HelloLambda',
  };

  try {
    const response = await lambdaClient.send(new DeleteFunctionCommand(params));
    console.log(`\n\nSUCCESS!!!\n\n  Function deleted.\n\n`, response);
  } catch (err) {
    console.log(
      `\n\nError.....Function not deleted. \n\n`,
      err.message,
      '  \n\n\n  ',
      err
    );
  }
})();
