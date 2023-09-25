import { DynamoDBClient, PutItemCommand } from '@aws-sdk/client-dynamodb';

const ddbClient = new DynamoDBClient({ region: 'us-west-2' });

const params = {
  TableName: 'Employee',
  Item: { id: { N: '1' }, emp_name: { S: 'Smithson' } },
};

export const handler = async (event) => {
  try {
    const data = await ddbClient.send(new PutItemCommand(params));

    console.log('Data is inserted.', data);
    return data;
  } catch (err) {
    console.error('\n\nerror=========', err.message, '\n\n', err);
  }
};
