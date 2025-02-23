// src/components/sections/ServicesOverview.tsx
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    title: 'Road Transportation',
    description: 'Reliable and efficient road freight services across India with real-time tracking and timely delivery.',
    image: '/images/road-transport.jpg',
    href: '/services#roadways'
  },
  {
    title: 'Air Freight',
    description: 'Express air freight services for time-sensitive cargo, including international shipping through IGI Airport.',
    image: '/images/air-freight.jpg',
    href: '/services#airways'
  },
  {
    title: 'Rail Logistics',
    description: 'Cost-effective and environmentally friendly rail transportation for large shipments.',
    image: '/images/rail-logistics.jpg',
    href: '/services#railways'
  }
];

export default function ServicesOverview() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Comprehensive Logistics Solutions
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            We offer end-to-end transportation services tailored to your specific needs
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {services.map((service) => (
            <article key={service.title} className="flex flex-col items-start">
              <div className="relative w-full">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={500}
                  height={300}
                  className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                />
              </div>
              <div className="max-w-xl">
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                  <h3 className="text-lg font-semibold leading-6 text-gray-900">
                    {service.title}
                  </h3>
                </div>
                <p className="mt-5 text-sm leading-6 text-gray-600">
                  {service.description}
                </p>
              </div>
              <div className="mt-4">
                <Link
                  href={service.href}
                  className="flex items-center text-sm font-semibold leading-6 text-primary hover:text-primary-dark"
                >
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}