import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export default function Logo({ variant = 'light', className }: { variant?: 'light' | 'dark'; className?: string }) {
  const onDark = variant === 'dark';
  return (
    <Link href="/" className={cn('group flex items-center gap-3', className)}>
      <span
        className={cn(
          'flex h-11 w-16 items-center justify-center rounded-xl',
          onDark ? 'bg-white px-1.5 shadow-sm' : 'bg-transparent'
        )}
      >
        <Image src="/images/logo.png" alt="" width={952} height={350} priority className="h-auto w-full" />
      </span>
      <span className="flex flex-col leading-none">
        <span className={cn('font-brand text-lg tracking-wide', onDark ? 'text-white' : 'text-navy')}>
          <span className="text-primary">WING</span> LOGISTICS
        </span>
        <span className={cn('mt-1 text-[10px] font-semibold uppercase tracking-[0.18em]', onDark ? 'text-slate-400' : 'text-ink-subtle')}>
          New Delhi · Pan-India
        </span>
      </span>
      <span className="sr-only">Wing Logistics home</span>
    </Link>
  );
}
