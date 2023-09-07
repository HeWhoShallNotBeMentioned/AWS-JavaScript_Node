import { EC2Client, RunInstancesCommand } from '@aws-sdk/client-ec2';
const client = new EC2Client({ region: 'us-west-2' });
(async () => {
  try {
    const userData = `
#!/bin/bash
yum update -y 
yum install -y httpd
chkconfig httpd on
service httpd start
echo "<h1>Welcome to AWS with JavaScript Course</h1>" > /var/www/html/index.html
`;

    const userDataEnhanced = Buffer.from(userData).toString('base64');
    const input = {
      ImageId: 'ami-002c2b8d1f5b1eb47',
      MinCount: 1,
      MaxCount: 1,
      InstanceType: 't2.micro',
      KeyName: 'Elastic-Demo',
      SecurityGroups: ['launch-wizard-2'],
      UserData: userDataEnhanced,
      TagSpecifications: [
        {
          ResourceType: 'instance',
          Tags: [
            {
              Key: 'Purpose',
              Value: 'User Data Server',
            },
          ],
        },
      ],
    };
    const response = await client.send(new RunInstancesCommand(input));
    console.log('\n EC2 Instance Created\n\n\n       ', response);
  } catch (err) {
    console.log(
      '\n\nError.....EC2 Instance Creation Failed\n\n  ',
      err.message,
      '\n\n     ',
      err
    );
  }
})();
