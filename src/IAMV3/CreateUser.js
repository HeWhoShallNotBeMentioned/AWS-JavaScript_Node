// const {
//   IAMClient,
//   CreateUserCommand,
//   GetUserCommand,
// } = require('@aws-sdk/client-iam');

import {
  //Needs "type": "module", in package.json to work
  IAMClient,
  CreateUserCommand,
  GetUserCommand,
} from '@aws-sdk/client-iam';

const iamClient = new IAMClient();
(async () => {
  const params = {
    UserName: 'newuser3',
  };

  try {
    const data = await iamClient.send(new GetUserCommand(params));
    console.log('User already exists', data.User);
    return data;
  } catch (err) {
    try {
      const data = await iamClient.send(new CreateUserCommand(params));
      console.log('User is created', data);
      return data;
    } catch (err) {
      console.log('ERROR', err);
    }
  }
})();
