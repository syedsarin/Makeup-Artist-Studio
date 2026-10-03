import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronRight, Sparkles, ArrowLeft } from 'lucide-react';

export default function PageHeader({ eyebrow, title, subtitle, breadcrumb }) {
  const navigate = useNavigate();

  const handleBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate('/');
    }
  };

  return (
    <div className="relative overflow-hidden bg-[#FFF2F5] border-b border-[#ECE6DE] py-9 sm:py-12 lg:py-14 text-center">
      {/* Ambient Luxury Auras */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-[300px] w-[300px] rounded-full bg-[#FFD6E7]/40 blur-[80px] sm:h-[450px] sm:w-[450px]" />
      <div className="pointer-events-none absolute -bottom-24 -left-20 h-[300px] w-[300px] rounded-full bg-[#FFE8F0]/60 blur-[80px] sm:h-[400px] sm:w-[400px]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/60 blur-[100px]" />

      <div className="container relative z-10 max-w-4xl mx-auto px-4">
        {/* Breadcrumb Navigation & Back Action */}
        <div className="flex items-center justify-center gap-2.5 text-xs text-[#786E66] mb-3">
          <button
            onClick={handleBack}
            className="inline-flex cursor-pointer items-center gap-1.5 rounded-full border border-[#ECE6DE] bg-white/90 px-3 py-1 text-[11px] font-semibold text-[#1F1917] shadow-2xs transition-all hover:border-[#A25345] hover:text-[#A25345] active:scale-95"
            aria-label="Go Back"
          >
            <ArrowLeft className="w-3.5 h-3.5 text-[#A25345]" />
            <span>Back</span>
          </button>

          <span className="text-[#DDD5CB]">|</span>

          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5">
            <button
              onClick={handleBack}
              className="cursor-pointer hover:text-[#A25345] transition-colors"
            >
              Home
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-[#C5A059]" />
            <span className="font-semibold text-[#1F1917]">{breadcrumb || title}</span>
          </nav>
        </div>

        {/* Eyebrow */}
        {eyebrow && (
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-[#A25345]/15 bg-white/80 text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-[#A25345] mb-2.5 backdrop-blur-xs">
            <Sparkles className="w-3 h-3 text-[#A25345]" />
            <span>{eyebrow}</span>
          </div>
        )}

        {/* Title */}
        <h1 className="font-serif text-2xl sm:text-4xl lg:text-[42px] font-normal text-[#1F1917] tracking-tight leading-tight mb-2">
          {title}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p className="text-xs sm:text-sm text-[#655E59] max-w-2xl mx-auto leading-relaxed font-normal">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
