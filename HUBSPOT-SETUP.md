# HubSpot Integration Setup Guide

## ✅ Completed Tasks

1. **Merged main branch into kalpit branch** - All latest changes are now in kalpit
2. **Replaced SMTP email system with HubSpot API** - Contact forms now submit directly to HubSpot CRM

## 🔧 Required Setup Steps

### Step 1: Create HubSpot Private App

1. **Log into your HubSpot account**
2. **Navigate to Settings** (gear icon in top right)
3. Go to **Integrations** → **Private Apps**
4. Click **Create a private app**
5. **Configure the app:**
   - Name: `Bhartiflex Contact Form Integration`
   - Description: `API integration for Bhartiflex website contact forms`
6. **Go to the Scopes tab** and select:
   - ✅ `crm.objects.contacts.write` (Create and update contacts)
   - ✅ `crm.objects.contacts.read` (Optional: Read contacts)
7. Click **Create app**
8. **Copy the Access Token** (you'll only see this once!)

### Step 2: Add Environment Variable

Add the following to your `.env.local` file:

```env
# HubSpot Integration
HUBSPOT_ACCESS_TOKEN=your_access_token_here

# Google reCAPTCHA (already configured)
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_site_key
RECAPTCHA_SECRET_KEY=your_secret_key
```

### Step 3: Optional - Remove Old SMTP Dependencies

Since you're no longer using email, you can optionally remove nodemailer:

```bash
npm uninstall nodemailer
```

And remove these environment variables from `.env.local` (if they exist):
```
SMTP_HOST
SMTP_PORT
SMTP_USER
SMTP_PASSWORD
SMTP_FROM_EMAIL
```

## 📋 How It Works

### Contact Form Submission Flow:

1. User fills out contact form
2. Form validates required fields (firstName, email, requirements)
3. reCAPTCHA is verified
4. Data is sent to HubSpot API
5. Contact is created/updated in HubSpot CRM with these fields:
   - **Email** (primary identifier)
   - **First Name**
   - **Last Name**
   - **Company** (if provided)
   - **Message** (requirements/project details)

### HubSpot Contact Properties Mapping:

| Form Field | HubSpot Property |
|------------|------------------|
| firstName | firstname |
| lastName | lastname |
| email | email |
| companyName | company |
| requirements | message |

## 🎯 What Happens in HubSpot

After form submission, you'll see:
- New contact created in **Contacts** section
- All form data captured in contact properties
- Can set up **workflows** to auto-assign, send notifications, etc.
- Can create **deals** from these contacts
- Track all interactions in contact timeline

## 📊 Optional Custom Properties

You can add more properties to contacts by uncommenting these lines in `route.ts`:

```typescript
properties: {
  email: email,
  firstname: firstName,
  lastname: lastName || "",
  company: companyName || "",
  message: requirements,
  // Uncomment these if needed:
  // hs_lead_status: "NEW",
  // lifecyclestage: "lead",
  // website: "bhartiflex.com",
  // phone: "(phone number if collected)",
}
```

## 🔍 Testing

1. **Test the integration:**
   - Fill out contact form on website
   - Check HubSpot Contacts → Should see new contact
   - Verify all fields are populated correctly

2. **Check for errors:**
   - Open browser console
   - Submit form
   - Check for any error messages
   - Server logs will show HubSpot API responses

## 🚨 Common Issues & Solutions

### Issue: "HubSpot integration not configured"
**Solution:** Make sure `HUBSPOT_ACCESS_TOKEN` is added to `.env.local`

### Issue: "Contact already exists"
**Solution:** This is normal! The API will recognize duplicate emails and the code handles this gracefully.

### Issue: "Unauthorized" (401 error)
**Solution:** 
- Check that your access token is correct
- Verify the Private App has `crm.objects.contacts.write` scope
- Make sure token isn't expired

### Issue: "Missing required property"
**Solution:** HubSpot may require certain default properties. Check your HubSpot contact settings.

## 📱 Forms Using This API

All these forms now submit to HubSpot:

1. **Contact Page** (`/contact`) - General inquiries
2. **Product Pages** - Product-specific inquiries
3. Both forms use the same API route: `/api/contact`

## 🔐 Security Features

✅ Input validation (email format, required fields)
✅ reCAPTCHA verification
✅ Server-side API calls (token never exposed to client)
✅ Error handling for failed submissions
✅ Sanitized data before sending to HubSpot

## 📈 Next Steps (Optional Enhancements)

1. **Set up HubSpot Workflows:**
   - Auto-assign contacts to sales rep
   - Send internal notification emails
   - Add contacts to nurture sequences

2. **Create Custom Contact Properties:**
   - Product interest
   - DN Size requested
   - Lead source (always "Website Form")

3. **Set up HubSpot Forms API** (alternative approach):
   - Create form in HubSpot UI
   - Use Form API instead of Contacts API
   - Benefits: More HubSpot features auto-enabled

4. **Add Analytics:**
   - Track form submission sources
   - UTM parameters for marketing attribution

## 📞 Support

If you need help:
- HubSpot API docs: https://developers.hubspot.com/docs/api/crm/contacts
- Private Apps guide: https://developers.hubspot.com/docs/api/private-apps

---

**Status:** ✅ Ready to deploy after adding `HUBSPOT_ACCESS_TOKEN` to environment variables
