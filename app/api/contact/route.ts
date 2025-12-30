import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { neon } from '@neondatabase/serverless';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validate input
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Store in database (if DATABASE_URL is configured)
    if (process.env.DATABASE_URL) {
      try {
        const sql = neon(process.env.DATABASE_URL);

        // Create table if it doesn't exist
        await sql`
          CREATE TABLE IF NOT EXISTS contact_submissions (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL,
            subject VARCHAR(255) NOT NULL,
            message TEXT NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
          )
        `;

        // Insert submission
        await sql`
          INSERT INTO contact_submissions (name, email, subject, message)
          VALUES (${name}, ${email}, ${subject}, ${message})
        `;
      } catch (dbError) {
        console.error('Database error:', dbError);
        // Continue even if database fails - email is more important
      }
    }

    // Send email (if RESEND_API_KEY is configured)
    if (process.env.RESEND_API_KEY) {
      try {
        await resend.emails.send({
          from: 'Portfolio Contact <noreply@hype-us.com>',
          to: 'douglasrosborneii@gmail.com',
          replyTo: email,
          subject: `Portfolio Contact: ${subject}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #3b82f6;">New Contact Form Submission</h2>
              <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Subject:</strong> ${subject}</p>
              </div>
              <div style="background-color: #ffffff; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
                <p><strong>Message:</strong></p>
                <p style="white-space: pre-wrap;">${message}</p>
              </div>
              <p style="color: #6b7280; font-size: 12px; margin-top: 20px;">
                This message was sent from your portfolio contact form.
              </p>
            </div>
          `,
        });
      } catch (emailError) {
        console.error('Email error:', emailError);
        return NextResponse.json(
          { error: 'Failed to send email. Please try again.' },
          { status: 500 }
        );
      }
    }

    return NextResponse.json(
      { message: 'Message sent successfully!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
