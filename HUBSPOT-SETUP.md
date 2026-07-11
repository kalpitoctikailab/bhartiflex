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

**IMPORTANT:** Use `.env.local` for your secrets, NOT `.env`

1. Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

2. Edit `.env.local` and add your actual values:
   ```env
   # HubSpot Integration
   HUBSPOT_ACCESS_TOKEN=paste_your_actual_token_here
   
   # Google reCAPTCHA (if not already configured)
   NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_site_key
   RECAPTCHA_SECRET_KEY=your_secret_key
   ```

⚠️ **SECURITY WARNING:** 
- NEVER commit `.env` or `.env.local` files to git
- These files contain sensitive API keys
- They are already in `.gitignore`

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
4. Data is sent to HubSpot API with hidden field `leadStatus` (page name)
5. Contact is created/updated in HubSpot CRM with these fields:
   - **Email** (primary identifier)
   - **First Name**
   - **Last Name**
   - **Phone Number** (optional)
   - **Company** (if provided)
   - **Message** (requirements/project details)
   - **Lead Status** → Set to "NEW"
   - **Lead Source Page** → Hidden field showing which page submitted the form (e.g., "Contact Page" or "Product Page - CU Type")

### HubSpot Contact Properties Mapping:

| Form Field | HubSpot Property | Notes |
|------------|------------------|-------|
| firstName | firstname | Required |
| lastName | lastname | Optional |
| email | email | Required, unique identifier |
| phone | phone | Optional |
| companyName | company | Optional |
| requirements | message | Required |
| (hidden) leadStatus | lead_source_page | Custom property - page name |
| - | hs_lead_status | Always set to "NEW" |

## 🎯 What Happens in HubSpot

After form submission, you'll see:
- New contact created in **Contacts** section
- All form data captured in contact properties
- **Lead Status** set to "NEW" 
- **Lead Source Page** will show which page the form was submitted from (e.g., "Contact Page" or "Product Page - CU Type")
- Can set up **workflows** to auto-assign, send notifications, etc.
- Can create **deals** from these contacts
- Track all interactions in contact timeline

### Creating the Custom "Lead Source Page" Property

To capture the page name where the form was submitted, you need to create a custom property in HubSpot:

1. **Go to HubSpot Settings** (⚙️ icon)
2. Navigate to **Properties** (under Data Management)
3. Click **Create property**
4. **Configure the property:**
   - **Object type**: Contact
   - **Group**: Contact information
   - **Label**: Lead Source Page
   - **Internal name**: `lead_source_page` (IMPORTANT: Use exactly this name)
   - **Description**: "Page where the contact form was submitted"
   - **Field type**: Single-line text
5. Click **Create**

**Why this is needed:** The default `hs_lead_status` field only accepts predefined values like NEW, OPEN, IN_PROGRESS, etc. Our custom field `lead_source_page` will store the actual page name.

## 📊 Optional Custom Properties

You can add more properties to contacts by uncommenting these lines in `route.ts`:

```typescript
properties: {
  email: email,
  firstname: firstName,
  lastname: lastName || "",
  phone: phone || "",
  company: companyName || "",
  message: requirements,
  hs_lead_status: "NEW",
  lead_source_page: leadStatus || "Contact Page",
  // Uncomment these if needed:
  // lifecyclestage: "lead",
  // website: "bhartiflex.com",
}
```

### Available Lead Status Values:
If you want to manually change lead status in workflows, use these valid values:
- `NEW` - Default for new submissions
- `OPEN` - Contact has been opened/reviewed
- `IN_PROGRESS` - Working on the lead
- `OPEN_DEAL` - Deal has been created
- `UNQUALIFIED` - Not a good fit
- `ATTEMPTED_TO_CONTACT` - Tried to reach out
- `CONNECTED` - Successfully contacted
- `BAD_TIMING` - Not ready right now

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
