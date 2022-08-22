const twilio = require('twilio');

const accountSid = 'ACce68b7e21060810357bc9e0f458792a2'; // Your Account SID from www.twilio.com/console
const authToken = 'bb8e9cdade6e78830d9c96cfb9ae57e2'; // Your Auth Token from www.twilio.com/console

const client = new twilio(accountSid, authToken);

client.messages
  .create({
    body: 'Hello from Node',
    to: '+17864737399', // Text this number
    from: '+13858538002', // From a valid Twilio number
  })
  .then((message) => console.log(message.sid))
  .catch((e) => console.log(e))

  