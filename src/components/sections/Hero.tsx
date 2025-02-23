// src/components/sections/Hero.tsx
import Link from 'next/link';
import { Truck, Plane, Train } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="relative z-10 lg:w-full lg:max-w-2xl">
          <div className="relative px-6 py-32 sm:py-40 lg:px-8 lg:py-56">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
              <div className="hidden sm:mb-10 sm:flex">
                <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-500 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                  Reliable Logistics Solutions Across India
                </div>
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Your Trusted Partner in{' '}
                <span className="text-primary">Transportation</span>
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Comprehensive logistics solutions through roadways, airways, and railways. 
                Delivering excellence in domestic and international shipping.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <Link
                  href="/contact"
                  className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  Contact Us
                </Link>
                <Link
                  href="/services"
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  Learn more <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto h-12 w-12 text-primary">
                <Truck className="h-12 w-12" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">Roadways</h3>
              <p className="mt-2 text-sm text-gray-600">Comprehensive ground transportation</p>
            </div>
            <div className="text-center">
              <div className="mx-auto h-12 w-12 text-primary">
                <Plane className="h-12 w-12" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">Airways</h3>
              <p className="mt-2 text-sm text-gray-600">International & domestic air freight</p>
            </div>
            <div className="text-center">
              <div className="mx-auto h-12 w-12 text-primary">
                <Train className="h-12 w-12" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">Railways</h3>
              <p className="mt-2 text-sm text-gray-600">Efficient rail transportation</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}