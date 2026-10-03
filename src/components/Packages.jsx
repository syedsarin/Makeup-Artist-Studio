import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { PACKAGES } from '../data/bridalData';
import PackageCard from './PackageCard';
import { ShieldCheck, Sparkles } from 'lucide-react';

const CATEGORIES = ['All', 'Bridal', 'Engagement', 'Party'];

export default function Packages() {
  const [activeCategory, setActiveCategory] = useState('All');

  useEffect(() => {
    const handleCategoryChange = (event) => {
      const category = event.detail;

      if (CATEGORIES.includes(category)) {
        setActiveCategory(category);
      }
    };

    window.addEventListener('selectPackageCategory', handleCategoryChange);

    return () => {
      window.removeEventListener(
        'selectPackageCategory',
        handleCategoryChange
      );
    };
  }, []);

  const filteredPackages =
    activeCategory === 'All'
      ? PACKAGES
      : PACKAGES.filter((pkg) => pkg.category === activeCategory);

  return (
    <section
      id="services"
      className="py-12 sm:py-16 bg-white border-b border-[#ECE6DE]"
    >
      <div className="container">
        {/* Service Packages */}
        <div
          id="service-packages"
          className="scroll-mt-24"
        >
          <div className="section-header">
            <div className="flex justify-center mb-3">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#FAF5EB] border border-[#A25345]/20 text-[#A25345] text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] shadow-2xs">
                <Sparkles className="w-3 h-3 text-[#A25345]" />
                <span>SERVICE PACKAGES</span>
              </div>
            </div>

            <h2 className="section-title">
              Curated Makeup & Styling Packages
            </h2>

            <p className="section-subtitle">
              Choose a package based on your occasion, styling needs and
              preferred level of service.
            </p>
          </div>

          {/* Category Filters */}
          <div className="w-full overflow-x-auto hide-scrollbar touch-scroll mb-5 sm:mb-7 pb-1">
            <div className="flex items-center justify-start sm:justify-center gap-2 sm:gap-2.5 min-w-max px-1">
              {CATEGORIES.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`
                    min-h-[36px] sm:min-h-[40px]
                    px-4 sm:px-5 py-1.5
                    rounded-full
                    text-xs sm:text-[13px]
                    font-medium
                    tracking-wide
                    transition-all duration-200
                    border
                    cursor-pointer
                    active:scale-95
                    ${activeCategory === category
                      ? 'bg-[#A25345] text-white border-[#A25345] shadow-sm font-semibold'
                      : 'bg-white text-[#655E59] border-[#ECE6DE] hover:border-[#A25345]'
                    }
                  `}
                >
                  {category === 'All'
                    ? 'All Services'
                    : `${category} Services`}
                </button>
              ))}
            </div>
          </div>

          {/* Service Package Grid */}
          {filteredPackages.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5 md:gap-6 items-start pt-1">
              {filteredPackages.map((pkg, index) => (
                <motion.div
                  key={pkg.id}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.35,
                    delay: index * 0.05,
                  }}
                  className="w-full"
                >
                  <PackageCard pkg={pkg} />
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 text-[#655E59] text-xs">
              No services available in this category yet.
            </div>
          )}
        </div>

        {/* Custom Destination Services */}
        <div className="mt-8 sm:mt-10 p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-[#FAF8F5] border border-[#ECE6DE] max-w-2xl mx-auto text-center flex flex-col sm:flex-row items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-[#FAF5EB] text-[#C5A059] border border-[#C5A059]/30 flex items-center justify-center shrink-0">
            <ShieldCheck className="w-5 h-5" />
          </div>

          <div className="text-left">
            <h4 className="font-serif text-sm sm:text-base font-semibold text-[#1F1917] mb-0.5">
              Destination & Multi-Event Services
            </h4>

            <p className="text-[11px] sm:text-xs text-[#655E59] leading-relaxed">
              Planning a multi-day destination wedding? Contact us for a
              customized service plan based on your dates, events, family
              looks and venue locations.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}