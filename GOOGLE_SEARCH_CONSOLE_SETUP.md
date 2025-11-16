# Google Search Console Setup Guide

This guide will help you add your website to Google Search Console for better SEO tracking and management.

## Step 1: Access Google Search Console

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Sign in with your Google account
3. Click **"Add Property"** or **"Start Now"**

## Step 2: Add Your Website Property

1. Enter your website URL: `https://fortifyproductions.com` (or your actual domain)
2. Click **"Continue"**

## Step 3: Choose Verification Method

You have multiple options to verify ownership. Choose the one that's easiest for you:

### Option A: HTML Tag Verification (Recommended - Easiest)

1. Google will provide you with a meta tag that looks like:
   ```html
   <meta name="google-site-verification" content="YOUR_VERIFICATION_CODE_HERE" />
   ```

2. Add the verification code to your environment variables:
   - Open your `.env.local` file (or create it if it doesn't exist)
   - Add this line:
     ```
     NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=YOUR_VERIFICATION_CODE_HERE
     ```
   - Replace `YOUR_VERIFICATION_CODE_HERE` with the actual code from Google

3. Restart your Next.js development server:
   ```bash
   npm run dev
   ```

4. Deploy your changes to production

5. Go back to Google Search Console and click **"Verify"**

### Option B: HTML File Upload

1. In Google Search Console, choose **"HTML file upload"**
2. Download the HTML file (e.g., `google1234567890abcdef.html`)
3. Place the file in your `public/` directory
4. Deploy to production
5. Verify in Google Search Console

### Option C: DNS Record (Most Permanent)

1. In Google Search Console, choose **"Domain name provider"**
2. Google will give you a TXT record to add to your DNS
3. Add the TXT record to your domain's DNS settings
4. Wait a few minutes for DNS propagation
5. Click **"Verify"** in Google Search Console

## Step 4: After Verification

Once verified, you'll be able to:

- **Submit your sitemap**: Go to Sitemaps section and submit `https://fortifyproductions.com/sitemap.xml`
- **Monitor search performance**: See how your site appears in Google search results
- **Track indexing**: See which pages are indexed by Google
- **Identify issues**: Get notified of crawl errors, mobile usability issues, etc.
- **View search analytics**: See search queries, click-through rates, and impressions

## Step 5: Submit Your Sitemap

1. After verification, go to **"Sitemaps"** in the left sidebar
2. Enter: `sitemap.xml`
3. Click **"Submit"**

This will help Google discover and index all your pages faster.

## Quick Checklist

- [ ] Created/accessed Google Search Console account
- [ ] Added website property
- [ ] Chose verification method
- [ ] Completed verification
- [ ] Submitted sitemap (`sitemap.xml`)
- [ ] Checked for any initial errors or issues

## Environment Variables

Make sure your `.env.local` file includes:
```env
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=your_verification_code_here
```

## Need Help?

- [Google Search Console Help](https://support.google.com/webmasters)
- Verify your site is accessible and sitemap is working: `https://fortifyproductions.com/sitemap.xml`

