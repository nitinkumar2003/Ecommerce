import nodemailer from 'nodemailer'
import path from 'path'
import ejs from 'ejs'
import { fileURLToPath } from 'url'

const sendEmail=async(options)=>{
    const transportar=nodemailer.createTransport({
        host:process.env.SMTP_HOST,
        port:parseInt(process.env.SPTP_PORT || "587"),
        service:process.env.SMTP_SERVICE,
        auth:{
            user:process.env.SMTP_MAIL,
            pass:process.env.SMTP_PASSWORD,
        }
    });

    const {email,subject,template,data}=options
    const _filename=fileURLToPath(import.meta.url);
    const _dirname=path.dirname(_filename);

    const templatePath=path.join(_dirname,"../emails",template);
    const html=await ejs.renderFile(templatePath,data);
    const mailOptions={
        from:process.env.SMTP_MAIL,
        to:email,
        subject,
        html
    }
    await transportar.sendMail(mailOptions)
}
export default sendEmail;