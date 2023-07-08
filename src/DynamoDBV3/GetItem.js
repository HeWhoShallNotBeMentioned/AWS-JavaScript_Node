import { DynamoDBClient, GetItemCommand } from '@aws-sdk/client-dynamodb';

const ddbClient = new DynamoDBClient({ region: 'us-west-2' });

(async () => {
  const params = {
    TableName: 'Employee',
    Key: {
      id: {
        N: '1',
      },
    },
  };

  try {
    const response = await ddbClient.send(new GetItemCommand(params));
    console.log('\n\nItem Retrieved.........\n\n', response);
    return response;
  } catch (err) {
    console.log('\n\nError............\n\n', err);
  }
})();
