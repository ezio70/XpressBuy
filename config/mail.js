import nodemailer from'nodemailer';

const MAIL = async({message,email}) =>{
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user : process.env.EMAIL,
          pass : process.env.PASS
        },
      });
      
      
      var mailOptions = {
        from: process.env.EMAIL,
        to: email,
        subject: 'FROM XPRESSBUY',
        text: message
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
}

export default MAIL;
