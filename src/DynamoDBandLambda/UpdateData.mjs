import { DynamoDBClient, UpdateItemCommand } from '@aws-sdk/client-dynamodb';

const ddbClient = new DynamoDBClient({ region: 'us-west-2' });

const params = {
  TableName: 'Employee',
  ReturnValues: 'ALL_NEW',
  Key: {
    id: {
      N: '1',
    },
  },
  UpdateExpression: 'set emp_name=:n',
  ExpressionAttributeValues: { ':n': { S: 'updated' } },
};

export const handler = async (event) => {
  try {
    const data = await ddbClient.send(new UpdateItemCommand(params));

    console.log('Data is updated.', data);
    return data;
  } catch (err) {
    console.error(
      '\n\nerror========= data failed to update. \n\n\n     ',
      err.message,
      '\n\n',
      err
    );
  }
};
