// src/components/sections/WhyChooseUs.tsx
import { CheckCircle, Clock, Globe, Shield } from 'lucide-react';

const features = [
  {
    name: 'Nationwide Coverage',
    description: 'Extensive network covering all major cities and industrial hubs across India.',
    icon: Globe
  },
  {
    name: 'Time-Critical Deliveries',
    description: 'Specialized in handling time-sensitive shipments with precision and care.',
    icon: Clock
  },
  {
    name: 'Reliable Service',
    description: 'Consistent and dependable logistics solutions you can count on.',
    icon: CheckCircle
  },
  {
    name: 'Secure Handling',
    description: 'Advanced tracking and secure handling of your valuable cargo.',
    icon: Shield
  },
];

export default function WhyChooseUs() {
  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">Why Choose Wing Logistics</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Excellence in Every Delivery
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            With years of experience and a commitment to quality, we ensure your cargo reaches its destination safely and on time.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col items-center text-center">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10">
                  <feature.icon className="h-8 w-8 text-primary" aria-hidden="true" />
                </div>
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  {feature.name}
                </dt>
                <dd className="mt-1 text-base leading-7 text-gray-600">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}