import { DynamoDBClient, DeleteItemCommand } from '@aws-sdk/client-dynamodb';

const ddbClient = new DynamoDBClient({ region: 'us-west-2' });

(async () => {
  const params = {
    Key: {
      id: { N: '2' },
    },
    TableName: 'Employee',
  };
  try {
    const response = await ddbClient.send(new DeleteItemCommand(params));
    console.log('\n\nItem Deleted.........\n\n', response);
    return response;
  } catch (err) {
    console.log * ('\n\nError......\n\n', err);
  }
})();
