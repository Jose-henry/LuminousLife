// src/app/api/subscribe/route.ts
import { NextResponse } from 'next/server';
import { subscribeToMailchimp } from '@/utils/subscribe';

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json({ message: 'Email is required' }, { status: 400 });
    }

    await subscribeToMailchimp(email);

    return NextResponse.json({ message: 'Successfully subscribed' });
  } catch (error: any) {
    // Map specific Mailchimp errors to HTTP status codes
    let status = 500; // Default to server error

    if (error.message === 'Email already subscribed.') {
      status = 409; // Conflict
    } else if (error.message === 'Invalid email address.') {
      status = 400; // Bad Request
    } else if (error.message === 'Unauthorized: Invalid API key.') {
      status = 401; // Unauthorized
    }

    return NextResponse.json({ message: error.message }, { status });
  }
}
