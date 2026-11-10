import { CheckCircle, Clock, Globe, Shield } from 'lucide-react';

const features = [
  {
    name: 'Nationwide Coverage',
    description: 'Extensive network covering all major cities and industrial hubs across India.',
    icon: Globe,
  },
  {
    name: 'Time-Critical Deliveries',
    description: 'Specialized in handling time-sensitive shipments with precision and care.',
    icon: Clock,
  },
  {
    name: 'Reliable Service',
    description: 'Consistent and dependable logistics solutions you can count on.',
    icon: CheckCircle,
  },
  {
    name: 'Secure Handling',
    description: 'Advanced tracking and secure handling of your valuable cargo.',
    icon: Shield,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-surface-low py-20 sm:py-28">
      <div className="section grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="eyebrow">Why choose Wing Logistics</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            Excellence in Every Delivery
          </h2>
          <p className="mt-6 text-lg leading-8 text-ink-muted">
            With years of experience and a commitment to quality, we ensure your cargo reaches its destination safely
            and on time — whether it moves by road, air or rail.
          </p>
        </div>
        <dl className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:col-span-7">
          {features.map((feature) => (
            <div key={feature.name} className="card-interactive p-6">
              <div className="icon-badge">
                <feature.icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <dt className="mt-5 text-base font-bold text-navy">{feature.name}</dt>
              <dd className="mt-2 text-sm leading-6 text-ink-muted">{feature.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
