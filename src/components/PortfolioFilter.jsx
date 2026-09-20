import React from 'react';
import { PORTFOLIO_CATEGORIES } from '../data/bridalData';

export default function PortfolioFilter({ activeCategory, onSelectCategory }) {
  return (
    <div className="w-full overflow-x-auto hide-scrollbar touch-scroll mb-4 sm:mb-6 pb-1">
      <div className="flex items-center justify-start sm:justify-center gap-1.5 sm:gap-2 min-w-max px-1">
        {PORTFOLIO_CATEGORIES.map((category) => {
          const isActive = activeCategory === category;
          return (
            <button
              key={category}
              onClick={() => onSelectCategory(category)}
              className={`min-h-[34px] sm:min-h-[36px] px-3.5 sm:px-4 py-1.5 rounded-full text-xs sm:text-[13px] font-medium tracking-wide transition-all duration-200 whitespace-nowrap active:scale-95 cursor-pointer border ${
                isActive
                  ? 'bg-[#1F1917] text-white border-[#1F1917] shadow-sm font-semibold'
                  : 'bg-white text-[#655E59] hover:text-[#1F1917] border-[#ECE6DE] hover:border-[#C5A059]'
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>
    </div>
  );
}
