import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PORTFOLIO_ITEMS } from '../data/bridalData';
import PortfolioModal from './PortfolioModal';

import heroBrideHaloImg from '../assets/hero-bride-halo.jpg';
import catBridalImg from '../assets/cat-bridal.jpg';
import heroBrideMakeupImg from '../assets/hero-bride-makeup.jpg';
import catEngagementImg from '../assets/cat-engagement.jpg';
import catPartyImg from '../assets/cat-party.jpg';
import catHairImg from '../assets/cat-hair.jpg';

// Pure, image-focused gallery items with rich photo collection
const GALLERY_IMAGES = [

  {
    id: 'photo-20',
    category: 'Pre-Wedding',
    image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=900&q=85',
  },

  {
    id: 'photo-21',
    category: 'Pre-Wedding',
    image: '../public/B1.png',
  },

  {
    id: 'photo-22',
    category: 'Pre-Wedding',
    image: '../public/B2.png',
  },
  {
    id: 'photo-23',
    category: 'Pre-Wedding',
    image: '../public/B3.png',
  },
  {
    id: 'photo-24',
    category: 'Pre-Wedding',
    image: '../public/B4.png',
  },
  {
    id: 'photo-25',
    category: 'Pre-Wedding',
    image: '../public/B5.png',
  },
  {
    id: 'photo-26',
    category: 'Pre-Wedding',
    image: '../public/B6.png',
  },
  {
    id: 'photo-27',
    category: 'Pre-Wedding',
    image: '../public/B7.png',
  },
  {
    id: 'photo-28',
    category: 'Pre-Wedding',
    image: '../public/B8.png',
  },
  {
    id: 'photo-29',
    category: 'Pre-Wedding',
    image: '../public/B9.png',
  },
  {
    id: 'photo-30',
    category: 'Pre-Wedding',
    image: '../public/B11.png',
  },


  {
    id: 'feat-1',
    category: 'Bridal',
    image: heroBrideHaloImg,
  },
  {
    id: 'feat-2',
    category: 'Bridal',
    image: catBridalImg,
  },
  {
    id: 'feat-3',
    category: 'Bridal',
    image: heroBrideMakeupImg,
  },
  {
    id: 'feat-4',
    category: 'Engagement',
    image: catEngagementImg,
  },
  {
    id: 'feat-5',
    category: 'Party',
    image: catPartyImg,
  },
  {
    id: 'feat-6',
    category: 'Pre-Wedding',
    image: catHairImg,
  },

  {
    id: 'photo-7',
    category: 'Bridal',
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 'photo-8',
    category: 'Pre-Wedding',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 'photo-9',
    category: 'Engagement',
    image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 'photo-10',
    category: 'Bridal',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 'photo-11',
    category: 'Pre-Wedding',
    image: 'https://images.unsplash.com/photo-1529634806980-85c3dd6d34ac?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 'photo-12',
    category: 'Party',
    image: 'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 'photo-13',
    category: 'Bridal',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 'photo-14',
    category: 'Party',
    image: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 'photo-15',
    category: 'Bridal',
    image: 'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 'photo-16',
    category: 'Pre-Wedding',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 'photo-17',
    category: 'Engagement',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=85',
  },

  {
    id: 'photo-19',
    category: 'Bridal',
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=85',
  },

];

const CATEGORIES = ['All', 'Bridal', 'Pre-Wedding', 'Engagement', 'Party'];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filteredImages =
    activeCategory === 'All'
      ? GALLERY_IMAGES
      : GALLERY_IMAGES.filter((img) => img.category === activeCategory);

  const isLightboxOpen = lightboxIndex !== null;

  const handleOpenLightbox = (index) => {
    setLightboxIndex(index);
  };

  const handleCloseLightbox = () => {
    setLightboxIndex(null);
  };

  const handlePrevImage = () => {
    setLightboxIndex((prev) =>
      prev === null
        ? 0
        : (prev - 1 + filteredImages.length) % filteredImages.length
    );
  };

  const handleNextImage = () => {
    setLightboxIndex((prev) =>
      prev === null ? 0 : (prev + 1) % filteredImages.length
    );
  };

  return (
    <section
      id="portfolio"
      className="py-10 sm:py-14 lg:py-16 bg-[#FAF8F5] border-b border-[#ECE6DE]"
    >
      <div className="container">

        {/* Minimal Clean Header */}
        <div className="text-center max-w-xl mx-auto mb-6 sm:mb-8">
          <div className="flex items-center justify-center gap-2 mb-1.5">
            <span className="h-[1.5px] w-6 bg-[#C5A059]" />
            <span className="text-[10px] sm:text-xs font-semibold tracking-[0.22em] text-[#C5A059] uppercase">
              GALLERY
            </span>
            <span className="h-[1.5px] w-6 bg-[#C5A059]" />
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-[#1F1917]">
            Real Brides &amp; Portfolio
          </h2>
        </div>

        {/* Category Filters */}
        <div className="w-full overflow-x-auto hide-scrollbar touch-scroll mb-6 sm:mb-8 pb-1">
          <div className="flex items-center justify-start sm:justify-center gap-2 min-w-max px-1">
            {CATEGORIES.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => {
                    setActiveCategory(category);
                    setLightboxIndex(null);
                  }}
                  className={`min-h-[34px] sm:min-h-[38px] px-4 sm:px-5 py-1.5 rounded-full text-xs sm:text-[13px] font-medium tracking-wide transition-all duration-200 whitespace-nowrap active:scale-95 cursor-pointer border ${isActive
                    ? 'bg-[#1F1917] text-white border-[#1F1917] shadow-xs font-semibold'
                    : 'bg-white text-[#655E59] hover:text-[#1F1917] border-[#ECE6DE] hover:border-[#C5A059]'
                    }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Pure, Image-Focused Gallery Grid (Clean photos only) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5 sm:gap-4 md:gap-5 items-stretch">
          {filteredImages.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: (index % 8) * 0.03 }}
              onClick={() => handleOpenLightbox(index)}
              className="group relative cursor-pointer overflow-hidden rounded-xl sm:rounded-2xl bg-[#F4EFEA] border border-[#ECE6DE] hover:border-[#C5A059]/60 shadow-xs hover:shadow-lg transition-all duration-300"
            >
              {/* Clean Portrait Image Container */}
              <div className="relative w-full aspect-[4/5] overflow-hidden bg-[#ECE3D8]">
                <img
                  src={item.image}
                  alt=""
                  className="w-full h-full object-cover object-center group-hover:scale-104 transition-transform duration-500 ease-out"
                  loading="lazy"
                />
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Fullscreen Lightbox Modal with Arrow & Touch Navigation */}
      <PortfolioModal
        isOpen={isLightboxOpen}
        items={filteredImages}
        currentIndex={lightboxIndex || 0}
        onClose={handleCloseLightbox}
        onPrev={handlePrevImage}
        onNext={handleNextImage}
      />
    </section>
  );
}
