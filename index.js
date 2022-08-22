const express = require('express');
const bodyParser = require('body-parser');

const twilio = require('twilio');
require('dotenv').config();

var app = express();

app.use(bodyParser.urlencoded({extended: false}))

//Send message after recieving message
app.post('/message', function (req, res){
    console.log(req.body)
    var msgFrom = req.body.From
    var msgBody = req.body.Body

    res.send(`
    <Response>
        <Message>
            Hello from ${msgFrom}, you said: ${msgBody}
        </Message>
    </Response>

    `);
});

app.listen(3000, function(){
    console.log("App listening port 3000")
});

//Send message
// const accountSid = process.env.accountSid; // Your Account SID from www.twilio.com/console
// const authToken = process.env.authToken; // Your Auth Token from www.twilio.com/console

// const client = new twilio(accountSid, authToken);

// client.messages
//   .create({
//     body: 'Hello from Node',
//     to: '+17864737399', // Text this number
//     from: '+13858538002', // From a valid Twilio number
//   })
//   .then((message) => console.log(message.sid))
//   .catch((e) => console.log(e))

