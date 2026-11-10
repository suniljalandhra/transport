// src/components/sections/ContactForm.tsx
'use client';

import { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { site } from '@/lib/site';

const services = [
  { value: 'general', label: 'General Inquiry' },
  { value: 'roadways', label: 'Road Transportation' },
  { value: 'airways', label: 'Air Freight' },
  { value: 'railways', label: 'Rail Logistics' },
];

const inputClass =
  'block w-full rounded-xl border-0 bg-surface px-4 py-3 text-ink ring-1 ring-inset ring-slate-200 transition placeholder:text-ink-subtle/70 focus:bg-white focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6';
const labelClass = 'block text-sm font-semibold leading-6 text-navy';

type FormData = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

/** Builds the pre-filled WhatsApp text from the form fields. */
function buildMessage(data: FormData) {
  const service = services.find((s) => s.value === data.service)?.label ?? data.service;
  return [
    'Hello Wing Logistics, I would like a quote.',
    '',
    `*Name:* ${data.name.trim()}`,
    `*Phone:* ${data.phone.trim()}`,
    data.email.trim() ? `*Email:* ${data.email.trim()}` : null,
    `*Service:* ${service}`,
    '',
    `*Details:* ${data.message.trim()}`,
  ]
    .filter((line) => line !== null)
    .join('\n');
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    service: 'general',
    message: '',
  });
  const [opened, setOpened] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const url = `${site.whatsappHref}?text=${encodeURIComponent(buildMessage(formData))}`;

    // Open WhatsApp in a new tab; fall back to same-tab navigation if a popup blocker stops it.
    const win = window.open(url, '_blank');
    if (win) {
      win.opener = null;
    } else {
      window.location.href = url;
    }
    // Keep the form filled in, in case the visitor comes back without sending.
    setOpened(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Name
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="name"
              id="name"
              autoComplete="name"
              required
              maxLength={100}
              value={formData.name}
              onChange={handleChange}
              className={inputClass}
            />
          </div>
        </div>

        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone number
          </label>
          <div className="mt-2">
            <input
              type="tel"
              name="phone"
              id="phone"
              autoComplete="tel"
              required
              maxLength={20}
              value={formData.phone}
              onChange={handleChange}
              className={inputClass}
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className={labelClass}>
            Email <span className="font-normal text-ink-subtle">(optional)</span>
          </label>
          <div className="mt-2">
            <input
              type="email"
              name="email"
              id="email"
              autoComplete="email"
              maxLength={120}
              value={formData.email}
              onChange={handleChange}
              className={inputClass}
            />
          </div>
        </div>

        <div>
          <label htmlFor="service" className={labelClass}>
            Service Interested In
          </label>
          <div className="mt-2">
            <select name="service" id="service" value={formData.service} onChange={handleChange} className={inputClass}>
              {services.map((s) => (
                <option key={s.value} value={s.value}>
                  {s.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          Message
        </label>
        <div className="mt-2">
          <textarea
            name="message"
            id="message"
            rows={4}
            required
            maxLength={1000}
            placeholder="Pickup and drop locations, cargo type, approximate weight, timeline…"
            value={formData.message}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
      </div>

      <div className="pt-2">
        <button type="submit" className="btn-primary w-full py-3.5 text-base">
          <MessageCircle className="h-5 w-5" aria-hidden="true" />
          Send via WhatsApp
        </button>
        <p className="mt-3 text-center text-xs text-ink-subtle">
          Opens WhatsApp with your details filled in — just press send there.
        </p>
      </div>

      {opened && (
        <div role="status" className="rounded-xl bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-700">
          WhatsApp has opened with your request. Press <strong>send</strong> in WhatsApp to reach us. Didn&apos;t open?
          Call us on{' '}
          <a href={site.phoneHref} className="underline">
            {site.phone}
          </a>
          .
        </div>
      )}
    </form>
  );
}
