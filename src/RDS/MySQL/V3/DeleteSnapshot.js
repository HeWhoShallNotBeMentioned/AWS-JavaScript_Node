import { RDSClient, DeleteDBSnapshotCommand } from '@aws-sdk/client-rds';
const client = new RDSClient({ region: 'us-west-2' });
(async () => {
  const input = {
    DBSnapshotIdentifier: 'melanie-snapshot',
  };

  try {
    const response = await client.send(new DeleteDBSnapshotCommand(input));
    console.log(
      `  Snapshot ${DBSnapshotIdentifier} Deleted----------------------- \n\n  `,
      response
    );
  } catch (err) {
    console.log('\n\nError.....\n\n', err.message, err, err.stack);
  }
})();
