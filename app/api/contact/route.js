import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, company, email, phone, message } = body;

    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    /* 
      TODO: Configure your email credentials here or in .env.local
      
      Example .env.local:
      SMTP_HOST=smtp.gmail.com
      SMTP_PORT=587
      SMTP_USER=your_actual_email@gmail.com
      SMTP_PASS=your_app_password
    */
    
    // Using dummy transport for now so the form works in development
    // In production, you would use standard SMTP credentials
    const isProduction = process.env.NODE_ENV === "production";
    
    // We use a dummy test account for dev if no env vars are set
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.ethereal.email", // Placeholder
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: process.env.SMTP_SECURE === "true", 
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: process.env.SMTP_USER || '"SpectraTech Website" <no-reply@spectratech.com>',
      to: "info.spectratechsolution@gmail.com",
      subject: `New Contact Form Submission from ${name}`,
      text: `
Name: ${name}
Company: ${company || 'N/A'}
Email: ${email}
Phone/WhatsApp: ${phone}

Message:
${message}
      `,
      html: `
<h3>New Contact Form Submission</h3>
<p><strong>Name:</strong> ${name}</p>
<p><strong>Company:</strong> ${company || 'N/A'}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Phone/WhatsApp:</strong> ${phone}</p>
<br/>
<p><strong>Message:</strong></p>
<p>${message.replace(/\n/g, '<br/>')}</p>
      `,
    };

    // If we have actual credentials, send the email
    if (process.env.SMTP_USER) {
      await transporter.sendMail(mailOptions);
    } else {
      console.log("No SMTP_USER configured. Simulating successful email send in development.");
      console.log(mailOptions);
    }

    return NextResponse.json(
      { message: "Message sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending contact email:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
