// src/app/page.tsx
import Hero from '@/components/sections/Hero';
import ServicesOverview from '@/components/sections/ServicesOverview'
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import CallToAction from '@/components/sections/CallToAction';
import { Metadata } from 'next';
import HomePageSchema from '@/components/schema/HomePageSchema';

export const metadata: Metadata = {
  title: 'Wing Logistics - Your Trusted Transportation Partner in India',
  description: 'Trusted logistics company offering comprehensive transportation solutions through roadways, airways, and railways across India. Reliable, efficient, and on-time delivery.',
  alternates: {
    canonical: 'https://www.winggroup.org',
  },
}

export default function Home() {
  return (
    <>
      <HomePageSchema />
      <Hero />
      <ServicesOverview />
      <WhyChooseUs />
      <CallToAction />
    </>
  );
}