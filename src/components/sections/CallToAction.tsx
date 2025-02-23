// src/components/sections/CallToAction.tsx
import Link from 'next/link';
import { Phone } from 'lucide-react';

export default function CallToAction() {
  return (
    <div className="bg-primary">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:justify-between lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Ready to get started?
          <br />
          Contact us for a quote today.
        </h2>
        <div className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:flex-shrink-0">
          <Link
            href="/contact"
            className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-primary shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Get a Quote
          </Link>
          <a
            href="tel:9971981827"
            className="flex items-center text-sm font-semibold leading-6 text-white"
          >
            <Phone className="mr-2 h-5 w-5" />
            Call Us <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </div>
  );
}