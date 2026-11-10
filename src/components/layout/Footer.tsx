import Link from 'next/link';
import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import Logo from './Logo';
import { mainNav, serviceNav, site } from '@/lib/site';

export default function Footer() {
  return (
    <footer className="bg-navy-deep text-slate-300" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="section pb-10 pt-16 sm:pt-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo variant="dark" />
            <p className="mt-6 max-w-sm text-sm leading-6 text-slate-400">
              Your trusted partner in transportation and logistics solutions across India and beyond — by road, air
              and rail.
            </p>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold text-white">Quick Links</h3>
            <ul role="list" className="mt-5 space-y-3">
              {mainNav.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-slate-400 transition-colors hover:text-primary">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold text-white">Services</h3>
            <ul role="list" className="mt-5 space-y-3">
              {serviceNav.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-slate-400 transition-colors hover:text-primary">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h3 className="text-sm font-semibold text-white">Corporate Office</h3>
            <ul role="list" className="mt-5 space-y-4 text-sm">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-5 w-5 flex-none text-primary" aria-hidden="true" />
                <span>
                  {site.addressLines[0]}
                  <br />
                  {site.addressLines[1]}
                </span>
              </li>
              <li className="flex gap-3">
                <Phone className="h-5 w-5 flex-none text-primary" aria-hidden="true" />
                <a href={site.phoneHref} className="hover:text-primary">
                  {site.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="h-5 w-5 flex-none text-primary" aria-hidden="true" />
                <a href={`mailto:${site.email}`} className="hover:text-primary">
                  {site.email}
                </a>
              </li>
              <li className="flex gap-3">
                <Clock className="mt-0.5 h-5 w-5 flex-none text-primary" aria-hidden="true" />
                <span>
                  {site.hours.map((h) => (
                    <span key={h.days} className="block">
                      {h.days}: {h.time}
                    </span>
                  ))}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-8 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Wing Logistics. All rights reserved.</p>
          <p className="font-mono tracking-wide">GSTIN: {site.gstin}</p>
        </div>
      </div>
    </footer>
  );
}
