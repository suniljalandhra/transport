// src/app/about/page.tsx
import { CheckCircle, Users, Trophy, Building } from 'lucide-react';

const stats = [
  { name: 'Years of Experience', value: '25+' },
  { name: 'Successful Deliveries', value: '10K+' },
  { name: 'Cities Covered', value: '100+' },
  { name: 'Satisfied Clients', value: '500+' },
];

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
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-primary/20">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              About Wing Logistics
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Your trusted partner in logistics, delivering excellence across India through innovative transportation solutions.
            </p>
          </div>
        </div>
      </div>

      {/* Stats section */}
      <div className="mx-auto mt-8 max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.name} className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base leading-7 text-gray-600">{stat.name}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>

      {/* Company overview */}
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">Our Story</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Building Trust Through Excellence
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Wing Logistics has been at the forefront of transportation and logistics services, 
            providing comprehensive solutions for businesses across India. Our journey began with 
            a simple mission: to deliver reliable and efficient logistics services that help 
            businesses grow.
          </p>
        </div>
      </div>

      {/* Values section */}
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">Our Values</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            What Drives Us
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {values.map((value) => (
              <div key={value.name} className="flex flex-col items-center text-center">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10">
                  <value.icon className="h-8 w-8 text-primary" aria-hidden="true" />
                </div>
                <dt className="text-base font-semibold leading-7 text-gray-900">{value.name}</dt>
                <dd className="mt-1 text-base leading-7 text-gray-600">{value.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}