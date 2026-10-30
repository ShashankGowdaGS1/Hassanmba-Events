"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Phone, MessageCircle, MapPin } from "lucide-react";
import { Container } from "@/components/ui/container";
import { DecorativeDivider } from "@/components/ui/decorative-divider";
import { Button, buttonStyles } from "@/components/ui/button";
import { BUSINESS_DATA } from "@/data/business";
import { EVENT_TYPES } from "@/data/services";

// ─── Form types ───────────────────────────────────────────────────────────────

interface FormData {
  fullName: string;
  phone: string;
  eventType: string;
  eventDate: string;
  eventLocation: string;
  requirements: string;
}

const INITIAL_FORM: FormData = {
  fullName: "",
  phone: "",
  eventType: "",
  eventDate: "",
  eventLocation: "",
  requirements: "",
};

// ─── Instagram SVG icon ────────────────────────────────────────────────────────

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

// ─── Form Component ────────────────────────────────────────────────────────────

function EnquiryForm() {
  const [form, setForm] = useState<FormData>(INITIAL_FORM);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [submittedUrl, setSubmittedUrl] = useState<string | null>(null);

  function validate(): boolean {
    const errs: Partial<FormData> = {};
    if (!form.fullName.trim()) errs.fullName = "Please enter your full name.";
    if (!form.phone.trim()) {
      errs.phone = "Please enter your phone number.";
    } else if (!/^\+?[0-9\s\-()]+$/.test(form.phone.trim()) || form.phone.replace(/\D/g, "").length < 7 || form.phone.replace(/\D/g, "").length > 15) {
      errs.phone = "Please enter a valid phone number.";
    }
    if (!form.eventType) errs.eventType = "Please select your event type.";
    setErrors(errs);
    const firstInvalid = Object.keys(errs)[0];
    if (firstInvalid) document.getElementById(firstInvalid)?.focus();
    return !firstInvalid;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    const lines: string[] = [
      `Hello ${BUSINESS_DATA.brand.name},`,
      "",
      "I would like to enquire about event decoration.",
      "",
      `Name: ${form.fullName}`,
      `Phone: ${form.phone}`,
      `Event Type: ${form.eventType}`,
    ];
    if (form.eventDate) lines.push(`Preferred Date: ${form.eventDate}`);
    if (form.eventLocation) lines.push(`Event Location: ${form.eventLocation}`);
    if (form.requirements) {
      lines.push("", `Additional Requirements:`, form.requirements);
    }
    lines.push("", "Thank you.");

    const message = lines.join("\n");
    const url = `${BUSINESS_DATA.contact.whatsappLink}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setSubmittedUrl(url);
  }

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  const inputCls =
    "w-full min-w-0 min-h-[44px] font-body text-base text-charcoal bg-white border border-gold-antique/30 rounded-xs px-4 py-3 placeholder:text-charcoal/55 focus:outline-none focus:border-burgundy/60 focus:ring-1 focus:ring-burgundy/30 transition-colors duration-150";
  const labelCls =
    "font-body text-xs font-medium tracking-wide text-charcoal/70 uppercase mb-1.5 block";
  const errorCls = "font-body text-xs text-red-600 mt-1";

  if (submittedUrl) {
    return (
      <div role="status" className="bg-champagne/20 border border-gold-antique/40 rounded-xs p-6 sm:p-8 text-center space-y-4">
        <div
          aria-hidden="true"
          className="w-10 h-10 mx-auto rotate-45 bg-burgundy/80"
        />
        <h3 className="font-display text-lg text-burgundy font-semibold">
          Your Enquiry Is Ready
        </h3>
        <p className="font-body text-sm text-charcoal/70 leading-relaxed max-w-sm mx-auto">
          Your enquiry message is prepared. Please send it in WhatsApp to complete your enquiry.
        </p>
        <p className="font-body text-xs text-charcoal/70 italic">
          If WhatsApp did not open, use this link to open your prepared message.
        </p>
        <a href={submittedUrl} target="_blank" rel="noopener noreferrer" className={buttonStyles({ variant: "primary", size: "md" })}>
          Open prepared enquiry
        </a>
        <button
          type="button"
          onClick={() => { setSubmittedUrl(null); setForm(INITIAL_FORM); }}
          className="block mx-auto min-h-[44px] font-body text-xs text-burgundy hover:underline mt-2"
        >
          Submit another enquiry
        </button>
      </div>
    );
  }

  return (
    <form
      id="event-enquiry-form"
      onSubmit={handleSubmit}
      noValidate
      className="space-y-6"
      aria-label="Event enquiry form"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Full Name */}
        <div>
          <label htmlFor="fullName" className={labelCls}>
            Full Name <span className="text-burgundy">*</span>
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            autoComplete="name"
            placeholder="Your full name"
            value={form.fullName}
            onChange={handleChange}
            aria-required="true"
            aria-invalid={!!errors.fullName}
            aria-describedby={errors.fullName ? "fullName-error" : undefined}
            className={inputCls}
          />
          {errors.fullName && (
            <p id="fullName-error" className={errorCls} role="alert">
              {errors.fullName}
            </p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className={labelCls}>
            Phone Number <span className="text-burgundy">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="+91 99999 99999"
            value={form.phone}
            onChange={handleChange}
            aria-required="true"
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            className={inputCls}
          />
          {errors.phone && (
            <p id="phone-error" className={errorCls} role="alert">
              {errors.phone}
            </p>
          )}
        </div>
      </div>

      {/* Event Type */}
      <div>
        <label htmlFor="eventType" className={labelCls}>
          Event Type <span className="text-burgundy">*</span>
        </label>
        <select
          id="eventType"
          name="eventType"
          value={form.eventType}
          onChange={handleChange}
          aria-required="true"
          aria-invalid={!!errors.eventType}
          aria-describedby={errors.eventType ? "eventType-error" : undefined}
          className={inputCls}
        >
          <option value="">Select your event type</option>
          {EVENT_TYPES.map((et) => (
            <option key={et} value={et}>
              {et}
            </option>
          ))}
        </select>
        {errors.eventType && (
          <p id="eventType-error" className={errorCls} role="alert">
            {errors.eventType}
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Event Date */}
        <div>
          <label htmlFor="eventDate" className={labelCls}>
            Preferred Event Date{" "}
            <span className="text-charcoal/70 font-normal normal-case">
              (optional)
            </span>
          </label>
          <input
            id="eventDate"
            name="eventDate"
            type="text"
            placeholder="e.g. 15 March"
            value={form.eventDate}
            onChange={handleChange}
            className={inputCls}
          />
        </div>

        {/* Event Location */}
        <div>
          <label htmlFor="eventLocation" className={labelCls}>
            Event Location{" "}
            <span className="text-charcoal/70 font-normal normal-case">
              (optional)
            </span>
          </label>
          <input
            id="eventLocation"
            name="eventLocation"
            type="text"
            placeholder="Venue or city"
            value={form.eventLocation}
            onChange={handleChange}
            className={inputCls}
          />
        </div>
      </div>

      {/* Requirements */}
      <div>
        <label htmlFor="requirements" className={labelCls}>
          Additional Requirements{" "}
          <span className="text-charcoal/70 font-normal normal-case">
            (optional)
          </span>
        </label>
        <textarea
          id="requirements"
          name="requirements"
          rows={4}
          placeholder="Describe your decoration vision, colour preferences, specific arrangements, or any other requirements..."
          value={form.requirements}
          onChange={handleChange}
          className={`${inputCls} resize-none`}
        />
      </div>

      {/* Submit */}
      <div className="pt-2 space-y-3">
        <Button type="submit" variant="primary" size="md" className="w-full">
          Send Enquiry via WhatsApp
        </Button>
        <p className="font-body text-xs text-charcoal/70 text-center leading-relaxed">
          Clicking above opens WhatsApp with your enquiry pre-filled. Your
          message is sent only when you tap Send in WhatsApp.
        </p>
      </div>
    </form>
  );
}

// ─── Main Page ─────────────────────────────────────────────────────────────────

export default function ContactClient() {

  const { contact, address } = BUSINESS_DATA;
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    address.formatted
  )}`;

  return (
    <div className="w-full">
      {/* ─── HERO ──────────────────────────────────────────── */}
      <section className="bg-ivory pt-14 pb-12 md:pt-20 md:pb-16">
        <Container size="narrow" className="text-center">
          <p className="font-accent text-2xl md:text-3xl text-gold-antique mb-3">
            Your Celebration Begins Here
          </p>
          <h1 className="font-display font-bold text-burgundy text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.1] mb-5">
            Let&apos;s Plan Something Beautiful Together.
          </h1>
          <p className="font-body text-xs tracking-widest uppercase text-gold-dark font-medium mb-8">
            {BUSINESS_DATA.brand.descriptor} · {BUSINESS_DATA.brand.locationLabel}
          </p>
          <DecorativeDivider />
        </Container>
      </section>

      {/* ─── CONTACT INFO + FORM ───────────────────────────── */}
      <section className="bg-white py-16 md:py-24">
        <Container size="wide">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">
            {/* Left — contact details */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <p className="font-accent text-xl text-gold-antique mb-2">
                  Reach Us Directly
                </p>
                <h2 className="font-display font-bold text-burgundy text-2xl md:text-3xl tracking-tight mb-5">
                  Contact Information
                </h2>
                <DecorativeDivider variant="simple" className="my-4" />
              </div>

              {/* Phone */}
              <div className="flex gap-3">
                <Phone
                  className="w-4 h-4 text-gold-antique mt-0.5 shrink-0"
                  aria-hidden="true"
                />
                <div>
                  <p className="font-body text-xs font-semibold uppercase tracking-widest text-charcoal/50 mb-1">
                    Call Us
                  </p>
                  <a
                    href={contact.phonePrimaryTel}
                    className="block font-body text-sm font-medium text-burgundy hover:text-gold-dark transition-colors"
                  >
                    {contact.phonePrimaryDisplay}
                  </a>
                  <a
                    href={contact.phoneSecondaryTel}
                    className="block font-body text-sm font-medium text-burgundy hover:text-gold-dark transition-colors"
                  >
                    {contact.phoneSecondaryDisplay}
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex gap-3">
                <MessageCircle
                  className="w-4 h-4 text-gold-antique mt-0.5 shrink-0"
                  aria-hidden="true"
                />
                <div>
                  <p className="font-body text-xs font-semibold uppercase tracking-widest text-charcoal/50 mb-2">
                    WhatsApp
                  </p>
                  <a
                    href={`${contact.whatsappLink}?text=${encodeURIComponent(
                      `Hello ${BUSINESS_DATA.brand.name}, I would like to enquire about your flower decoration services.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                   className={buttonStyles({ variant: "primary", size: "sm" })}>
                Chat on WhatsApp
              </a>
                  <p className="font-body text-xs text-charcoal/45 mt-2">
                    Message us about your occasion.
                  </p>
                </div>
              </div>

              {/* Instagram */}
              <div className="flex gap-3">
                <InstagramIcon className="w-4 h-4 text-gold-antique mt-0.5 shrink-0" />
                <div>
                  <p className="font-body text-xs font-semibold uppercase tracking-widest text-charcoal/50 mb-1">
                    Instagram
                  </p>
                  <a
                    href={contact.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body text-sm font-medium text-burgundy hover:text-gold-dark transition-colors"
                  >
                    {contact.instagramHandle}
                  </a>
                  <p className="font-body text-xs text-charcoal/45 mt-1">
                    Visit our Instagram profile.
                  </p>
                </div>
              </div>

              {/* Address */}
              <div className="flex gap-3">
                <MapPin
                  className="w-4 h-4 text-gold-antique mt-0.5 shrink-0"
                  aria-hidden="true"
                />
                <div>
                  <p className="font-body text-xs font-semibold uppercase tracking-widest text-charcoal/50 mb-1">
                    Our Location
                  </p>
                  <address className="font-body text-sm text-charcoal/75 not-italic leading-relaxed">
                    {address.street},
                    <br />
                    {address.landmark},
                    <br />
                    {address.city}, {address.state} — {address.postalCode}
                  </address>
                  <a
                    href={mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body text-xs text-gold-dark hover:underline mt-2 inline-block"
                  >
                    Open in Google Maps →
                  </a>
                </div>
              </div>
            </div>

            {/* Right — enquiry form */}
            <div id="event-enquiry-section" className="lg:col-span-3">
              <div className="mb-8">
                <p className="font-accent text-xl text-gold-antique mb-2">
                  Share Your Vision
                </p>
                <h2 className="font-display font-bold text-burgundy text-2xl md:text-3xl tracking-tight mb-2">
                  Event Enquiry Form
                </h2>
                <p className="font-body text-sm text-charcoal/60 leading-relaxed">
                  Fill in your details below. We&apos;ll open WhatsApp with your
                  message pre-composed — simply send it to begin your enquiry.
                </p>
                <DecorativeDivider variant="simple" className="mt-6 mb-0" />
              </div>
              <EnquiryForm />

              {/* Fallback direct WhatsApp */}
              <div className="mt-6 pt-5 border-t border-gold-antique/15">
                <p className="font-body text-xs text-charcoal/50 mb-3">
                  Prefer to message us directly?
                </p>
                <a
                  href={`${contact.whatsappLink}?text=${encodeURIComponent(
                    `Hello ${BUSINESS_DATA.brand.name}, I would like to enquire about event decoration services.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-sm font-medium text-burgundy hover:text-gold-dark underline decoration-gold-antique/50 transition-colors"
                >
                  Open WhatsApp directly →
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ─── LOCATION ──────────────────────────────────────── */}
      <section className="bg-ivory py-16 md:py-20 border-t border-gold-antique/15">
        <Container size="narrow" className="text-center">
          <p className="font-accent text-xl md:text-2xl text-gold-antique mb-2">
            Find Us in Hassan
          </p>
          <h2 className="font-display font-bold text-burgundy text-2xl md:text-3xl tracking-tight mb-4">
            We are Based at the Heart of Hassan
          </h2>
          <DecorativeDivider />
          <p className="font-body text-sm text-charcoal/70 leading-relaxed mt-6 mb-6">
            {address.street}, {address.landmark},{" "}
            {address.city}, {address.state} {address.postalCode}
          </p>
          <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className={buttonStyles({ variant: "secondary", size: "md" })}>
                View on Google Maps
              </a>
        </Container>
      </section>
    </div>
  );
}


