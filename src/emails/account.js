const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'amiryehu8@gmail.com',
        subject: 'Themks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'amiryehu8@gmail.com',
        subject: 'Sorry to see you go',
        text: `GoodBye, ${name}. can you tell us why you go out.`
    })
}


module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}