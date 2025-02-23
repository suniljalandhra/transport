// src/components/layout/Footer.tsx
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin } from 'lucide-react';

const navigation = {
  main: [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ],
  services: [
    { name: 'Roadways Transport', href: '/services#roadways' },
    { name: 'Airways Freight', href: '/services#airways' },
    { name: 'Railways Logistics', href: '/services#railways' },
    { name: 'International Shipping', href: '/services#international' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <Image
              src="/images/logo.png"
              alt="Wing Logistics"
              width={150}
              height={40}
              className="h-10 w-auto"
            />
            <p className="text-sm leading-6 text-gray-600">
              Your trusted partner in transportation and logistics solutions across India and beyond.
            </p>
            <div className="space-y-2">
              <p className="flex items-center text-sm text-gray-600">
                <MapPin className="mr-2 h-5 w-5 text-primary" />
                ED-9 New Ashok Nagar Street No-21 New Delhi -110096
              </p>
              <p className="flex items-center text-sm text-gray-600">
                <Phone className="mr-2 h-5 w-5 text-primary" />
                <a href="tel:9971981827">+91 9971981827</a>
              </p>
              <p className="flex items-center text-sm text-gray-600">
                <Mail className="mr-2 h-5 w-5 text-primary" />
                <a href="mailto:logistics@winggroup.org">logistics@winggroup.org</a>
              </p>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div>
              <h3 className="text-sm font-semibold leading-6 text-gray-900">Navigation</h3>
              <ul role="list" className="mt-6 space-y-4">
                {navigation.main.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-sm leading-6 text-gray-600 hover:text-primary">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold leading-6 text-gray-900">Services</h3>
              <ul role="list" className="mt-6 space-y-4">
                {navigation.services.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-sm leading-6 text-gray-600 hover:text-primary">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-gray-500">
            &copy; {new Date().getFullYear()} Wing Logistics. All rights reserved. GSTIN: 07BBMPJ9356G1Z8
          </p>
        </div>
      </div>
    </footer>
  );
}