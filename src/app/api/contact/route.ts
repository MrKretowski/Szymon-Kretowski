import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { email, message } = await request.json();

    // Create a transporter using your SMTP configuration
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === 'true', // true for port 465
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Define the email options
    const mailOptions = {
      from: `"Portfolio Contact" <${process.env.SMTP_FROM}>`, // sender address
      to: process.env.TARGET_EMAIL, // receiver
      subject: 'New Contact Form Submission',
      text: `From: ${email}\n\n${message}`, // plain text body
      html: `<p>From: <strong>${email}</strong></p><p>${message}</p>`, // HTML body
    };

    // Send the email
    const info = await transporter.sendMail(mailOptions);
    console.log('Message sent: %s', info.messageId);
    return NextResponse.json({ success: true });
  } catch (error) {
    // Instead of "any", determine the error message if possible.
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error('Error sending email:', errorMessage);
    return NextResponse.json({ success: false, error: errorMessage });
  }
}
