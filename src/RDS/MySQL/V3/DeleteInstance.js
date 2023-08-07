import { RDSClient, DeleteDBInstanceCommand } from '@aws-sdk/client-rds';
const client = new RDSClient({ region: 'us-west-2' });
(async () => {
  const input = {
    DBInstanceIdentifier: 'test-mysql-instance',
    SkipFinalSnapshot: false,
    FinalDBSnapshotIdentifier: 'test-mysql-instance-snapshot',
    DeleteAutomatedBackups: true,
  };

  try {
    const response = await client.send(new DeleteDBInstanceCommand(input));
    console.log('  Instance Deleted----------------------- \n\n  ', response);
  } catch (err) {
    console.log('\n\nError.....\n\n', err.message, err, err.stack);
  }
})();
