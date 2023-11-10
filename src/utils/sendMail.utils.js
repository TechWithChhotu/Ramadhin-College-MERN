import nodemailer from "nodemailer";

// // async..await is not allowed in global scope, must use a wrapper
const sendEmail = async function (email, subject, message) {
  //   // create reusable transporter object using the default SMTP transport
  //   let transporter = nodemailer.createTransport({
  //     host: process.env.SMTP_HOST,
  //     port: process.env.SMTP_PORT,
  //     secure: false, // true for 465, false for other ports
  //     auth: {
  //       user: process.env.SMTP_USERNAME,
  //       pass: process.env.SMTP_PASSWORD,
  //     },
  //   });

  //   // send mail with defined transport object
  //   await transporter.sendMail({
  //     from: process.env.SMTP_FROM_EMAIL, // sender address
  //     to: email, // user email
  //     subject: subject, // Subject line
  //     html: message, // html body
  //   });
  // };

  /*=================>><<=================*/
  let testAccount = await nodemailer.createTestAccount();

  // connect with the smtp
  let transporter = await nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  let info = await transporter.sendMail({
    from: process.env.EMAIL, // sender address
    to: "chhotu2022@gmail.com", // list of receivers
    subject: subject, // Subject line
    text: message, // plain text body
    html: message, // html body
  });
};
export default sendEmail;
