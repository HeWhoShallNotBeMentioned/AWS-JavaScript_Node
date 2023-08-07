import { RDSClient, CreateDBInstanceCommand } from '@aws-sdk/client-rds';

const client = new RDSClient({ region: 'us-west-2' });
(async () => {
  const input = {
    DBName: 'testmysqlinstance',
    AllocatedStorage: 5,
    DBInstanceClass: 'db.t3.micro',
    DBInstanceIdentifier: 'test-mysql-instance',
    Engine: 'mysql',
    MasterUserPassword: 'secret99',
    MasterUsername: 'admin',
    Port: 3306,
    PubliclyAccessable: true,
    StorageType: 'gp2',
    EngineVersion: '8.0.33',
  };
  try {
    const response = await client.send(new CreateDBInstanceCommand(input));
    console.log('  Instance created----------------------- \n\n  ', response);
  } catch (err) {
    console.log('\n\nError.....\n\n', err.message, err, err.stack);
  }
})();
