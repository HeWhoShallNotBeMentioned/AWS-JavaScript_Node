import { EC2Client, CreateKeyPairCommand } from '@aws-sdk/client-ec2';
import fs from 'fs';

const client = new EC2Client({ region: 'us-west-2' });

(async () => {
  try {
    const input = {
      KeyName: 'EC2-Project',
      DryRun: false,
      KeyType: 'ed25519',
      TagSpecifications: [
        {
          ResourceType: 'key-pair',
          Tags: [{ Key: 'project', Value: 'EC2 class' }],
        },
      ],
      KeyFormat: 'pem',
    };

    const response = await client.send(new CreateKeyPairCommand(input));
    fs.writeFile('ec2-project', response.KeyMaterial, (err) => {
      if (err) {
        console.log(`\n    Failed to save the file.\n`);
      } else {
        console.log(`\n    File saved.\n`);
      }
    });
    console.log('Key pair data\n\n\n    ', response);
  } catch (err) {
    console.log('\n\nError.....\n\n', err.message, '\n\n', err);
  }
})();
