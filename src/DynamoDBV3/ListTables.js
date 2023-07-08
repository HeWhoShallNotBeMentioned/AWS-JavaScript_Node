import { DynamoDBClient, ListTablesCommand } from '@aws-sdk/client-dynamodb';

const ddbClient = new DynamoDBClient({ region: 'us-west-2' });

(async () => {
  const params = {};

  try {
    const response = await ddbClient.send(new ListTablesCommand(params));
    console.log('\n\nTables List.........\n\n', response.TableNames);
    return response.TableNames;
  } catch (err) {
    console.log('\n\nError............\n\n', err);
  }
})();
