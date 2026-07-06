# reCAPTCHA "Invalid Key Type" Error - Troubleshooting Guide

## Error Message:
```
ERROR for site owner: Invalid key type
```

## Root Cause:
This error occurs when you're using **reCAPTCHA v3** or **Enterprise** keys with code designed for **reCAPTCHA v2**.

## How to Fix:

### Step 1: Verify Your Key Type

1. Go to: https://www.google.com/recaptcha/admin
2. Log in with your Google account
3. Look at your registered sites list
4. Check the "Type" column - it should say **"reCAPTCHA v2"** with **"Checkbox"**
5. If it says **"v3"** or **"Enterprise"** - that's the problem!

### Step 2: Create NEW reCAPTCHA v2 Keys

**Important**: You need to create a NEW site with v2 keys. You cannot convert v3 to v2.

1. Click the **+** button (top right) to register a new site
2. Fill in the form:

   **Label**: 
   ```
   Bhartiflex Website - v2
   ```

   **reCAPTCHA type**: 
   - ✅ Select **"reCAPTCHA v2"**
   - ✅ Then select **"I'm not a robot" Checkbox**
   - ❌ DO NOT select "reCAPTCHA v3"
   - ❌ DO NOT select "Invisible reCAPTCHA badge"

   **Domains**:
   ```
   localhost
   bhartiflex.vercel.app
   your-custom-domain.com
   ```
   (Add all domains where you'll use reCAPTCHA)

3. Accept the Terms of Service
4. Click **Submit**

### Step 3: Copy Your NEW Keys

After creating the site, you'll see:

```
Site Key (used in HTML code):
6Lxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

Secret Key (for communication between your server and reCAPTCHA):
6Lxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

**Copy both keys!**

### Step 4: Update Local Environment Variables

Open `d:\bhartiflex\.env.local` and update:

```env
# Google reCAPTCHA v2 Keys (CHECKBOX TYPE)
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=6Lxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
RECAPTCHA_SECRET_KEY=6Lxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

Replace the `6Lxxxx...` with your actual NEW v2 keys.

### Step 5: Update Vercel Environment Variables

1. Go to your Vercel dashboard: https://vercel.com/dashboard
2. Select your project (bhartiflex)
3. Click **Settings** tab
4. Click **Environment Variables** from the sidebar
5. For each variable:

   **Variable 1:**
   - Name: `NEXT_PUBLIC_RECAPTCHA_SITE_KEY`
   - Value: `6Lxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx` (your NEW v2 site key)
   - Environments: ✅ Production, ✅ Preview, ✅ Development
   - Click **Save**

   **Variable 2:**
   - Name: `RECAPTCHA_SECRET_KEY`
   - Value: `6Lxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx` (your NEW v2 secret key)
   - Environments: ✅ Production, ✅ Preview, ✅ Development
   - Click **Save**

6. **Delete old variables** (if they exist with same names)

### Step 6: Redeploy on Vercel

After updating environment variables:

1. Go to **Deployments** tab in Vercel
2. Find the latest deployment
3. Click the **⋯** (three dots) menu
4. Click **Redeploy**
5. ✅ Check **"Use existing Build Cache"** (faster)
6. Click **Redeploy**

OR simply push a new commit to trigger automatic deployment.

### Step 7: Verify the Fix

1. Wait for deployment to complete
2. Visit your live site: https://your-site.vercel.app/contact
3. Scroll to the contact form
4. You should see the reCAPTCHA checkbox appear
5. Click "I'm not a robot" - it should work without errors!

## Common Mistakes:

❌ **Using v3 keys with v2 code**
✅ Create NEW v2 "Checkbox" keys

❌ **Using "Invisible reCAPTCHA" type**
✅ Use "I'm not a robot" Checkbox type

❌ **Forgetting to add domain to reCAPTCHA admin**
✅ Add both localhost and your Vercel domain

❌ **Not redeploying after updating Vercel env vars**
✅ Always redeploy after changing environment variables

❌ **Using quotes around values in Vercel**
✅ No quotes needed in Vercel dashboard

❌ **Typo in environment variable names**
✅ Use exact names: `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` and `RECAPTCHA_SECRET_KEY`

## How to Verify Your Keys are v2:

Run this in your browser console on the reCAPTCHA admin page:

1. Go to: https://www.google.com/recaptcha/admin
2. Click on your site
3. Look for text that says: **"reCAPTCHA v2"** and **"Checkbox"**

## Still Not Working?

### Check Browser Console:

1. Open your deployed site
2. Press F12 to open Developer Tools
3. Go to **Console** tab
4. Look for any reCAPTCHA errors
5. Share the exact error message

### Check Network Tab:

1. Open Developer Tools (F12)
2. Go to **Network** tab
3. Try submitting the form
4. Look for failed requests to `google.com/recaptcha`
5. Check the response

### Verify Environment Variables Loaded:

Add this temporarily to check if variables are loaded:

```typescript
console.log('Site Key:', process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY);
```

If it shows `undefined`, the environment variable isn't loaded.

## Need Help?

1. Screenshot your reCAPTCHA admin panel (hide the keys)
2. Screenshot the exact error message
3. Check if the site key starts with `6L` (both v2 and v3 start with this)
4. Share your Vercel environment variables setup (without the actual keys)

## Summary Checklist:

- [ ] Created NEW reCAPTCHA v2 site with **"I'm not a robot" Checkbox**
- [ ] Copied BOTH keys (Site Key and Secret Key)
- [ ] Updated `.env.local` file locally
- [ ] Updated Vercel environment variables (both keys)
- [ ] Added correct domains to reCAPTCHA admin (localhost + Vercel domain)
- [ ] Redeployed on Vercel after updating env vars
- [ ] Tested on live site - checkbox appears and works
- [ ] No "Invalid key type" error

Once you complete all steps, the error should be resolved! 🎉
