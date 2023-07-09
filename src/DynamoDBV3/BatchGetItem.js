import { DynamoDBClient, BatchGetItemCommand } from '@aws-sdk/client-dynamodb';

const ddbClient = new DynamoDBClient({ region: 'us-west-2' });

(async () => {
  const params = {
    RequestItems: {
      Employee: {
        Keys: [
          {
            id: {
              N: '8',
            },
          },
          {
            id: {
              N: '10',
            },
          },
          {
            id: {
              N: '1',
            },
          },
        ],
      },
      employee: {
        Keys: [
          {
            id: {
              S: '2',
            },
          },
          {
            id: {
              S: '4',
            },
          },
          {
            id: {
              S: '1',
            },
          },
        ],
      },
    },
  };
  try {
    const response = await ddbClient.send(new BatchGetItemCommand(params));
    console.log('\n\nItems successfully retrieved\n\n', response.Responses);
  } catch (err) {
    console.log('\n\nError...............\n\n', err);
  }
})();
