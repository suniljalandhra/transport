// src/app/about/page.tsx
import Image from 'next/image';
import type { Metadata } from 'next';
import { Building, CheckCircle, Trophy, Users } from 'lucide-react';
import PageHero from '@/components/sections/PageHero';
import StatsBar from '@/components/sections/StatsBar';
import CallToAction from '@/components/sections/CallToAction';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Wing Logistics is a New Delhi based transportation and logistics company with 25+ years of experience delivering cargo across India by road, air and rail.',
  alternates: { canonical: '/about' },
};

const values = [
  {
    name: 'Reliability',
    description: 'We deliver on our promises with consistent and dependable service.',
    icon: CheckCircle,
  },
  {
    name: 'Customer Focus',
    description: "Your success is our priority. We're dedicated to understanding and meeting your needs.",
    icon: Users,
  },
  {
    name: 'Excellence',
    description: 'We strive for excellence in every aspect of our operations.',
    icon: Trophy,
  },
  {
    name: 'Professionalism',
    description: 'Our team maintains the highest standards of professional conduct.',
    icon: Building,
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="About Wing Logistics"
        description="Your trusted partner in logistics, delivering excellence across India through innovative transportation solutions."
        image="/images/operations-hub.jpg"
        align="center"
      >
        <div className="h-4" />
      </PageHero>
      <StatsBar />

      <section className="section grid grid-cols-1 items-center gap-12 py-20 sm:py-28 lg:grid-cols-2 lg:gap-16">
        <div className="relative">
          <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-primary/10 blur-2xl" aria-hidden="true" />
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-card-hover ring-1 ring-slate-200/80">
            <Image
              src="/images/operations-hub.jpg"
              alt="Logistics operations and warehouse floor"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
        <div>
          <p className="eyebrow">Our Story</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            Building Trust Through Excellence
          </h2>
          <p className="mt-6 text-lg leading-8 text-ink-muted">
            Wing Logistics has been at the forefront of transportation and logistics services, providing comprehensive
            solutions for businesses across India. Our journey began with a simple mission: to deliver reliable and
            efficient logistics services that help businesses grow.
          </p>
          <p className="mt-4 text-lg leading-8 text-ink-muted">
            From our base in New Delhi, we move cargo by road, air and rail — for domestic routes and international
            shipments alike.
          </p>
        </div>
      </section>

      <section className="bg-surface-low py-20 sm:py-28">
        <div className="section">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Our Values</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">What Drives Us</h2>
          </div>
          <dl className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div key={value.name} className="card-interactive p-7">
                <div className="icon-badge">
                  <value.icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <dt className="mt-5 text-lg font-bold text-navy">{value.name}</dt>
                <dd className="mt-2 text-sm leading-6 text-ink-muted">{value.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <CallToAction />
    </>
  );
}
