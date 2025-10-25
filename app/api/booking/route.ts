import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      name,
      email,
      phone,
      service,
      eventDate,
      eventTime,
      duration,
      location,
      budget,
      guestCount,
      specialRequirements,
      eventType,
    } = body;

    // Validate required fields
    if (
      !name ||
      !email ||
      !phone ||
      !service ||
      !eventDate ||
      !eventTime ||
      !duration ||
      !location ||
      !guestCount ||
      !eventType
    ) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Send email to business
    const businessEmail = await resend.emails.send({
      from: "Fortify Productions <noreply@fortifyproductions.com>",
      to: ["fortifyproductions.gh@gmail.com"],
      subject: `New Booking Request - ${eventType} on ${eventDate}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #000; padding-bottom: 10px;">
            New Booking Request
          </h2>
          
          <div style="background-color: #f5f5f5; padding: 20px; margin: 20px 0; border-radius: 5px;">
            <h3 style="color: #000; margin-top: 0;">Event Details</h3>
            <p><strong>Event Type:</strong> ${eventType}</p>
            <p><strong>Service:</strong> ${service}</p>
            <p><strong>Date:</strong> ${eventDate}</p>
            <p><strong>Time:</strong> ${eventTime}</p>
            <p><strong>Duration:</strong> ${duration}</p>
            <p><strong>Location:</strong> ${location}</p>
            <p><strong>Guest Count:</strong> ${guestCount}</p>
            <p><strong>Budget:</strong> ${budget || "Not specified"}</p>
          </div>

          <div style="background-color: #f5f5f5; padding: 20px; margin: 20px 0; border-radius: 5px;">
            <h3 style="color: #000; margin-top: 0;">Client Information</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
          </div>

          ${
            specialRequirements
              ? `
          <div style="background-color: #f5f5f5; padding: 20px; margin: 20px 0; border-radius: 5px;">
            <h3 style="color: #000; margin-top: 0;">Special Requirements</h3>
            <p>${specialRequirements}</p>
          </div>
          `
              : ""
          }

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd;">
            <p style="color: #666; font-size: 14px;">
              This booking request was submitted through the Fortify Productions website.
            </p>
          </div>
        </div>
      `,
    });

    // Send confirmation email to client
    const clientEmail = await resend.emails.send({
      from: "Fortify Productions <noreply@fortifyproductions.com>",
      to: [email],
      subject: "Booking Request Received - Fortify Productions",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #000; padding-bottom: 10px;">
            Booking Request Received
          </h2>
          
          <p>Dear ${name},</p>
          
          <p>Thank you for your booking request! We've received your details and will get back to you within 24 hours to discuss your ${eventType} event.</p>
          
          <div style="background-color: #f5f5f5; padding: 20px; margin: 20px 0; border-radius: 5px;">
            <h3 style="color: #000; margin-top: 0;">Your Event Details</h3>
            <p><strong>Event Type:</strong> ${eventType}</p>
            <p><strong>Service:</strong> ${service}</p>
            <p><strong>Date:</strong> ${eventDate}</p>
            <p><strong>Time:</strong> ${eventTime}</p>
            <p><strong>Duration:</strong> ${duration}</p>
            <p><strong>Location:</strong> ${location}</p>
            <p><strong>Guest Count:</strong> ${guestCount}</p>
          </div>

          <div style="background-color: #000; color: #fff; padding: 20px; margin: 20px 0; border-radius: 5px;">
            <h3 style="color: #fff; margin-top: 0;">What's Next?</h3>
            <ul style="color: #fff;">
              <li>We'll review your requirements and prepare a customized quote</li>
              <li>Our team will contact you to discuss your vision in detail</li>
              <li>We'll provide a detailed proposal with pricing and timeline</li>
              <li>Once approved, we'll secure your date and begin planning</li>
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
        message: "Booking request submitted successfully",
        businessEmailId: businessEmail.data?.id,
        clientEmailId: clientEmail.data?.id,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending booking email:", error);
    return NextResponse.json(
      { error: "Failed to send booking request" },
      { status: 500 }
    );
  }
}
