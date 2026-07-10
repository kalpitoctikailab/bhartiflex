# SMTP Email Setup Guide

The contact form now sends emails to `info@shroffprocesspumps.com` using SMTP.

## Email Features:

✅ Sends to: `info@shroffprocesspumps.com`  
✅ Professional HTML email template  
✅ Reply-To set to customer's email  
✅ reCAPTCHA verification before sending  
✅ Includes all form fields  

## Setup Instructions:

### Option 1: Using Gmail (Recommended for Testing)

1. **Enable 2-Factor Authentication on Gmail:**
   - Go to: https://myaccount.google.com/security
   - Enable "2-Step Verification"

2. **Generate App Password:**
   - Go to: https://myaccount.google.com/apppasswords
   - Select app: "Mail"
   - Select device: "Other" → Type "Bhartiflex Website"
   - Click "Generate"
   - Copy the 16-character password (e.g., `abcd efgh ijkl mnop`)

3. **Update `.env.local` file:**

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-gmail@gmail.com
SMTP_PASSWORD=abcdefghijklmnop
SMTP_FROM_EMAIL=noreply@shroffprocesspumps.com
```

Replace:
- `your-gmail@gmail.com` with your actual Gmail address
- `abcdefghijklmnop` with your 16-character app password (no spaces)

### Option 2: Using Company Email Server

If you have a company email server (e.g., cPanel, Plesk, Microsoft 365):

1. **Get SMTP Details from Your Email Provider:**
   - SMTP Host (e.g., `mail.shroffprocesspumps.com`)
   - SMTP Port (usually 587 or 465)
   - Username (usually your full email)
   - Password

2. **Update `.env.local` file:**

```env
SMTP_HOST=mail.shroffprocesspumps.com
SMTP_PORT=587
SMTP_USER=info@shroffprocesspumps.com
SMTP_PASSWORD=your-email-password
SMTP_FROM_EMAIL=noreply@shroffprocesspumps.com
```

### Option 3: Using Outlook/Hotmail

```env
SMTP_HOST=smtp-mail.outlook.com
SMTP_PORT=587
SMTP_USER=your-email@outlook.com
SMTP_PASSWORD=your-password
SMTP_FROM_EMAIL=noreply@shroffprocesspumps.com
```

### Option 4: Using SendGrid (Recommended for Production)

SendGrid offers 100 free emails per day.

1. **Sign up:** https://sendgrid.com/
2. **Create API Key:**
   - Go to Settings → API Keys
   - Create API Key
   - Copy the key

3. **Update `.env.local`:**

```env
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_USER=apikey
SMTP_PASSWORD=SG.xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
SMTP_FROM_EMAIL=noreply@shroffprocesspumps.com
```

Note: `SMTP_USER` is literally the word "apikey"

## Vercel Deployment:

### Add Environment Variables to Vercel:

1. Go to: Vercel Dashboard → Your Project → Settings → Environment Variables

2. Add these variables:

```
SMTP_HOST = smtp.gmail.com
SMTP_PORT = 587
SMTP_USER = your-email@gmail.com
SMTP_PASSWORD = your-app-password
SMTP_FROM_EMAIL = noreply@shroffprocesspumps.com
RECAPTCHA_SECRET_KEY = your-secret-key
```

3. Apply to: ✅ Production, ✅ Preview, ✅ Development

4. **Redeploy** your application

## Testing:

### Local Testing:

1. Start development server:
```bash
npm run dev
```

2. Go to: http://localhost:3000/contact

3. Fill out the form and submit

4. Check `info@shroffprocesspumps.com` inbox

### Production Testing:

1. Deploy to Vercel
2. Visit your live site
3. Fill out contact form
4. Check inbox

## Email Template Preview:

The email sent will look like this:

```
Subject: New Contact Form Submission - John Doe

┌──────────────────────────────────────┐
│  New Contact Form Submission         │
│  Bhartiflex Website                  │
└──────────────────────────────────────┘

Name: John Doe
Email: john@example.com
Company: Acme Industries

Requirements:
We need 10 rubber expansion joints for our
chemical plant...

---
This email was sent from the Bhartiflex contact form
© 2026 Shroff Process Pumps
```

## Troubleshooting:

### Error: "Invalid login"

**Cause:** Wrong username or password

**Solutions:**
- Double-check SMTP_USER and SMTP_PASSWORD
- For Gmail: Use App Password, not regular password
- Make sure 2FA is enabled on Gmail

### Error: "Connection timeout"

**Cause:** Wrong SMTP host or port

**Solutions:**
- Verify SMTP_HOST is correct
- Try port 587 (TLS) or 465 (SSL)
- Check if firewall is blocking SMTP ports

### Error: "Self signed certificate"

**Cause:** SSL certificate issues

**Solution:** Add this to transporter config (for development only):
```typescript
tls: { rejectUnauthorized: false }
```

### Emails going to spam

**Solutions:**
- Use a real "From" email address from your domain
- Set up SPF, DKIM, and DMARC records
- Use a professional SMTP service (SendGrid, AWS SES)
- Avoid spam trigger words in email content

### Not receiving emails

**Checklist:**
- [ ] Check spam folder
- [ ] Verify `info@shroffprocesspumps.com` exists
- [ ] Check SMTP credentials are correct
- [ ] Verify Vercel environment variables
- [ ] Check Vercel function logs for errors
- [ ] Test with a different email provider

## Gmail Limits:

- **Free Gmail:** 500 emails per day
- **Google Workspace:** 2,000 emails per day

For high-volume sites, use:
- SendGrid (100 free/day, then paid)
- AWS SES (62,000 free emails/month)
- Mailgun (5,000 free emails/month)

## Security Notes:

🔒 **Never commit `.env.local` to Git** (it's in `.gitignore`)  
🔒 **Use App Passwords for Gmail** (not your main password)  
🔒 **Store credentials in Vercel Environment Variables** for production  
🔒 **Enable reCAPTCHA** to prevent spam  
🔒 **Rotate passwords regularly**  

## Production Recommendations:

For production, use a dedicated email service:

1. **SendGrid** - Best for developers, 100 free emails/day
2. **AWS SES** - Best for high volume, 62,000 free/month
3. **Mailgun** - Good alternative, 5,000 free/month
4. **Postmark** - Best deliverability, paid only

These services provide:
- Better deliverability
- Email analytics
- Bounce handling
- Dedicated IPs
- No daily limits

## Need Help?

1. Check Vercel function logs:
   - Vercel Dashboard → Deployments → Click deployment → Functions tab

2. Test SMTP credentials locally:
```bash
npm run dev
# Check terminal for error messages
```

3. Common issues:
   - Wrong credentials = Check username/password
   - Timeout = Check host/port
   - Spam = Use professional SMTP service
   - Not sending = Check Vercel env vars

## Support:

For issues with:
- Gmail: https://support.google.com/mail
- SendGrid: https://docs.sendgrid.com
- Nodemailer: https://nodemailer.com/about/

---

Once configured, the contact form will send professional emails to `info@shroffprocesspumps.com` with all customer details! 🎉
