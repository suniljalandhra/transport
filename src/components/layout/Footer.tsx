// src/components/layout/Footer.tsx
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin } from 'lucide-react';
import localFont from 'next/font/local';

// Load the BANKGOTHIC BT MEDIUM font
const bankGothic = localFont({ 
  src: '../../fonts/BANKGOTHIC_MEDIUM_BT.ttf',
  variable: '--font-bankgothic',
  display: 'swap'
});

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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Company info section */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-8">
              {/* Using fixed sizes with Tailwind classes instead of style prop */}
              <Image
                src="/images/logo.png"
                alt="Wing Logistics"
                width={240}
                height={150}
                priority
                className="w-auto h-auto max-w-[200px]"
              />
            </div>
            <div className="mb-6">
              <span className={`text-2xl ${bankGothic.className}`}>
                <span className="text-primary">WING</span> LOGISTICS
              </span>
            </div>
            <p className="text-sm leading-6 text-gray-600 mb-6">
              Your trusted partner in transportation and logistics solutions across India and beyond.
            </p>
            <div className="space-y-3 text-left">
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

          {/* Operating Hours */}
          <div className="text-center lg:text-left">
            <h3 className="text-sm font-semibold leading-6 text-gray-900 mb-6">Operating Hours</h3>
            <p className="text-sm text-gray-600">Monday - Saturday: 9:00 AM - 7:00 PM</p>
            <p className="text-sm text-gray-600">Sunday: Closed</p>
          </div>

          {/* Navigation and Services */}
          <div className="grid grid-cols-2 gap-8">
            <div className="text-center lg:text-left">
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
            <div className="text-center lg:text-left">
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
        <div className="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24 text-center">
          <p className="text-xs leading-5 text-gray-500">
            &copy; {new Date().getFullYear()} Wing Logistics. All rights reserved. GSTIN: 07BBMPJ9356G1Z8
          </p>
        </div>
      </div>
    </footer>
  );
}