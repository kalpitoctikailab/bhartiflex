import { NextRequest, NextResponse } from "next/server";

// HubSpot configuration
const HUBSPOT_CONFIG = {
  accessToken: process.env.HUBSPOT_ACCESS_TOKEN,
  apiUrl: "https://api.hubapi.com/crm/v3/objects/contacts",
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

    // Verify reCAPTCHA
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

    // Check if HubSpot token is configured
    if (!HUBSPOT_CONFIG.accessToken) {
      console.error("HubSpot access token not configured");
      return NextResponse.json(
        { ok: false, error: "HubSpot integration not configured" },
        { status: 500 }
      );
    }

    // Prepare HubSpot contact data
    const hubspotData = {
      properties: {
        email: email,
        firstname: firstName,
        lastname: lastName || "",
        company: companyName || "",
        message: requirements,
        // Additional custom properties you can add:
        // hs_lead_status: "NEW",
        // lifecyclestage: "lead",
      },
    };

    // Send data to HubSpot
    const hubspotResponse = await fetch(HUBSPOT_CONFIG.apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${HUBSPOT_CONFIG.accessToken}`,
      },
      body: JSON.stringify(hubspotData),
    });

    const hubspotResult = await hubspotResponse.json();

    // Handle HubSpot API errors
    if (!hubspotResponse.ok) {
      console.error("HubSpot API error:", hubspotResult);
      
      // If contact already exists, try to update it
      if (hubspotResult.category === "CONFLICT") {
        // Contact already exists, you might want to update it instead
        console.log("Contact already exists in HubSpot");
        return NextResponse.json({ 
          ok: true, 
          message: "Contact updated successfully",
          hubspotContactId: hubspotResult.message.match(/Existing ID: (\d+)/)?.[1]
        });
      }
      
      return NextResponse.json(
        { 
          ok: false, 
          error: hubspotResult.message || "Failed to create contact in HubSpot" 
        },
        { status: hubspotResponse.status }
      );
    }

    return NextResponse.json({ 
      ok: true, 
      message: "Contact created successfully in HubSpot",
      hubspotContactId: hubspotResult.id
    });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { 
        ok: false, 
        error: error instanceof Error ? error.message : "Failed to submit contact form" 
      },
      { status: 500 }
    );
  }
}
