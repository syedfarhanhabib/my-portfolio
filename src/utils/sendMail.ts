'use server';
import { Resend } from 'resend';
import { validateString } from './utils';

const resend = new Resend(process.env.RESEND_API_KEY);
export const sendMail = async (formData: FormData) => {
    const email = formData.get("senderEmail");
    const name = formData.get("senderName");
    const message = formData.get("message");

    if (!validateString(email, 500)) {
        return {
            error: "Invalid sender email",
        };
    }
    if (!validateString(message, 5000)) {
        return {
            error: "Invalid message",
        };
    }

    resend.emails.send({
        from: 'onboarding@resend.dev',
        to: 'syedfarhandesigns@gmail.com',
        subject: `Message from ${name} Email Address: ${email}`,
        text: message,
    })
}


