const excel = require('excel')
const template = require('./template')
const AUTH = require('./auth')
const nodemailer = require('nodemailer')
const async = require('async')

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: AUTH.user,
    pass: AUTH.password
  }
})

function sendEmail(mailOptions){
  return new Promise(function(resolve, reject){
    setTimeout(() => {
      resolve(transporter.sendMail(mailOptions))
    }, 60*1000)
  })
}

function getData(){

  excel('Temp_Cold_Emails.xlsx', async function(err, data){
    if(err)
      console.log(err)

    for(let row = 1; row < data.length; row++) {

      let name = data[row][1]
      let email = data[row][2]
      let company = data[row][0]

      let mailOptions = {
        from: AUTH.user,
        to: email,
        subject: `HN: Interning at ${company}`,
        text: template(name, company)
      }

      await sendEmail(mailOptions)

      console.log(`Emailed  ${name}  from  ${company}  at ${email}`)
    }
  })
}

getData()

/* template (<to>, <company>) */
