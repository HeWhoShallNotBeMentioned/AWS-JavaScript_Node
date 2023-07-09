// BatchWriteItemCommand can be used to put or delete items.
import {
  DynamoDBClient,
  BatchWriteItemCommand,
} from '@aws-sdk/client-dynamodb';

const ddbClient = new DynamoDBClient({ region: 'us-west-2' });

(async () => {
  const params = {
    RequestItems: {
      Employee: [
        {
          PutRequest: {
            Item: {
              id: { N: '10' },
              emp_name: { S: 'Beckett' },
            },
          },
        },
        {
          PutRequest: {
            Item: {
              id: { N: '9' },
              emp_name: { S: 'Lily' },
            },
          },
        },
        {
          DeleteRequest: {
            Key: {
              id: { N: '4' },
            },
          },
        },
      ],
    },
  };
  try {
    const response = await ddbClient.send(new BatchWriteItemCommand(params));
    console.log('\n\nItems successfully written\n\n', response);
  } catch (err) {
    console.log('\n\nError................\n\n', err);
  }
})();
