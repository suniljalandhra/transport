import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Plane, Train, Truck } from 'lucide-react';

const modes = [
  { name: 'Roadways', icon: Truck },
  { name: 'Airways', icon: Plane },
  { name: 'Railways', icon: Train },
];

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-navy-deep">
      <Image
        src="/images/hero-highway.jpg"
        alt="Cargo trucks on an expressway at dusk"
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover"
      />
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-deep via-navy-deep/85 to-navy-deep/30"
        aria-hidden="true"
      />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-navy-deep/80 to-transparent" aria-hidden="true" />

      <div className="section pb-36 pt-20 sm:pb-44 sm:pt-28 lg:pt-32">
        <div className="max-w-2xl">
          <span className="eyebrow-chip">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" aria-hidden="true" />
            Reliable Logistics Solutions Across India
          </span>
          <h1 className="mt-7 text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-6xl">
            Your Trusted Partner in <span className="text-primary">Transportation</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
            Comprehensive logistics solutions through roadways, airways, and railways. Delivering excellence in
            domestic and international shipping.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link href="/contact" className="btn-primary">
              Get a Quote <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link href="/services" className="btn-ghost-dark">
              Explore Services
            </Link>
          </div>
          <ul className="mt-12 flex flex-wrap gap-x-6 gap-y-3" aria-label="Transport modes">
            {modes.map((mode) => (
              <li key={mode.name} className="flex items-center gap-2 text-sm font-medium text-slate-300">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 text-primary">
                  <mode.icon className="h-4 w-4" aria-hidden="true" />
                </span>
                {mode.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
