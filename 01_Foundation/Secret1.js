const accountSid = 'zuhvu87468KFYHJ0987-jmbhjhbhvfhh234BGUJ';
const authToken = 'nbkgjk-9jhj9876-87tnmjjk-knjbb-234-JHHYU-JBjhhmb';
const Twilio = require('twilio');
const client = new Twilio(accountSid, authToken);
client.messages
  .create({
    to: '+1987654323876',
    from: '+1234598765487',
    body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
  })
  .then((message) => console.log(message.sid));
