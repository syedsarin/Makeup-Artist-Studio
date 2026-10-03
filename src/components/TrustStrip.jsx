import React from 'react';
import { TRUST_STATS } from '../data/bridalData';
import { Star, Heart, Award, Sparkles } from 'lucide-react';

export default function TrustStrip() {
  const getIcon = (iconName, isMobile = false) => {
    const sizeClass = isMobile ? "w-3.5 h-3.5" : "w-4 sm:w-5 h-4 sm:h-5";
    switch (iconName) {
      case 'Star':
        return <Star className={`${sizeClass} text-[#C5A059] fill-[#C5A059]`} />;
      case 'Heart':
        return <Heart className={`${sizeClass} text-[#9B4B5A] fill-[#9B4B5A]/20`} />;
      case 'Award':
        return <Award className={`${sizeClass} text-[#C5A059]`} />;
      case 'Sparkles':
        return <Sparkles className={`${sizeClass} text-[#9B4B5A]`} />;
      default:
        return <Star className={`${sizeClass} text-[#C5A059]`} />;
    }
  };

  return (
    <section className="bg-white border-y border-[#ECE6DE] py-2.5 sm:py-5 relative z-20 shadow-2xs">
      <div className="container">
        {/* MOBILE VIEW: All 4 badges fit in ONE SCREEN without slider */}
        <div className="grid grid-cols-4 gap-1 md:hidden py-1 px-0.5">
          {TRUST_STATS.map((stat) => (
            <div
              key={stat.id}
              className="flex flex-col items-center justify-between p-1 rounded-xl border border-[#ECE6DE] bg-[#FAF8F5] shadow-2xs text-center min-h-[72px]"
            >
              <div className="w-5 h-5 rounded-full bg-[#FAF5EB] border border-[#C5A059]/30 flex items-center justify-center shrink-0 mb-0.5">
                {getIcon(stat.icon, true)}
              </div>
              <div className="w-full">
                <div className="font-serif text-[9.5px] font-bold text-[#1F1917] leading-tight">
                  {stat.id === 'rating' ? (
                    <>
                      <span className="text-[7.5px] text-[#C5A059] block tracking-tighter leading-none mb-0.5">★★★★★</span>
                      <span>4.9 Rating</span>
                    </>
                  ) : stat.id === 'brides' ? (
                    <span>Happy Brides</span>
                  ) : stat.id === 'experience' ? (
                    <span>Years Exp</span>
                  ) : (
                    <span>Personalized</span>
                  )}
                </div>
                <div className="text-[7.5px] text-[#655E59] font-medium leading-tight mt-0.5 line-clamp-1">
                  {stat.id === 'rating'
                    ? '280+ Reviews'
                    : stat.id === 'brides'
                    ? 'Across India'
                    : stat.id === 'experience'
                    ? 'Bridal Mastery'
                    : 'Styling'}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* DESKTOP VIEW: 4 Columns Grid */}
        <div className="hidden md:grid md:grid-cols-4 gap-3 sm:gap-4 items-center justify-between">
          {TRUST_STATS.map((stat, idx) => (
            <div
              key={stat.id}
              className={`flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-2 sm:gap-2.5 px-1 sm:px-2 ${
                idx !== TRUST_STATS.length - 1 ? 'md:border-r md:border-[#ECE6DE]' : ''
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
