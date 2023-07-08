import { DynamoDBClient, DescribeTableCommand } from '@aws-sdk/client-dynamodb';

const ddbClient = new DynamoDBClient({ region: 'us-west-2' });

(async () => {
  const params = { TableName: 'Employee' };

  try {
    const response = await ddbClient.send(new DescribeTableCommand(params));
    console.log('\n\nTables List.........\n\n', response);
    return response;
  } catch (err) {
    console.log('\n\nError............\n\n', err);
  }
})();
