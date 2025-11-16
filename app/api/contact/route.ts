import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Send email to business
    const businessEmail = await resend.emails.send({
      from: "Fortify Productions <noreply@fortifyproductions.com>",
      to: ["fortifyproductions.gh@gmail.com"],
      subject: `Contact Form: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #000; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f5f5f5; padding: 20px; margin: 20px 0; border-radius: 5px;">
            <h3 style="color: #000; margin-top: 0;">Contact Information</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
          </div>

          <div style="background-color: #f5f5f5; padding: 20px; margin: 20px 0; border-radius: 5px;">
            <h3 style="color: #000; margin-top: 0;">Message</h3>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd;">
            <p style="color: #666; font-size: 14px;">
              This message was submitted through the Fortify Productions contact form.
            </p>
          </div>
        </div>
      `,
    });

    // Send confirmation email to client
    const clientEmail = await resend.emails.send({
      from: "Fortify Productions <noreply@fortifyproductions.com>",
      to: [email],
      subject: "Message Received - Fortify Productions",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #000; padding-bottom: 10px;">
            Message Received
          </h2>
          
          <p>Dear ${name},</p>
          
          <p>Thank you for reaching out to Fortify Productions! We've received your message and will get back to you within 24 hours.</p>
          
          <div style="background-color: #f5f5f5; padding: 20px; margin: 20px 0; border-radius: 5px;">
            <h3 style="color: #000; margin-top: 0;">Your Message</h3>
            <p><strong>Subject:</strong> ${subject}</p>
            <p style="white-space: pre-wrap;"><strong>Message:</strong><br>${message}</p>
          </div>

          <div style="background-color: #000; color: #fff; padding: 20px; margin: 20px 0; border-radius: 5px;">
            <h3 style="color: #fff; margin-top: 0;">Our Services</h3>
            <ul style="color: #fff;">
              <li>LCD Screen Rental</li>
              <li>Stage Lighting Services</li>
              <li>Audio Visual Setup</li>
              <li>Full Production Equipment</li>
              <li>Corporate Events</li>
              <li>Custom Equipment Packages</li>
            </ul>
          </div>

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd;">
            <p style="color: #666; font-size: 14px;">
              <strong>Contact Information:</strong><br>
              Phone: +233 24 945 8249<br>
              Email: fortifyproductions.gh@gmail.com<br>
              Location: Madina Market Road, Accra, Ghana
            </p>
          </div>
        </div>
      `,
    });

    return NextResponse.json(
      {
        message: "Message sent successfully",
        businessEmailId: businessEmail.data?.id,
        clientEmailId: clientEmail.data?.id,
      },
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
