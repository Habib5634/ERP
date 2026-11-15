import nodemailer from "nodemailer";

const smtpUser = () => String(process.env.EMAIL_USER || "").trim();
const smtpPass = () => String(process.env.EMAIL_PASS || "").replace(/\s+/g, "");
const smtpHost = () => String(process.env.EMAIL_HOST || "").trim();
const mailTo = () =>
  String(process.env.EMAIL_TO || process.env.EMAIL_USER || "").trim();

function preferredPort() {
  const parsed = Number.parseInt(process.env.EMAIL_PORT, 10);
  return Number.isInteger(parsed) && parsed > 0 ? parsed : 465;
}

function isConfigured() {
  return Boolean(smtpHost() && smtpUser() && smtpPass() && mailTo());
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ ok: false, error: "Method not allowed" });
  }

  if (!isConfigured()) {
    return res.status(500).json({
      ok: false,
      error: "Email is not configured on the server.",
    });
  }

  const { name, businessName, phone, email, city, country, message } =
    req.body || {};
  const safeName = String(name || "").trim();
  const safeBusinessName = String(businessName || "").trim();
  const safePhone = String(phone || "").trim();
  const safeEmail = String(email || "").trim();
  const safeCity = String(city || "").trim();
  const safeCountry = String(country || "").trim();
  const safeMessage = String(message || "").trim();

  if (
    !safeName ||
    !safeBusinessName ||
    !safePhone ||
    !safeCity ||
    !safeCountry ||
    !safeMessage
  ) {
    return res.status(400).json({
      ok: false,
      error:
        "Name, business name, phone, city, country, and message are required.",
    });
  }

  if (
    safeName.length > 120 ||
    safeBusinessName.length > 160 ||
    safePhone.length > 40 ||
    safeEmail.length > 160 ||
    safeCity.length > 80 ||
    safeCountry.length > 80 ||
    safeMessage.length > 4000
  ) {
    return res.status(400).json({
      ok: false,
      error: "One or more fields are too long.",
    });
  }

  if (safeEmail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(safeEmail)) {
    return res.status(400).json({
      ok: false,
      error: "Please enter a valid email address.",
    });
  }

  const port = preferredPort();
  const transporter = nodemailer.createTransport({
    host: smtpHost(),
    port,
    secure: port === 465,
    requireTLS: port === 587,
    auth: {
      user: smtpUser(),
      pass: smtpPass(),
    },
  });

  // Keep this prefix stable so a Gmail filter can route mail into the "Inquires" label.
  const subject = `[Website Inquiry] ${safeName} — ${safeBusinessName}`;
  const text = [
    `Name: ${safeName}`,
    `Business: ${safeBusinessName}`,
    `Phone: ${safePhone}`,
    `Email: ${safeEmail || "—"}`,
    `City: ${safeCity}`,
    `Country: ${safeCountry}`,
    "",
    "Message:",
    safeMessage,
  ].join("\n");

  const html = `
    <div style="font-family:Arial,sans-serif;line-height:1.5;color:#122018">
      <h2 style="color:#145228;margin:0 0 12px">New website inquiry</h2>
      <p><strong>Name:</strong> ${escapeHtml(safeName)}</p>
      <p><strong>Business name:</strong> ${escapeHtml(safeBusinessName)}</p>
      <p><strong>Phone:</strong> ${escapeHtml(safePhone)}</p>
      <p><strong>Email:</strong> ${escapeHtml(safeEmail || "—")}</p>
      <p><strong>City:</strong> ${escapeHtml(safeCity)}</p>
      <p><strong>Country:</strong> ${escapeHtml(safeCountry)}</p>
      <p><strong>Message:</strong></p>
      <p style="white-space:pre-wrap">${escapeHtml(safeMessage)}</p>
    </div>
  `;

  try {
    await transporter.sendMail({
      from: `"ALI AKBAR SOFTECH Website" <${smtpUser()}>`,
      to: mailTo(),
      replyTo: safeEmail || undefined,
      subject,
      text,
      html,
      headers: {
        "X-Website-Inquiry": "ali-akbar-softech",
      },
    });

    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error("[contact] send failed", error?.code || error?.message || error);
    return res.status(500).json({
      ok: false,
      error: "Could not send your message. Please try again or call us.",
    });
  }
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}
