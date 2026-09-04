import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { SERVICES } from '../data/bridalData';
import ServiceCard from './ServiceCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { openWhatsApp } from '../App';

export default function Services() {
  const scrollRef = useRef(null);
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  const handleScroll = () => {
    if (scrollRef.current) {
      const index = Math.round(scrollRef.current.scrollLeft / 300);
      setActiveCardIndex(index);
    }
  };

  const scroll = (direction) => {
    scrollRef.current?.scrollBy({ left: direction === 'left' ? -320 : 320, behavior: 'smooth' });
  };

  return (
    <section id="services" className="section bg-white border-y border-[#E8E2DA]">
      <div className="container">
        <div className="section-header">
          <div className="eyebrow"><span>EXPERTISE</span></div>
          <h2 className="section-title">Services Designed For Every Occasion</h2>
          <p className="section-subtitle">
            From intimate ceremonies to grand bridal galas, every look is customized to honor your style and features.
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-5 gap-6 items-stretch">
          {SERVICES.map((service) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <ServiceCard service={service} onSelectService={() => openWhatsApp(service.title)} />
            </motion.div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="block md:hidden relative">
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-6 px-1"
          >
            {SERVICES.map((service) => (
              <div key={service.id} className="snap-center shrink-0 w-[290px]">
                <ServiceCard service={service} onSelectService={() => openWhatsApp(service.title)} />
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between pt-3">
            <div className="flex items-center gap-1.5">
              {SERVICES.map((_, idx) => (
                <div
                  key={idx}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    activeCardIndex === idx ? 'w-6 bg-[#9B4B5A]' : 'w-1.5 bg-[#E8E2DA]'
                  }`}
                />
              ))}
            </div>
            <div className="flex items-center gap-2">
              <button onClick={() => scroll('left')} className="w-9 h-9 rounded-full bg-[#FAF8F5] border border-[#E8E2DA] flex items-center justify-center text-[#2C221E]" aria-label="Previous">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button onClick={() => scroll('right')} className="w-9 h-9 rounded-full bg-[#FAF8F5] border border-[#E8E2DA] flex items-center justify-center text-[#2C221E]" aria-label="Next">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
