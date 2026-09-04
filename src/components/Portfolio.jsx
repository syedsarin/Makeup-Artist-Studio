import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PORTFOLIO_ITEMS } from '../data/bridalData';
import PortfolioFilter from './PortfolioFilter';
import PortfolioModal from './PortfolioModal';
import { Eye, MessageCircle } from 'lucide-react';
import { openWhatsApp } from '../App';

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedItem, setSelectedItem] = useState(null);

  const filteredItems = activeCategory === 'All'
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter((item) => item.category === activeCategory);

  const getAspectClass = (ratio) => {
    switch (ratio) {
      case 'portrait': return 'aspect-[3/4]';
      case 'landscape': return 'aspect-[4/3]';
      default: return 'aspect-square';
    }
  };

  return (
    <section id="portfolio" className="section bg-[#FAF8F5]">
      <div className="container">
        <div className="section-header">
          <div className="eyebrow"><span>PORTFOLIO</span></div>
          <h2 className="section-title">Our Work</h2>
          <p className="section-subtitle">
            Explore our gallery of real brides, pre-wedding ceremonies, and couture evening looks crafted with precision and passion.
          </p>
        </div>

        <PortfolioFilter activeCategory={activeCategory} onSelectCategory={setActiveCategory} />

        <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6 items-start">
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                onClick={() => setSelectedItem(item)}
                className="group relative cursor-pointer overflow-hidden rounded-2xl bg-[#F4EFEA] border border-[#E8E2DA] hover:border-[#C5A059]/50 shadow-xs hover:shadow-lg transition-all duration-500"
              >
                <div className={`relative w-full ${getAspectClass(item.aspectRatio)} overflow-hidden`}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute top-2.5 left-2.5 bg-white/90 backdrop-blur-md px-2.5 py-0.5 rounded-full shadow-xs">
                    <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-[#9B4B5A]">
                      {item.category}
                    </span>
                  </div>
                  <div className="absolute inset-0 p-3 sm:p-5 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white bg-gradient-to-t from-black/75 via-black/20 to-transparent">
                    <h4 className="font-serif text-sm sm:text-lg font-semibold leading-tight mb-1 text-white">
                      {item.title}
                    </h4>
                    <div className="flex items-center gap-1 text-[11px] font-semibold text-[#E5D5BC]">
                      <Eye className="w-3.5 h-3.5" />
                      <span>View Detail</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="mt-12 text-center">
          <button
            onClick={() => openWhatsApp('Portfolio Inquiry')}
            className="btn btn-primary btn-lg group"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Book Your Customized Look</span>
          </button>
        </div>
      </div>

      <PortfolioModal
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
        onBook={(title) => openWhatsApp(title)}
      />
    </section>
  );
}
