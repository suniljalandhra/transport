import Link from 'next/link';
import { ArrowRight, Phone, Truck } from 'lucide-react';
import { site } from '@/lib/site';

type Props = {
  title?: string;
  description?: string;
  primaryLabel?: string;
};

export default function CallToAction({
  title = 'Ready to move your cargo? Get a quote today.',
  description = 'Talk to our New Delhi team about roadways, airways or railways shipments — domestic or international.',
  primaryLabel = 'Get a Quote',
}: Props) {
  return (
    <section className="section py-20 sm:py-24">
      <div className="relative isolate overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-[#0b6f9a] to-navy px-6 py-14 shadow-card-hover sm:px-12 sm:py-16">
        <Truck
          className="absolute -bottom-6 right-6 -z-10 h-48 w-48 text-white/10 sm:h-64 sm:w-64"
          strokeWidth={1.25}
          aria-hidden="true"
        />
        <div className="max-w-2xl">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">{title}</h2>
          <p className="mt-4 text-base leading-7 text-white/85 sm:text-lg">{description}</p>
        </div>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Link href="/contact" className="btn-white">
            {primaryLabel} <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <a href={site.phoneHref} className="btn-ghost-dark">
            <Phone className="h-4 w-4" aria-hidden="true" /> Call {site.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
