import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Plane, Train, Truck } from 'lucide-react';

const services = [
  {
    title: 'Road Transportation',
    description: 'Reliable and efficient road freight services across India with real-time tracking and timely delivery.',
    image: '/images/road-transport.jpg',
    href: '/services#roadways',
    icon: Truck,
  },
  {
    title: 'Air Freight',
    description: 'Express air freight services for time-sensitive cargo, including international shipping through IGI Airport.',
    image: '/images/air-freight.jpg',
    href: '/services#airways',
    icon: Plane,
  },
  {
    title: 'Rail Logistics',
    description: 'Cost-effective and environmentally friendly rail transportation for large shipments.',
    image: '/images/rail-logistics.jpg',
    href: '/services#railways',
    icon: Train,
  },
];

export default function ServicesOverview() {
  return (
    <section className="section py-20 sm:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <p className="eyebrow">What we do</p>
        <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
          Comprehensive Logistics Solutions
        </h2>
        <p className="mt-4 text-lg leading-8 text-ink-muted">
          End-to-end transportation services tailored to your specific needs.
        </p>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <Link key={service.title} href={service.href} className="card-interactive group flex flex-col overflow-hidden">
            <div className="relative aspect-[16/10] overflow-hidden bg-surface-low">
              <Image
                src={service.image}
                alt={service.title}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                className="object-cover transition duration-500 group-hover:scale-105"
              />
              <span className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-xl bg-white/95 text-primary-deep shadow-sm">
                <service.icon className="h-5 w-5" aria-hidden="true" />
              </span>
            </div>
            <div className="flex flex-1 flex-col p-6">
              <h3 className="text-lg font-bold text-navy">{service.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-6 text-ink-muted">{service.description}</p>
              <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-primary-deep">
                Learn more
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
