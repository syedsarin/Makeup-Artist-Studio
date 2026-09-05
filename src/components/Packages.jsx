import React from 'react';
import { motion } from 'framer-motion';
import { PACKAGES } from '../data/bridalData';
import PackageCard from './PackageCard';
import { ShieldCheck } from 'lucide-react';

export default function Packages() {
  return (
    <section id="packages" className="section bg-white border-b border-[#E8E2DA]">
      <div className="container">
        <div className="section-header">
          <div className="eyebrow"><span>PRICING & PACKAGES</span></div>
          <h2 className="section-title">Curated Bridal Packages</h2>
          <p className="section-subtitle">
            Transparent luxury pricing crafted to provide flawless beauty experiences for your wedding day and pre-wedding functions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-6 items-stretch pt-4">
          {PACKAGES.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="flex"
            >
              <PackageCard pkg={pkg} />
            </motion.div>
          ))}
        </div>

        <div className="mt-10 sm:mt-12 p-5 sm:p-6 rounded-2xl bg-[#FAF8F5] border border-[#E8E2DA] max-w-3xl mx-auto text-center flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
          <div className="w-12 h-12 rounded-full bg-[#FAF5EB] text-[#C5A059] flex items-center justify-center shrink-0">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div className="text-left">
            <h4 className="font-serif text-lg font-semibold text-[#2C221E] mb-1">
              Custom Destination & Multi-Event Packages Available
            </h4>
            <p className="text-xs text-[#6E655F]">
              Planning a multi-day destination wedding? Contact us directly on WhatsApp to receive a bespoke quote customized for your dates, family looks, and venue locations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
