import React from 'react';
import { TRUST_STATS } from '../data/bridalData';
import { Star, Heart, Award, Sparkles } from 'lucide-react';

export default function TrustStrip() {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Star':
        return <Star className="w-5 h-5 text-[#C5A059] fill-[#C5A059]" />;
      case 'Heart':
        return <Heart className="w-5 h-5 text-[#9B4B5A] fill-[#9B4B5A]/20" />;
      case 'Award':
        return <Award className="w-5 h-5 text-[#C5A059]" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-[#9B4B5A]" />;
      default:
        return <Star className="w-5 h-5 text-[#C5A059]" />;
    }
  };

  return (
    <section className="bg-white border-y border-[#ECE6DE] py-3.5 sm:py-5 relative z-20 shadow-2xs">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 items-center justify-between">
          {TRUST_STATS.map((stat, idx) => (
            <div
              key={stat.id}
              className={`flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-2 sm:gap-2.5 px-1 sm:px-2 ${idx !== TRUST_STATS.length - 1 ? 'md:border-r md:border-[#ECE6DE]' : ''
                }`}
            >
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#FAF5EB] border border-[#C5A059]/30 flex items-center justify-center shrink-0">
                {getIcon(stat.icon)}
              </div>
              <div>
                <div className="font-serif text-sm sm:text-lg font-semibold text-[#1F1917] leading-tight">
                  {stat.label.includes('4.9') ? (
                    <span className="flex items-center justify-center md:justify-start gap-1">
                      <span className="text-[9px] sm:text-[10px] text-[#C5A059]">★★★★★</span>
                      <span>4.9 Rating</span>
                    </span>
                  ) : (
                    stat.label
                  )}
                </div>
                <div className="text-[9px] sm:text-[11px] text-[#655E59] font-medium mt-0.5 leading-tight">
                  {stat.subtitle}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
