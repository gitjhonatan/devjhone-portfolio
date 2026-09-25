import { NextRequest, NextResponse } from "next/server";

import { sendContactEmail } from "@/lib/mail/mailer";
import { contactSchema } from "@/lib/validations/contact";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const data = contactSchema.parse(body);

    await sendContactEmail(data);

    return NextResponse.json(
      { message: "Email sent successfully!" },
      { status: 200 },
    );
  } catch (error) {
    console.error("[Contact API] Failed to send email:", error);

    return NextResponse.json(
      { message: "Failed to send email." },
      { status: 500 },
    );
  }
}