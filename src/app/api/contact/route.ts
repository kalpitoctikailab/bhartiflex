import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type ContactPayload = {
  firstName: string;
  lastName: string;
  email: string;
  requirements: string;
};

function requiredEnv(name: string): string {
  const v = process.env[name];
  if (!v) throw new Error(`Missing environment variable: ${name}`);
  return v;
}

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as Partial<ContactPayload>;
    const firstName = (body.firstName ?? "").trim();
    const lastName = (body.lastName ?? "").trim();
    const email = (body.email ?? "").trim();
    const requirements = (body.requirements ?? "").trim();

    if (!firstName || !email || !requirements) {
      return NextResponse.json(
        { ok: false, error: "firstName, email, and requirements are required" },
        { status: 400 },
      );
    }
    if (!isEmail(email)) {
      return NextResponse.json(
        { ok: false, error: "Invalid email" },
        { status: 400 },
      );
    }

    const host = requiredEnv("SMTP_HOST");
    const port = Number(requiredEnv("SMTP_PORT"));
    const user = requiredEnv("SMTP_USER");
    const pass = requiredEnv("SMTP_PASS");
    const from = process.env.FROM_EMAIL || user;

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass },
    });

    const to = ["shroffproducts@gmail.com", "info@shroffprocesspumps.com"];
    const subject = `New website inquiry${firstName ? ` — ${firstName}${lastName ? ` ${lastName}` : ""}` : ""}`;
    const text = [
      "New inquiry from website contact form",
      "",
      `Name: ${firstName}${lastName ? ` ${lastName}` : ""}`,
      `Email: ${email}`,
      "",
      "Project requirements:",
      requirements,
    ].join("\n");

    await transporter.sendMail({
      from,
      to,
      subject,
      text,
      replyTo: email,
    });

    return NextResponse.json({ ok: true });
  } catch (e) {
    const message = e instanceof Error ? e.message : "Unknown error";
    return NextResponse.json({ ok: false, error: message }, { status: 500 });
  }
}
