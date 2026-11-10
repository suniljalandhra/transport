// src/app/services/page.tsx
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, CheckCircle2, Clock, PackageCheck, Plane, Shield, Train, Truck } from 'lucide-react';
import PageHero from '@/components/sections/PageHero';
import CallToAction from '@/components/sections/CallToAction';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Road transportation, air freight and rail logistics services across India from Wing Logistics, New Delhi. FTL, part load, express, domestic and international shipping.',
  alternates: { canonical: '/services' },
};

const services = [
  {
    id: 'roadways',
    title: 'Road Transportation',
    description: 'Efficient and reliable road freight services across India.',
    icon: Truck,
    image: '/images/road-transport.jpg',
    cta: 'Request a Road Freight Quote',
    features: [
      'Door-to-door delivery',
      'Full truckload (FTL) services',
      'Part load services',
      'Express delivery options',
      'Real-time tracking',
      'Nationwide coverage',
    ],
  },
  {
    id: 'airways',
    title: 'Air Freight Services',
    description: 'Fast and secure air cargo transportation, including international shipping through IGI Airport.',
    icon: Plane,
    image: '/images/air-freight.jpg',
    cta: 'Book Air Cargo',
    features: [
      'Domestic air freight',
      'International shipping',
      'Express air cargo',
      'Airport-to-airport service',
      'Door-to-airport service',
      'Temperature-controlled shipping',
    ],
  },
  {
    id: 'railways',
    title: 'Rail Logistics',
    description: 'Cost-effective and sustainable rail transportation for large shipments.',
    icon: Train,
    image: '/images/rail-logistics.jpg',
    cta: 'Plan a Rail Shipment',
    features: [
      'Container rail services',
      'Bulk cargo transport',
      'Multi-modal solutions',
      'Major route coverage',
      'Regular scheduled services',
      'Loading/unloading assistance',
    ],
  },
];

const commonFeatures = [
  { name: 'Secure Handling', description: 'Advanced cargo protection and handling procedures.', icon: Shield },
  { name: 'Time-Critical Services', description: 'Specialized solutions for urgent deliveries.', icon: Clock },
  { name: 'Quality Assurance', description: 'Strict quality control and service standards.', icon: PackageCheck },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Logistics Solutions Built Around Your Cargo"
        description="Comprehensive transportation solutions tailored to your needs. Whether by road, air, or rail, we ensure your cargo reaches its destination safely and on time."
        image="/images/hero-highway.jpg"
      />

      <section className="section py-20 sm:py-24">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="eyebrow">Value added</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
              Everything you need for reliable logistics
            </h2>
          </div>
          <p className="max-w-md text-ink-muted">Every shipment, on every mode, comes with the same standards.</p>
        </div>
        <dl className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {commonFeatures.map((feature) => (
            <div key={feature.name} className="card-interactive p-7">
              <div className="icon-badge">
                <feature.icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <dt className="mt-5 text-lg font-bold text-navy">{feature.name}</dt>
              <dd className="mt-2 text-sm leading-6 text-ink-muted">{feature.description}</dd>
            </div>
          ))}
        </dl>
      </section>

      <div className="bg-surface-low">
        {services.map((service, idx) => (
          <section key={service.id} id={service.id} className="scroll-mt-24 py-16 sm:py-20">
            <div className="section grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
              <div className={idx % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-white shadow-card-hover ring-1 ring-slate-200/80">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>
              <div>
                <div className="icon-badge">
                  <service.icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-navy">{service.title}</h2>
                <p className="mt-4 text-lg leading-8 text-ink-muted">{service.description}</p>
                <ul role="list" className="mt-8 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm font-medium text-ink">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-primary" aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="btn mt-10 bg-navy text-white hover:bg-navy-light focus-visible:outline-navy">
                  {service.cta} <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </section>
        ))}
      </div>

      <CallToAction title="Ready to get started? Get in touch with us today." primaryLabel="Contact Us" />
    </>
  );
}
