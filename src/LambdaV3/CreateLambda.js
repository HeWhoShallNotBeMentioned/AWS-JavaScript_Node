import { LambdaClient, CreateFunctionCommand } from '@aws-sdk/client-lambda';

const lambdaClient = new LambdaClient({ region: 'us-west-2' });

(async () => {
  const params = {
    Code: {
      S3Bucket: 'testingbucket2clu',
      S3Key: 'createlambda.zip',
    },
    FunctionName: 'HelloLambda',
    Runtime: 'nodejs18.x',
    Role: 'arn:aws:iam::342445434384:role/JavaScriptLambdaRole',
    Handler: 'index.handler',
    Timeout: 900,
  };

  try {
    const response = await lambdaClient.send(new CreateFunctionCommand(params));
    console.log(`\n\nSUCCESS!!!\n\n  Function Created.\n\n`, response);
  } catch (err) {
    console.log(
      `\n\nError.....Function not created successfully. \n\n`,
      err.message,
      '  \n\n\n  ',
      err
    );
  }
})();
