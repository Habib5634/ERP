"use client";

import { useState } from "react";

const inputClass =
  "mt-1.5 w-full rounded-xl border border-line bg-white/90 px-4 py-3 outline-none transition focus:border-primary/40 focus:ring-2 focus:ring-primary/20 disabled:opacity-60";

export default function ContactForm() {
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  async function onSubmit(event) {
    event.preventDefault();
    setStatus("sending");
    setError("");

    const form = event.currentTarget;
    const data = {
      name: form.name.value,
      businessName: form.businessName.value,
      phone: form.phone.value,
      email: form.email.value,
      city: form.city.value,
      country: form.country.value,
      message: form.message.value,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const payload = await response.json().catch(() => ({}));

      if (!response.ok || !payload.ok) {
        throw new Error(payload.error || "Could not send your message.");
      }

      form.reset();
      setStatus("sent");
    } catch (err) {
      setStatus("error");
      setError(err.message || "Could not send your message.");
    }
  }

  return (
    <form
      className="surface relative overflow-hidden rounded-[1.75rem] p-8"
      onSubmit={onSubmit}
    >
      <div className="brand-ribbon absolute inset-x-0 top-0" />
      <p className="mt-2 text-xs font-semibold uppercase tracking-[0.16em] text-accent">
        Inquiry
      </p>
      <h2 className="mt-2 text-xl font-semibold text-primary-deep">
        Send a message
      </h2>
      <p className="mt-2 text-sm text-muted">
        Tell us about your factory, farm, trading, or tax requirements.
      </p>

      <div className="mt-6 grid gap-4">
        <label className="block text-sm font-medium">
          Name
          <input
            name="name"
            required
            disabled={status === "sending"}
            className={inputClass}
            placeholder="Your name"
          />
        </label>
        <label className="block text-sm font-medium">
          Business name
          <input
            name="businessName"
            required
            disabled={status === "sending"}
            className={inputClass}
            placeholder="Your business / company name"
          />
        </label>
        <label className="block text-sm font-medium">
          Phone <span className="text-accent">*</span>
          <input
            name="phone"
            type="tel"
            required
            disabled={status === "sending"}
            className={inputClass}
            placeholder="Your phone number"
          />
        </label>
        <label className="block text-sm font-medium">
          Email
          <input
            name="email"
            type="email"
            disabled={status === "sending"}
            className={inputClass}
            placeholder="Your email (optional)"
          />
        </label>
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block text-sm font-medium">
            City
            <input
              name="city"
              required
              disabled={status === "sending"}
              className={inputClass}
              placeholder="City"
            />
          </label>
          <label className="block text-sm font-medium">
            Country
            <input
              name="country"
              required
              disabled={status === "sending"}
              className={inputClass}
              placeholder="Country"
            />
          </label>
        </div>
        <label className="block text-sm font-medium">
          Message
          <textarea
            name="message"
            required
            rows={5}
            disabled={status === "sending"}
            className={inputClass}
            placeholder="ERP demo, customization, or tax filing..."
          />
        </label>

        <button
          type="submit"
          className="btn-primary w-full sm:w-auto disabled:opacity-60"
          disabled={status === "sending"}
        >
          {status === "sending" ? "Sending..." : "Send inquiry"}
        </button>

        {status === "sent" ? (
          <p className="text-sm font-medium text-primary">
            Thank you — your message was sent. We will get back to you soon.
          </p>
        ) : null}
        {status === "error" ? (
          <p className="text-sm font-medium text-accent">{error}</p>
        ) : null}
      </div>
    </form>
  );
}
