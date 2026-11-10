// src/app/contact/page.tsx
import type { Metadata } from 'next';
import { Clock, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import ContactForm from '@/components/sections/ContactForm';
import PageHero from '@/components/sections/PageHero';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Contact Wing Logistics in New Delhi for road, air and rail freight quotes. Call +91 9971981827 or email logistics@winggroup.org.',
  alternates: { canonical: '/contact' },
};

const channels = [
  { label: 'Call us', value: site.phone, href: site.phoneHref, icon: Phone },
  { label: 'Email us', value: site.email, href: `mailto:${site.email}`, icon: Mail },
  { label: 'Visit our office', value: site.addressLines.join(', '), icon: MapPin },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Let&apos;s Move <span className="text-primary">Your Cargo</span>
          </>
        }
        description="Get in touch with our team for all your logistics needs. We're here to help you find the best transportation solution."
        image="/images/hero-highway.jpg"
      />

      <section className="section relative z-10 -mt-12 grid grid-cols-1 gap-8 pb-20 sm:pb-28 lg:grid-cols-12">
        <div className="space-y-4 lg:col-span-5">
          {channels.map((c) => {
            const body = (
              <>
                <span className="icon-badge flex-none">
                  <c.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-xs font-bold uppercase tracking-[0.12em] text-ink-subtle">{c.label}</span>
                  <span className="mt-1 block break-words text-base font-semibold text-navy">{c.value}</span>
                </span>
              </>
            );
            return c.href ? (
              <a key={c.label} href={c.href} className="card-interactive flex items-center gap-4 p-5">
                {body}
              </a>
            ) : (
              <div key={c.label} className="card flex items-center gap-4 p-5">
                {body}
              </div>
            );
          })}

          <a
            href={site.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="card-interactive flex items-center gap-4 p-5"
          >
            <span className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
            </span>
            <span className="flex-1">
              <span className="block text-xs font-bold uppercase tracking-[0.12em] text-ink-subtle">WhatsApp</span>
              <span className="mt-1 block text-base font-semibold text-navy">Message us on WhatsApp</span>
            </span>
            <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">Chat</span>
          </a>

          <div className="card p-5">
            <div className="flex items-center gap-4">
              <span className="icon-badge flex-none">
                <Clock className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="text-xs font-bold uppercase tracking-[0.12em] text-ink-subtle">Operating Hours</span>
            </div>
            <dl className="mt-4 divide-y divide-slate-100 text-sm">
              {site.hours.map((h) => (
                <div key={h.days} className="flex justify-between py-2.5">
                  <dt className="font-medium text-navy">{h.days}</dt>
                  <dd className="font-mono text-ink-muted">{h.time}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className="card p-6 sm:p-10 lg:col-span-7">
          <p className="eyebrow">Quick inquiry</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy">Request a Quote</h2>
          <p className="mt-3 text-ink-muted">
            Tell us about your shipment and our team will get back to you with the best option.
          </p>
          <div className="mt-8">
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="section pb-20 sm:pb-28">
        <div className="card overflow-hidden">
          <iframe
            title="Wing Logistics office location, New Ashok Nagar, New Delhi"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4401.695160613979!2d77.30791167620346!3d28.59645078571658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5004aa2368b%3A0x5b4073da4ff5322f!2sWING%20LOGISTICS!5e1!3m2!1sen!2sin!4v1794300978905!5m2!1sen!2sin"
            className="h-80 w-full border-0 sm:h-96"
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
      </section>
    </>
  );
}
