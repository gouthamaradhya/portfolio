// app/api/contact/route.ts
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    const { email, message } = await request.json();

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    try {
        await transporter.sendMail({
            from: email,
            to: process.env.MY_EMAIL,
            subject: `New Contact Form Submission from ${email}`,
            text: message,
            html: `<p>You have a new contact form submission</p><p><strong>Email: </strong> ${email}</p><p><strong>Message: </strong> ${message}</p>`,
        });

        return NextResponse.json({ success: true }, { status: 200 });
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json({ success: false, error: 'Error sending email' }, { status: 500 });
    }
}
