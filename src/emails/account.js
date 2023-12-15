// const api_key = "b59440887043547dc29f82e3bad9ffa7-07f37fca-d98a5def";
// var domain = "sandboxe10c711f14a44e0b890e9b875467b28d.mailgun.org";
// var mailgun = require("mailgun-js")({ apiKey: api_key, domain: domain });

// var data = {
//   from: "nithis@sandboxe10c711f14a44e0b890e9b875467b28d.mailgun.org",
//   to: "nithis2804@gmail.com",
//   subject: "Hello",
//   text: "Testing some Mailgun awesomeness!",
// };
// console.log(mailgun);
// mailgun.messages().send(data, function (error, body) {
//   console.log(body);
//   console.log(error);
// });

const api_key = "b59440887043547dc29f82e3bad9ffa7-07f37fca-d98a5def";
//const api_key = process.env.SENDGRID_API_KEY;
var domain = "sandboxe10c711f14a44e0b890e9b875467b28d.mailgun.org";
var mailgun = require("mailgun-js")({ apiKey: api_key, domain: domain });

var data = {
  from: "nithis@sandboxe10c711f14a44e0b890e9b875467b28d.mailgun.org",
  to: "nithis2804@gmail.com",
  subject: "Hello",
  text: "Testing some Mailgun awesomeness!",
};

const sendWelcomeEmail = (email, name) => {
  mailgun.messages().send({
    from: "nithis@sandboxe10c711f14a44e0b890e9b875467b28d.mailgun.org",
    to: email,
    subject: "Hello",
    text: "Welcome to the app " + name + ".",
  });
};

const sendCancelationEmail = (email, name) => {
  mailgun.messages().send({
    from: "nithis@sandboxe10c711f14a44e0b890e9b875467b28d.mailgun.org",
    to: email,
    subject: "Thank you",
    text: "Sorry to see you go" + name + ".",
  });
};
module.exports = { sendWelcomeEmail, sendCancelationEmail };
