import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import ServiceCard from './ServiceCard';
import { openWhatsApp } from '../App';

import catBridal from '../assets/cat-bridal.jpg';
import catEngagement from '../assets/cat-engagement.jpg';
import catParty from '../assets/cat-party.jpg';
import catHair from '../assets/cat-hair.jpg';

export default function Services() {
  const [showAll, setShowAll] = useState(false);

  const CATEGORIES = [
    {
      id: "bridal",
      title: "BRIDAL",
      subtitle: "Traditional & Contemporary Luxury Bridal Look",
      description: "Complete bridal makeover including HD/Airbrush makeup, hairstyling, dupatta draping, and jewelry setting.",
      image: catBridal,
      actionText: "Shop Now"
    },
    {
      id: "engagement",
      title: "ENGAGEMENT",
      subtitle: "Sophisticated Soft Glam & Modern Ring Ceremony",
      description: "Soft romantic glam with subtle shimmer designed to complement couture gowns and lehengas.",
      image: catEngagement,
      actionText: "Shop Now"
    },
    {
      id: "party",
      title: "PARTY GLAM",
      subtitle: "Reception, Bridesmaid & Festive Styling",
      description: "High-impact evening looks with striking eyes or bold lips for wedding guests and reception galas.",
      image: catParty,
      actionText: "Shop Now"
    },
    {
      id: "hair",
      title: "HAIR & DRAPING",
      subtitle: "Couture Braids, Sleek Buns & Dupatta Draping",
      description: "Expert hair design using premium extensions, fresh floral gajras, and precision dupatta pinning.",
      image: catHair,
      actionText: "Shop Now"
    },
    {
      id: "pre-wedding",
      title: "PRE-WEDDING",
      subtitle: "Mehendi, Haldi & Sangeet Ceremonies",
      description: "Vibrant, dewy, and effortless styling tailored for festive pre-wedding daytime and dance celebrations.",
      image: "https://images.unsplash.com/photo-1529634806980-85c3dd6d34ac?auto=format&fit=crop&w=800&q=80",
      actionText: "Shop Now"
    }
  ];

  const displayedCategories = showAll ? CATEGORIES : CATEGORIES.slice(0, 4);

  return (
    <section id="services" className="py-12 sm:py-16 bg-[#FAF8F5] border-b border-[#ECE6DE]">
      <div className="container">
        {/* Section Header matching Image 2 */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-10 text-left">
          <div>
            {/* Script Eyebrow */}
            <span className="font-script text-2xl sm:text-3xl text-[#9E5244] leading-none block mb-1">
              Shop by
            </span>

            {/* Serif Title + Trailing Line */}
            <div className="flex items-center">
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] font-normal text-[#1F1917] tracking-tight leading-none">
                Category
              </h2>
              <span className="w-16 sm:w-28 h-[1.5px] bg-[#D4C5B6] ml-3 sm:ml-4 inline-block align-middle" />
            </div>
          </div>

          {/* VIEW ALL Link on Right */}
          <button
            onClick={() => setShowAll(!showAll)}
            className="self-start sm:self-end flex items-center gap-1.5 text-xs sm:text-[13px] font-bold tracking-wider text-[#1F1917] hover:text-[#A25345] transition-colors border-b border-[#1F1917] hover:border-[#A25345] pb-0.5 group cursor-pointer"
          >
            <span>{showAll ? 'SHOW LESS' : 'VIEW ALL'}</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* 4-Column Category Grid matching Image 2 with slightly increased card sizes */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-7 items-stretch">
          {displayedCategories.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.06 }}
            >
              <ServiceCard
                service={service}
                onSelectService={() => openWhatsApp(`Category Booking: ${service.title}`)}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
