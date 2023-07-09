import { DynamoDBClient, DeleteTableCommand } from '@aws-sdk/client-dynamodb';

const ddbClient = new DynamoDBClient({ region: 'us-west-2' });

(async () => {
  const params = {
    TableName: 'Employee',
  };
  try {
    const response = await ddbClient.send(new DeleteTableCommand(params));
    console.log('\n\nTable Deleted\n\n', response);
  } catch (err) {
    console.log('\n\nError.................\n\n', err);
  }
})();
