import { DynamoDBClient, GetItemCommand } from '@aws-sdk/client-dynamodb';

const ddbClient = new DynamoDBClient({ region: 'us-west-2' });

const params = {
  TableName: 'Employee',
  Key: {
    id: {
      N: '1',
    },
  },
};

export const handler = async (event) => {
  try {
    const data = await ddbClient.send(new GetItemCommand(params));

    console.log('Data is retrieved.', data);
    return data;
  } catch (err) {
    console.error('\n\nerror=========', err.message, '\n\n', err);
  }
};
