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
    <section className="bg-white border-y border-[#E8E2DA] py-8 relative z-20 shadow-sm">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 items-center justify-between">
          {TRUST_STATS.map((stat, idx) => (
            <div 
              key={stat.id}
              className={`flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-3 px-3 ${
                idx !== TRUST_STATS.length - 1 ? 'md:border-r md:border-[#E8E2DA]' : ''
              }`}
            >
              <div className="w-10 h-10 rounded-full bg-[#FAF8F5] border border-[#E8E2DA] flex items-center justify-center shrink-0">
                {getIcon(stat.icon)}
              </div>
              <div>
                <div className="font-serif text-2xl font-semibold text-[#2C221E] leading-tight">
                  {stat.label.includes('4.9') ? (
                    <span className="flex items-center justify-center md:justify-start gap-1">
                      <span className="text-xs text-[#C5A059]">★★★★★</span>
                      <span>4.9 Rating</span>
                    </span>
                  ) : (
                    stat.label
                  )}
                </div>
                <div className="text-xs text-[#6E655F] font-medium mt-0.5">
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
