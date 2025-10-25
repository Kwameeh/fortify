# Booking Form & Email Setup with Resend

## Overview

This project now includes a comprehensive booking form system with Resend email integration for both booking requests and contact form submissions.

## Features Implemented

### 1. Booking Form (`/booking`)

- **Location**: `app/(website)/booking/page.tsx`
- **Component**: `components/forms/BookingForm.tsx`
- **API Route**: `app/api/booking/route.ts`

**Form Fields:**

- Personal Information (Name, Email, Phone)
- Event Details (Type, Service, Date, Time, Duration, Guest Count)
- Location & Budget
- Special Requirements

### 2. Contact Form (Updated)

- **Location**: `app/(website)/contact/page.tsx`
- **API Route**: `app/api/contact/route.ts`

**Form Fields:**

- Name, Email, Subject, Message

### 3. Email Integration

Both forms use Resend for email delivery:

- **Business notifications**: Sent to `fortifyproductions.gh@gmail.com`
- **Client confirmations**: Sent to the client's email
- **Professional HTML templates** with company branding

## Setup Instructions

### 1. Environment Variables

Add the following to your `.env.local` file:

```env
RESEND_API_KEY=your_resend_api_key_here
```

### 2. Resend Configuration

1. Sign up for a Resend account at [resend.com](https://resend.com)
2. Get your API key from the Resend dashboard
3. Add the API key to your environment variables
4. Configure your domain in Resend (optional but recommended for production)

### 3. Domain Configuration (Optional)

For production, configure your domain in Resend:

1. Go to Resend dashboard → Domains
2. Add your domain (e.g., `fortifyproductions.com`)
3. Update the `from` field in the API routes to use your domain

## File Structure

```
├── app/
│   ├── api/
│   │   ├── booking/
│   │   │   └── route.ts          # Booking form API
│   │   └── contact/
│   │       └── route.ts          # Contact form API
│   └── (website)/
│       ├── booking/
│       │   └── page.tsx          # Booking page
│       └── contact/
│           └── page.tsx         # Updated contact page
├── components/
│   └── forms/
│       └── BookingForm.tsx      # Booking form component
└── BOOKING_SETUP.md             # This documentation
```

## Email Templates

### Booking Confirmation Email

- Professional HTML template
- Event details summary
- Next steps information
- Contact information

### Contact Confirmation Email

- Message acknowledgment
- Service overview
- Contact information

### Business Notification Emails

- Complete form data
- Client contact information
- Professional formatting

## Form Validation

### Client-Side Validation

- Required field validation
- Email format validation
- Real-time form state management

### Server-Side Validation

- API route validation
- Error handling and responses
- Success/failure status codes

## Styling

- Consistent with existing design system
- Responsive design for all devices
- Professional form styling
- Status message styling (success/error)

## Testing

### Local Development

1. Set up environment variables
2. Start the development server: `npm run dev`
3. Navigate to `/booking` or `/contact`
4. Submit test forms
5. Check email delivery in Resend dashboard

### Production Deployment

1. Configure domain in Resend
2. Update environment variables
3. Deploy to production
4. Test email delivery

## Troubleshooting

### Common Issues

1. **Email not sending**: Check Resend API key and domain configuration
2. **Form not submitting**: Check browser console for errors
3. **Styling issues**: Ensure Tailwind CSS is properly configured

### Debug Steps

1. Check browser network tab for API calls
2. Check server logs for errors
3. Verify Resend dashboard for email status
4. Test with different email addresses

## Security Considerations

- Form validation on both client and server
- Rate limiting (consider implementing)
- Input sanitization
- CORS configuration (if needed)

## Future Enhancements

- Form analytics and tracking
- Advanced email templates
- Multi-language support
- Integration with CRM systems
- Automated follow-up sequences
