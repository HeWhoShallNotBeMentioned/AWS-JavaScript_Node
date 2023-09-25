import { DynamoDBClient, CreateTableCommand } from '@aws-sdk/client-dynamodb';

const ddbClient = new DynamoDBClient({ region: 'us-west-2' });

const params = {
  TableName: 'Employee',
  KeySchema: [{ AttributeName: 'id', KeyType: 'HASH' }],
  AttributeDefinitions: [{ AttributeName: 'id', AttributeType: 'N' }],
  ProvisionedThroughput: { ReadCapacityUnits: 3, WriteCapacityUnits: 3 },
};

export const handler = async (event) => {
  const data = await ddbClient.send(new CreateTableCommand(params));

  console.log('Table is created.', data);
  return data;
};
