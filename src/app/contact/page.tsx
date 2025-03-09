// src/app/contact/page.tsx
'use client';

import { useState } from 'react';
import { Phone, Mail, MapPin, MessageSquare } from 'lucide-react';
import ContactForm from '@/components/sections/ContactForm';

export default function ContactPage() {
  return (
    <div className="bg-white">
      {/* Header section */}
      <div className="relative isolate bg-primary/10">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Contact Us
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Get in touch with our team for all your logistics needs. We're here to help you find the
              best transportation solution.
            </p>
          </div>
        </div>
      </div>

      {/* Contact section */}
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
          {/* Contact information */}
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Get in touch</h2>
            <p className="mt-4 leading-7 text-gray-600">
              Our team is ready to assist you with any questions about our services.
            </p>

            <dl className="mt-8 space-y-6">
              <dt className="sr-only">Phone</dt>
              <dd className="flex">
                <Phone className="h-7 w-6 text-primary" aria-hidden="true" />
                <span className="ml-3 text-base leading-7 text-gray-600">
                  <a href="tel:9971981827" className="hover:text-primary">
                    +91 9971981827
                  </a>
                </span>
              </dd>
              <dt className="sr-only">Email</dt>
              <dd className="flex">
                <Mail className="h-7 w-6 text-primary" aria-hidden="true" />
                <span className="ml-3 text-base leading-7 text-gray-600">
                  <a href="mailto:logistics@winggroup.org" className="hover:text-primary">
                    logistics@winggroup.org
                  </a>
                </span>
              </dd>
              <dt className="sr-only">Address</dt>
              <dd className="flex">
                <MapPin className="h-7 w-6 text-primary" aria-hidden="true" />
                <span className="ml-3 text-base leading-7 text-gray-600">
                  ED-9 New Ashok Nagar Street No-21
                  <br />
                  New Delhi -110096
                </span>
              </dd>
              <dt className="sr-only">WhatsApp</dt>
              <dd className="flex">
                <MessageSquare className="h-7 w-6 text-primary" aria-hidden="true" />
                <span className="ml-3 text-base leading-7 text-gray-600">
                  <a href="https://wa.me/919971981827" className="hover:text-primary">
                    Message us on WhatsApp
                  </a>
                </span>
              </dd>
            </dl>

            <div className="mt-8 border-t border-gray-100 pt-8">
              <h3 className="text-lg font-semibold text-gray-900">Operating Hours</h3>
              <p className="mt-2 text-base text-gray-600">
                Monday - Saturday: 9:00 AM - 7:00 PM
                <br />
                Sunday: Closed
              </p>
            </div>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}