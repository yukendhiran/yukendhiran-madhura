import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  const request = await req.json();

  const transporter = nodemailer.createTransport({
    host: process.env.NEXT_PUBLIC_EMAIL_HOST,
    port: 587,
    secure: false,
    auth: {
      user: process.env.NEXT_PUBLIC_EMAIL_USER,
      pass: process.env.NEXT_PUBLIC_EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: request.email,
    to: process.env.NEXT_PUBLIC_EMAIL_SEND_TO,
    subject: "Customer Sends Message",
    text: "attention",
    html: `
    <div><strong>Name:</strong> ${request.fullName}</div>
    <br/>
    <div><strong>Email:</strong> ${request.email}</div>
    <br/>
    <div><strong>Phone:</strong> ${request.phone}</div>
    <br/>
    <div><strong>Message:</strong> ${request.message}</div>
    <br/>
    <p>Sent from:
      ${request.email}</p>`,
  };

  return await transporter
    .sendMail(mailOptions)
    .then((response) => {
      return NextResponse.json(
        { error: false, emailSent: true, errors: [], response },
        { status: 200 }
      );
    })
    .catch((error) => {
      return NextResponse.json(
        { error: true, emailSent: false, errors: [error] },
        { status: 500 }
      );
    });
}
