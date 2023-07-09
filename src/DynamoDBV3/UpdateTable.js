import { DynamoDBClient, UpdateTableCommand } from '@aws-sdk/client-dynamodb';

const ddbClient = new DynamoDBClient({ region: 'us-west-2' });

(async () => {
  const params = {
    TableName: 'Employee',
    ProvisionedThroughput: {
      ReadCapacityUnits: 1,
      WriteCapacityUnits: 1,
    },
  };
  try {
    const response = await ddbClient.send(new UpdateTableCommand(params));
    console.log('\n\nTable Updated\n\n', response);
  } catch (err) {
    console.log('\n\nError.................\n\n', err);
  }
})();
