const nodemailer = require('nodemailer')
const sgMail = require('@sendgrid/mail')
const sendEmailEthereal = async (req, res) => {
  const testAccount = await nodemailer.createTestAccount()

  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
      user: 'noah46@ethereal.email',
      pass: 'M4EHW4VPaTQzhjR4xJ',
    },
  })
  let info = await transporter.sendMail({
    from: '"Fred Foo 👻" <patidarankit@0734.com>', // sender address
    to: 'bar@example.com, baz@example.com', // list of receivers
    subject: 'Hello ✔', // Subject line
    text: 'Hello world?', // plain text body
    html: '<b>Hi ankit in this world?</b>', // html body
  })
  res.json(info)
}

const sendEmail = async (req, res) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)
  const msg = {
    to: 'patidarankit0734@gmail.com', // Change to your recipient
    from: 'patiankit6555@gmail.com', // Change to your verified sender
    subject: 'Sending with SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  }
  const info = await sgMail.send(msg)
  res.json(info)
}

module.exports = sendEmail
