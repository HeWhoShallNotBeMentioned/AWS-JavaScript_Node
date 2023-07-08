import { DynamoDBClient, UpdateItemCommand } from '@aws-sdk/client-dynamodb';
const ddbClient = new DynamoDBClient({ region: 'us-west-2' });

(async () => {
  const params = {
    TableName: 'Employee',
    Key: {
      id: { N: '1' },
    },
    UpdateExpression: 'set emp_name = :n',
    ExpressionAttributeValues: {
      ':n': { S: 'Melanie' },
    },
    ReturnValues: 'UPDATED_NEW',
  };

  try {
    const response = await ddbClient.send(new UpdateItemCommand(params));
    console.log('\n\nItem Insterted.........\n\n', response);
    return response;
  } catch (err) {
    console.log('\n\nError............\n\n', err);
  }
})();
