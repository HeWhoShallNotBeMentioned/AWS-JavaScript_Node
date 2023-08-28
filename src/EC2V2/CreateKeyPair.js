const AWS = require('aws-sdk');
const fs = require('fs');

const ec2 = new AWS.EC2({ region: 'us-west-2' });

const params = {
  KeyName: 'chris-key-pair-test',
  KeyFormat: 'pem',
  KeyType: 'ed25519',
};

ec2.createKeyPair(params, function (err, data) {
  if (err) {
    console.error(err, err.stack);
  } else {
    console.log(`\n\nKey pair has been created.\n`);
    fs.writeFile('chris-key-pair-test', data.KeyMaterial, (err) => {
      if (err) {
        console.log(`\n    Failed to save the file.\n`);
      } else {
        console.log(`\n    File saved.\n`);
      }
    });
  }
});
