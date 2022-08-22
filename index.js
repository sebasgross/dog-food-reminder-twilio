const twilio = require('twilio');

const accountSid = process.env.accountSid; // Your Account SID from www.twilio.com/console
const authToken = process.env.authToken; // Your Auth Token from www.twilio.com/console

const client = new twilio(accountSid, authToken);

client.messages
  .create({
    body: 'Hello from Node',
    to: '+17864737399', // Text this number
    from: '+13858538002', // From a valid Twilio number
  })
  .then((message) => console.log(message.sid))
  .catch((e) => console.log(e))

