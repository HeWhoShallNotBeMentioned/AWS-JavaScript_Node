import { DynamoDBClient, PutItemCommand } from '@aws-sdk/client-dynamodb';

const ddbClient = new DynamoDBClient({ region: 'us-west-2' });

(async () => {
  const params = {
    TableName: 'Employee',
    Item: {
      id: {
        N: '3',
      },
      emp_name: { S: 'Smithson' },
    },
  };

  try {
    const response = await ddbClient.send(new PutItemCommand(params));
    console.log('\n\nItem Insterted.........\n\n', response);
    return response;
  } catch (err) {
    console.log('\n\nError............\n\n', err);
  }
})();
