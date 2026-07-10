import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Email configuration
const EMAIL_CONFIG = {
  to: "info@shroffprocesspumps.com",
  from: process.env.SMTP_FROM_EMAIL || "noreply@shroffprocesspumps.com",
  companyName: "Bhartiflex - Shroff Process Pumps",
};

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, companyName, requirements, recaptchaToken } = body;

    // Validate required fields
    if (!firstName || !email || !requirements) {
      return NextResponse.json(
        { ok: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { ok: false, error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Verify reCAPTCHA (optional but recommended)
    if (recaptchaToken && process.env.RECAPTCHA_SECRET_KEY) {
      const recaptchaResponse = await fetch(
        `https://www.google.com/recaptcha/api/siteverify`,
        {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`,
        }
      );

      const recaptchaData = await recaptchaResponse.json();
      if (!recaptchaData.success) {
        return NextResponse.json(
          { ok: false, error: "reCAPTCHA verification failed" },
          { status: 400 }
        );
      }
    }

    // Create SMTP transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: process.env.SMTP_PORT === "465", // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // Prepare email content
    const fullName = lastName ? `${firstName} ${lastName}` : firstName;
    const emailSubject = `New Contact Form Submission - ${fullName}`;
    
    const emailHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #E8460A 0%, #E31E24 100%); color: white; padding: 20px; text-align: center; }
          .content { background: #f9f9f9; padding: 20px; border: 1px solid #ddd; }
          .field { margin-bottom: 15px; }
          .label { font-weight: bold; color: #001B4D; }
          .value { margin-top: 5px; padding: 10px; background: white; border-left: 3px solid #E8460A; }
          .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2>New Contact Form Submission</h2>
            <p>Bhartiflex Website</p>
          </div>
          <div class="content">
            <div class="field">
              <div class="label">Name:</div>
              <div class="value">${fullName}</div>
            </div>
            <div class="field">
              <div class="label">Email:</div>
              <div class="value"><a href="mailto:${email}">${email}</a></div>
            </div>
            ${companyName ? `
            <div class="field">
              <div class="label">Company:</div>
              <div class="value">${companyName}</div>
            </div>
            ` : ''}
            <div class="field">
              <div class="label">Requirements:</div>
              <div class="value">${requirements.replace(/\n/g, '<br>')}</div>
            </div>
          </div>
          <div class="footer">
            <p>This email was sent from the Bhartiflex contact form</p>
            <p>&copy; ${new Date().getFullYear()} Shroff Process Pumps</p>
          </div>
        </div>
      </body>
      </html>
    `;

    const emailText = `
New Contact Form Submission

Name: ${fullName}
Email: ${email}
${companyName ? `Company: ${companyName}\n` : ''}
Requirements:
${requirements}

---
This email was sent from the Bhartiflex contact form
© ${new Date().getFullYear()} Shroff Process Pumps
    `;

    // Send email
    await transporter.sendMail({
      from: `"${EMAIL_CONFIG.companyName}" <${EMAIL_CONFIG.from}>`,
      to: EMAIL_CONFIG.to,
      replyTo: email, // User can reply directly to the customer
      subject: emailSubject,
      text: emailText,
      html: emailHtml,
    });

    return NextResponse.json({ ok: true, message: "Email sent successfully" });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { 
        ok: false, 
        error: error instanceof Error ? error.message : "Failed to send email" 
      },
      { status: 500 }
    );
  }
}
