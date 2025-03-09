// src/app/services/page.tsx
import Image from 'next/image';
import Link from 'next/link';
import { Truck, Plane, Train, PackageCheck, Clock, Shield } from 'lucide-react';

const services = [
  {
    id: 'roadways',
    title: 'Road Transportation',
    description: 'Efficient and reliable road freight services across India',
    icon: Truck,
    image: '/images/road-transport.jpg',
    features: [
      'Door-to-door delivery',
      'Full truckload (FTL) services',
      'Part load services',
      'Express delivery options',
      'Real-time tracking',
      'Nationwide coverage'
    ]
  },
  {
    id: 'airways',
    title: 'Air Freight Services',
    description: 'Fast and secure air cargo transportation',
    icon: Plane,
    image: '/images/air-freight.jpg',
    features: [
      'Domestic air freight',
      'International shipping',
      'Express air cargo',
      'Airport-to-airport service',
      'Door-to-airport service',
      'Temperature-controlled shipping'
    ]
  },
  {
    id: 'railways',
    title: 'Rail Logistics',
    description: 'Cost-effective and sustainable rail transportation',
    icon: Train,
    image: '/images/rail-logistics.jpg',
    features: [
      'Container rail services',
      'Bulk cargo transport',
      'Multi-modal solutions',
      'Major route coverage',
      'Regular scheduled services',
      'Loading/unloading assistance'
    ]
  }
];

const commonFeatures = [
  {
    name: 'Secure Handling',
    description: 'Advanced cargo protection and handling procedures',
    icon: Shield
  },
  {
    name: 'Time-Critical Services',
    description: 'Specialized solutions for urgent deliveries',
    icon: Clock
  },
  {
    name: 'Quality Assurance',
    description: 'Strict quality control and service standards',
    icon: PackageCheck
  }
];

export default function ServicesPage() {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-primary/20">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Our Services
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Comprehensive transportation solutions tailored to your needs. Whether by road, air, or rail,
              we ensure your cargo reaches its destination safely and on time.
            </p>
          </div>
        </div>
      </div>

      {/* Common features section */}
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">Value Added Services</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need for reliable logistics
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {commonFeatures.map((feature) => (
              <div key={feature.name} className="flex flex-col items-start">
                <div className="rounded-lg bg-primary/10 p-2">
                  <feature.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                </div>
                <dt className="mt-4 font-semibold text-gray-900">{feature.name}</dt>
                <dd className="mt-2 leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Individual services sections */}
      {services.map((service, serviceIdx) => (
        <div
          key={service.id}
          id={service.id}
          className={`overflow-hidden ${
            serviceIdx % 2 === 0 ? 'bg-white' : 'bg-gray-50'
          } py-24 sm:py-32`}
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              <div className="lg:pr-8 lg:pt-4">
                <div className="lg:max-w-lg">
                  <div className="flex items-center">
                    <service.icon className="h-8 w-8 text-primary" aria-hidden="true" />
                    <h2 className="ml-4 text-base font-semibold leading-7 text-primary">
                      {service.title}
                    </h2>
                  </div>
                  <p className="mt-4 text-lg font-semibold text-gray-900">{service.description}</p>
                  <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                    {service.features.map((feature) => (
                      <div key={feature} className="relative pl-9">
                        <dt className="inline font-semibold text-gray-900">
                          <div className="absolute left-1 top-1 h-5 w-5 text-primary">
                            <PackageCheck className="h-4 w-4" />
                          </div>
                        </dt>
                        <dd className="inline">{feature}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
              <div className="relative">
                <Image
                  src={service.image}
                  alt={service.title}
                  className="w-full rounded-xl shadow-xl ring-1 ring-gray-400/10"
                  width={2432}
                  height={1442}
                />
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* CTA section */}
      <div className="bg-primary">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:justify-between lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to get started?
            <br />
            Get in touch with us today.
          </h2>
          <div className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:flex-shrink-0">
            <Link
              href="/contact"
              className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-primary shadow-sm hover:bg-gray-100"
            >
              Contact Us
            </Link>
            <a
              href="tel:9971981827"
              className="text-sm font-semibold leading-6 text-white"
            >
              Call us <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}