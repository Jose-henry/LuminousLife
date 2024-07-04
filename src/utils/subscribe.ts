'use server';
// src/utils/subscribe.ts
import fetch from 'node-fetch';
import nodemailer from 'nodemailer';

export async function subscribeToMailchimp(email: string): Promise<void> {
  const { MAILCHIMP_API_KEY, MAILCHIMP_AUDIENCE_ID } = process.env;

  if (!MAILCHIMP_API_KEY || !MAILCHIMP_AUDIENCE_ID) {
    throw new Error('Mailchimp API Key or Audience ID is not defined in the environment variables');
  }

  const data = {
    email_address: email,
    status: 'subscribed',
  };

  const response = await fetch(`https://us13.api.mailchimp.com/3.0/lists/${MAILCHIMP_AUDIENCE_ID}/members`, {
    method: 'POST',
    headers: {
      'Authorization': `apikey ${MAILCHIMP_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const errorData = await response.json();
    if (errorData.title === 'Member Exists') {
      throw new Error('Email already subscribed.');
    } else if (errorData.title === 'Invalid Resource') {
      throw new Error('Invalid email address.');
    } else if (errorData.detail.includes('API Key')) {
      throw new Error('Unauthorized: Invalid API key.');
    }
    throw new Error(errorData.detail || 'Failed to subscribe to Mailchimp');
  }

  // Send a welcome email after successful subscription
  await sendWelcomeEmail(email);
}

async function sendWelcomeEmail(email: string) {
  const { EMAIL_USER, EMAIL_PASS } = process.env;

  if (!EMAIL_USER || !EMAIL_PASS) {
    throw new Error('Email credentials are not defined in environment variables');
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail', // You can change this to any email service you prefer
    auth: {
      user: EMAIL_USER,
      pass: EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"Luminous Life Foundation" <${EMAIL_USER}>`, // Use display name with email
    to: email,
    subject: 'Welcome to Our Newsletter!',
    text: 'Thank you for subscribing to our newsletter. Stay tuned for updates!',
    html: `<p>Dear Subscriber,</p>
           <p>Thank you for subscribing to our newsletter at Luminous Life Foundation. We are thrilled to have you on board!</p>
           <p>Stay tuned for the latest updates and insights on our projects and initiatives.</p>
           <p>Best regards,<br/>The Luminous Life Foundation Team</p>`,
  };

  await transporter.sendMail(mailOptions);
}
