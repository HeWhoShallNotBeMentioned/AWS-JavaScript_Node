import { IAMClient, ListPoliciesCommand } from '@aws-sdk/client-iam';

const client = new IAMClient();

(async () => {
  try {
    const params = {
      Scope: 'All',
      OnlyAttached: false,
      MaxItems: Number('200'),
    };

    const response = await client.send(new ListPoliciesCommand(params));
    console.log(response);
  } catch (err) {
    console.log('ERROR', err);
  }
})();
