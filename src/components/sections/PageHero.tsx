import Image from 'next/image';
import { cn } from '@/lib/utils';

type PageHeroProps = {
  eyebrow: string;
  title: React.ReactNode;
  description: string;
  image?: string;
  align?: 'left' | 'center';
  children?: React.ReactNode;
  className?: string;
};

export default function PageHero({ eyebrow, title, description, image, align = 'left', children, className }: PageHeroProps) {
  const centered = align === 'center';
  return (
    <section className={cn('relative isolate overflow-hidden bg-navy-deep', className)}>
      {image && (
        <Image src={image} alt="" fill priority sizes="100vw" className="-z-20 object-cover opacity-30" />
      )}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-deep via-navy-deep/90 to-navy/60" aria-hidden="true" />
      <div
        className="absolute -right-32 -top-32 -z-10 h-96 w-96 rounded-full bg-primary/20 blur-3xl"
        aria-hidden="true"
      />
      <div className={cn('section py-20 sm:py-24', children ? 'pb-28 sm:pb-32' : '')}>
        <div className={cn('max-w-2xl', centered && 'mx-auto text-center')}>
          <span className="eyebrow-chip">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />
            {eyebrow}
          </span>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">{title}</h1>
          <p className="mt-6 text-lg leading-8 text-slate-300">{description}</p>
        </div>
      </div>
      {children}
    </section>
  );
}
