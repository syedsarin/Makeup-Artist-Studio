import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Sparkles, MessageCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { openWhatsApp } from '../App';

export default function PackageCard({ pkg }) {
  const [expanded, setExpanded] = useState(false);
  const isSignature = pkg.popular;

  const PREVIEW_COUNT = 2;
  const initialFeatures = pkg.features ? pkg.features.slice(0, PREVIEW_COUNT) : [];
  const remainingFeatures = pkg.features ? pkg.features.slice(PREVIEW_COUNT) : [];
  const hasMore = remainingFeatures.length > 0;

  return (
    <div
      className={`group luxury-card relative flex flex-col p-3 sm:p-4 md:p-5 rounded-2xl sm:rounded-3xl transition-all duration-300 w-full ${isSignature
        ? 'bg-gradient-to-b from-white via-[#FDFBF7] to-[#FAF8F5] border-2 border-[#C5A059] shadow-md hover:shadow-lg'
        : 'bg-white border border-[#ECE6DE] hover:border-[#C5A059]/60 hover:shadow-sm'
        }`}
    >
      {/* Signature Badge */}
      {isSignature && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#1F1917] text-[#E5D5BC] text-[8px] sm:text-[9.5px] font-bold uppercase tracking-widest px-3 py-0.5 rounded-full shadow-xs flex items-center gap-1.5 whitespace-nowrap z-10 border border-[#C5A059]/40">
          <Sparkles className="w-2.5 h-2.5 text-[#C5A059]" />
          <span>{pkg.badge}</span>
        </div>
      )}

      <div className="flex flex-col">
        {/* Service / Package Image */}
        {pkg.image && (
          <div className="relative aspect-[16/10] overflow-hidden rounded-xl sm:rounded-2xl mb-3 bg-[#FAF8F5]">
            <img
              src={pkg.image}
              alt={pkg.name}
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

            {pkg.category && (
              <span className="absolute bottom-2 left-2 text-[8px] sm:text-[9px] font-bold uppercase tracking-widest text-[#E5D5BC] bg-black/60 backdrop-blur-xs px-2 py-0.5 rounded-md">
                {pkg.category}
              </span>
            )}
          </div>
        )}

        {/* Header */}
        <div className="text-center pb-2.5 sm:pb-3 border-b border-[#ECE6DE]">
          <h3 className="font-serif text-sm sm:text-base md:text-lg font-semibold tracking-tight text-[#1F1917] group-hover:text-[#9B4B5A] transition-colors duration-200 line-clamp-1">
            {pkg.name}
          </h3>

          <div className="flex items-baseline justify-center gap-1 my-1">
            <span className="font-serif text-lg sm:text-2xl font-bold text-[#1F1917] tracking-tight">
              {pkg.price}
            </span>

            <span className="text-[10px] text-[#958D86] font-medium">
              / event
            </span>
          </div>

          <p className="text-[10px] sm:text-xs text-[#655E59] leading-snug line-clamp-2 min-h-[28px] sm:min-h-[32px]">
            {pkg.description}
          </p>
        </div>

        {/* Included Services / Features with Preview & Expand */}
        <div className="py-2.5 sm:py-3 space-y-1.5">
          {/* Initial preview features */}
          {initialFeatures.map((feature, idx) => (
            <div key={idx} className="flex items-start gap-1.5 text-left">
              <div className="w-3.5 h-3.5 rounded-full bg-[#FAF5EB] border border-[#C5A059]/30 text-[#C5A059] flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-2.5 h-2.5 stroke-[3]" />
              </div>

              <span className="text-[10.5px] sm:text-xs text-[#1F1917] font-medium leading-snug">
                {feature}
              </span>
            </div>
          ))}

          {/* Smoothly animated expanded features */}
          {hasMore && (
            <AnimatePresence initial={false}>
              {expanded && (
                <motion.div
                  key="more-features"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: 'easeInOut' }}
                  className="space-y-1.5 overflow-hidden pt-0.5"
                >
                  {remainingFeatures.map((feature, idx) => (
                    <div key={`rem-${idx}`} className="flex items-start gap-1.5 text-left">
                      <div className="w-3.5 h-3.5 rounded-full bg-[#FAF5EB] border border-[#C5A059]/30 text-[#C5A059] flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </div>

                      <span className="text-[10.5px] sm:text-xs text-[#1F1917] font-medium leading-snug">
                        {feature}
                      </span>
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          )}

          {/* Expand / Collapse Toggle Button */}
          {hasMore && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setExpanded(!expanded);
              }}
              className="inline-flex items-center gap-1 mt-1 text-[10.5px] sm:text-xs font-semibold text-[#A25345] hover:text-[#8D4437] transition-colors cursor-pointer group/exp focus:outline-none py-0.5"
            >
              <span>{expanded ? 'View Less' : `+${remainingFeatures.length} More Inclusions`}</span>
              {expanded ? (
                <ChevronUp className="w-3.5 h-3.5 transition-transform group-hover/exp:-translate-y-0.5" />
              ) : (
                <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover/exp:translate-y-0.5" />
              )}
            </button>
          )}
        </div>
      </div>

      {/* CTA - Fixed Controlled Width */}
      <div className="pt-2.5 sm:pt-3 border-t border-[#ECE6DE] mt-2.5 sm:mt-3.5 flex justify-center">
        <button
          onClick={() => openWhatsApp(`${pkg.name} Package`)}
          className="inline-flex items-center justify-center gap-1.5 w-full max-w-[185px] sm:w-[200px] min-h-[35px] sm:min-h-[38px] py-1.5 sm:py-2 px-3 sm:px-4 text-[11px] sm:text-xs font-semibold rounded-full cursor-pointer active:scale-98 transition-all normal-case tracking-normal bg-[#A25345] hover:bg-[#8D4437] text-white shadow-md shadow-[#A25345]/25 hover:shadow-lg hover:shadow-[#A25345]/35 mx-auto"
        >
          <MessageCircle className="w-3.5 h-3.5 fill-white text-white shrink-0" />
          <span className="hidden sm:inline">Enquire on WhatsApp</span>
          <span className="sm:hidden">Enquire Now</span>
        </button>
      </div>
    </div>
  );
}