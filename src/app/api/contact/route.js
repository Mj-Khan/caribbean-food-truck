import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    
    // Basic validation
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required fields' },
        { status: 400 }
      );
    }

    // In a real application, you would:
    // 1. Validate the email format
    // 2. Add server-side CAPTCHA verification
    // 3. Send an email using AWS SES, SendGrid, NodeMailer, etc.
    // 4. Or save to a database
    
    // For this mock implementation, we'll just simulate a slight delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Simulate success
    return NextResponse.json(
      { success: true, message: 'Message sent successfully!' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact API Error:', error);
    return NextResponse.json(
      { error: 'Internal server error while processing request' },
      { status: 500 }
    );
  }
}
