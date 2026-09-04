import React from 'react';
import { PORTFOLIO_CATEGORIES } from '../data/bridalData';

export default function PortfolioFilter({ activeCategory, onSelectCategory }) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
      {PORTFOLIO_CATEGORIES.map((category) => {
        const isActive = activeCategory === category;
        return (
          <button
            key={category}
            onClick={() => onSelectCategory(category)}
            className={`px-5 py-2 rounded-full text-xs sm:text-sm font-medium tracking-wide transition-all duration-300 ${
              isActive
                ? 'bg-[#9B4B5A] text-white shadow-rose scale-105'
                : 'bg-white text-[#6E655F] hover:text-[#2C221E] border border-[#E8E2DA] hover:border-[#C5A059]'
            }`}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}
