import nodemailer from 'nodemailer';
import config from '../config';
export const sendEmail = async (to: string, html: string) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: config.NODE_ENV === 'production', // true for port 465, false for other ports
    auth: {
      user: 'sujon.webdev@gmail.com',
      pass: 'npyz djgp qijt aacy',
    },
  });

  await transporter.sendMail({
    from: 'sujon.webdev@gmail.com', // sender address
    to, // list of receivers
    subject:
      'Change Password: Reset your password within 10 minutes by clicking on the link', // Subject line
    text: '', // plain text body
    html, // html body
  });
};
