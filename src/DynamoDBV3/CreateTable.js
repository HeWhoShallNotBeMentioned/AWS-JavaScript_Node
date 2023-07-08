import { DynamoDBClient, CreateTableCommand } from '@aws-sdk/client-dynamodb';

const ddbClient = new DynamoDBClient({ region: 'us-west-2' });

(async () => {
  const params = {
    TableName: 'Employee',
    KeySchema: [{ AttributeName: 'id', KeyType: 'HASH' }],
    AttributeDefinitions: [{ AttributeName: 'id', AttributeType: 'N' }],
    ProvisionedThroughput: { ReadCapacityUnits: 3, WriteCapacityUnits: 3 },
  };

  try {
    const response = await ddbClient.send(new CreateTableCommand(params));
    console.log('\n\nSuccess....\n\n', response);
    return response;
  } catch (err) {
    console.log('\n\nError.....\n\n', err);
  }
})();
