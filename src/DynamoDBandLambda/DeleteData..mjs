import { DynamoDBClient, DeleteItemCommand } from '@aws-sdk/client-dynamodb';

const ddbClient = new DynamoDBClient({ region: 'us-west-2' });

const params = { TableName: 'Employee', Key: { id: { N: '2' } } };

export const handler = async (event) => {
  try {
    const data = await ddbClient.send(new DeleteItemCommand(params));

    console.log('Data is deleted.', data);
    return data;
  } catch (err) {
    console.error(
      '\n\nerror========= Data was not deleted\n\n ',
      err.message,
      '\n\n',
      err
    );
  }
};
