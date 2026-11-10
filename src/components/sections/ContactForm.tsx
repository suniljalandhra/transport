// src/components/sections/ContactForm.tsx
'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'general',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Here you would typically send the form data to your backend
      // For now, we'll simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: 'general',
        message: '',
      });
    } catch (_) {
      // Using underscore to ignore the error variable
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-semibold leading-6 text-navy"
          >
            Name
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="name"
              id="name"
              autoComplete="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="block w-full rounded-xl border-0 bg-surface px-4 py-3 text-ink ring-1 ring-inset ring-slate-200 transition placeholder:text-ink-subtle/70 focus:bg-white focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-semibold leading-6 text-navy"
          >
            Email
          </label>
          <div className="mt-2">
            <input
              type="email"
              name="email"
              id="email"
              autoComplete="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="block w-full rounded-xl border-0 bg-surface px-4 py-3 text-ink ring-1 ring-inset ring-slate-200 transition placeholder:text-ink-subtle/70 focus:bg-white focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-semibold leading-6 text-navy"
          >
            Phone number
          </label>
          <div className="mt-2">
            <input
              type="tel"
              name="phone"
              id="phone"
              autoComplete="tel"
              required
              value={formData.phone}
              onChange={handleChange}
              className="block w-full rounded-xl border-0 bg-surface px-4 py-3 text-ink ring-1 ring-inset ring-slate-200 transition placeholder:text-ink-subtle/70 focus:bg-white focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="service"
            className="block text-sm font-semibold leading-6 text-navy"
          >
            Service Interested In
          </label>
          <div className="mt-2">
            <select
              name="service"
              id="service"
              value={formData.service}
              onChange={handleChange}
              className="block w-full rounded-xl border-0 bg-surface px-4 py-3 text-ink ring-1 ring-inset ring-slate-200 transition placeholder:text-ink-subtle/70 focus:bg-white focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
            >
              <option value="general">General Inquiry</option>
              <option value="roadways">Road Transportation</option>
              <option value="airways">Air Freight</option>
              <option value="railways">Rail Logistics</option>
            </select>
          </div>
        </div>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-semibold leading-6 text-navy"
        >
          Message
        </label>
        <div className="mt-2">
          <textarea
            name="message"
            id="message"
            rows={4}
            required
            value={formData.message}
            onChange={handleChange}
            className="block w-full rounded-xl border-0 bg-surface px-4 py-3 text-ink ring-1 ring-inset ring-slate-200 transition placeholder:text-ink-subtle/70 focus:bg-white focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      <div className="pt-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-primary w-full py-3.5 text-base disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </div>

      {submitStatus === 'success' && (
        <div role="status" className="rounded-xl bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-700">
          Thank you for your message. We&apos;ll get back to you soon!
        </div>
      )}

      {submitStatus === 'error' && (
        <div role="alert" className="rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
          There was an error sending your message. Please try again.
        </div>
      )}
    </form>
  );
}