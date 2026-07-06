# Google reCAPTCHA Setup Instructions

Google reCAPTCHA v2 has been integrated into all contact forms on the Bhartiflex website.

## Forms with reCAPTCHA:
1. **Contact Page** (`/contact`) - Main contact form
2. **Product Enquiry Forms** - Product-specific inquiry forms on each product detail page

## Setup Instructions:

### Step 1: Get reCAPTCHA Keys

1. Go to [Google reCAPTCHA Admin Console](https://www.google.com/recaptcha/admin)
2. Click on the **+** button to create a new site
3. Fill in the details:
   - **Label**: Bhartiflex Website (or any name you prefer)
   - **reCAPTCHA type**: Select **reCAPTCHA v2** → **"I'm not a robot" Checkbox**
   - **Domains**: Add your domains:
     - `localhost` (for local development)
     - `shroffprocesspumps.com`
     - `www.shroffprocesspumps.com`
     - Any other domains you use
4. Accept the reCAPTCHA Terms of Service
5. Click **Submit**
6. You'll receive:
   - **Site Key** (public key - visible to users)
   - **Secret Key** (private key - keep this secure!)

### Step 2: Add Keys to Environment Variables

1. Open the `.env.local` file in the root directory
2. Replace the placeholder values with your actual keys:

```bash
# Google reCAPTCHA v2 Keys
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_actual_site_key_here
RECAPTCHA_SECRET_KEY=your_actual_secret_key_here
```

**Important**: Never commit `.env.local` to Git! It's already in `.gitignore`.

### Step 3: Restart Development Server

After adding the keys, restart your Next.js development server:

```bash
npm run dev
```

### Step 4: Test the Forms

1. Go to the contact page or any product page
2. Fill out the form
3. Complete the reCAPTCHA challenge
4. Submit the form

## How It Works:

1. **User fills form**: User enters their details
2. **reCAPTCHA validation**: User checks "I'm not a robot"
3. **Token generation**: Google generates a token
4. **Form submission**: Token is sent with form data
5. **Server verification** (optional): Backend can verify the token with Google

## Server-Side Verification (Optional)

If you want to verify the reCAPTCHA token on the server, update your `/api/contact` route:

```typescript
// In your API route
const response = await fetch(
  `https://www.google.com/recaptcha/api/siteverify`,
  {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`,
  }
);

const data = await response.json();

if (!data.success) {
  return NextResponse.json(
    { ok: false, error: 'reCAPTCHA verification failed' },
    { status: 400 }
  );
}
```

## Troubleshooting:

**Issue**: reCAPTCHA not showing
- **Solution**: Check that `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` is set correctly in `.env.local`
- Make sure you restarted the development server after adding the key

**Issue**: "Invalid site key" error
- **Solution**: Verify the site key is correct
- Check that your domain is registered in the reCAPTCHA admin console

**Issue**: Form submits without reCAPTCHA
- **Solution**: This is by design during development. The form requires reCAPTCHA validation before the submit button is enabled.

## Production Deployment:

When deploying to production (Vercel, Netlify, etc.):

1. Add the environment variables in your hosting platform's dashboard
2. Make sure your production domain is added to the reCAPTCHA admin console
3. Deploy your application

## Security Notes:

- ✅ The site key (`NEXT_PUBLIC_*`) is safe to expose in client-side code
- ❌ Never expose the secret key in client-side code
- ✅ Always validate reCAPTCHA tokens on the server-side for production
- ✅ Keep `.env.local` out of version control (already in `.gitignore`)

## Support:

For issues or questions about reCAPTCHA integration, contact your developer or refer to the [official reCAPTCHA documentation](https://developers.google.com/recaptcha/docs/display).
