'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, Phone, X, ArrowRight } from 'lucide-react';
import Logo from './Logo';
import { mainNav, site } from '@/lib/site';
import { cn } from '@/lib/utils';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setIsOpen(false), [pathname]);

  const isActive = (href: string) => (href === '/' ? pathname === '/' : pathname.startsWith(href));

  return (
    <header
      className={cn(
        'sticky top-0 z-50 border-b bg-white/80 backdrop-blur-md transition-shadow duration-300',
        scrolled ? 'border-slate-200/80 shadow-[0_8px_24px_-12px_rgba(11,31,51,0.18)]' : 'border-transparent'
      )}
    >
      <nav className="section flex h-[72px] items-center justify-between" aria-label="Main">
        <Logo />

        <div className="hidden items-center gap-1 md:flex">
          {mainNav.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              aria-current={isActive(item.href) ? 'page' : undefined}
              className={cn(
                'relative rounded-full px-4 py-2 text-sm font-semibold transition-colors',
                isActive(item.href) ? 'text-primary-deep' : 'text-ink-muted hover:text-navy'
              )}
            >
              {item.name}
              {isActive(item.href) && (
                <span className="absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full bg-primary" aria-hidden="true" />
              )}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-4 md:flex">
          <a
            href={site.phoneHref}
            className="hidden items-center gap-2 text-sm font-semibold text-navy hover:text-primary-deep lg:flex"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-soft text-primary-deep">
              <Phone className="h-4 w-4" aria-hidden="true" />
            </span>
            {site.phone}
          </a>
          <Link href="/contact" className="btn-primary px-5 py-2.5">
            Get a Quote
          </Link>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full text-navy hover:bg-surface-low md:hidden"
          onClick={() => setIsOpen((o) => !o)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          <span className="sr-only">{isOpen ? 'Close menu' : 'Open menu'}</span>
          {isOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
        </button>
      </nav>

      {isOpen && (
        <div id="mobile-menu" className="border-t border-slate-200/80 bg-white md:hidden">
          <div className="section space-y-1 py-4">
            {mainNav.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                aria-current={isActive(item.href) ? 'page' : undefined}
                className={cn(
                  'flex items-center justify-between rounded-xl px-4 py-3 text-base font-semibold',
                  isActive(item.href) ? 'bg-primary-soft text-primary-deep' : 'text-navy hover:bg-surface-low'
                )}
              >
                {item.name}
                <ArrowRight className="h-4 w-4 opacity-50" aria-hidden="true" />
              </Link>
            ))}
            <div className="grid grid-cols-2 gap-3 pt-3">
              <a href={site.phoneHref} className="btn border border-slate-200 text-navy">
                <Phone className="h-4 w-4" aria-hidden="true" /> Call
              </a>
              <Link href="/contact" className="btn-primary">
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
