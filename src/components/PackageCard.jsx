import React from 'react';
import { Check, Sparkles, MessageCircle } from 'lucide-react';
import { openWhatsApp } from '../App';

export default function PackageCard({ pkg }) {
  const isSignature = pkg.popular;

  return (
    <div
      className={`luxury-card relative flex flex-col justify-between p-6 sm:p-8 rounded-3xl transition-all duration-300 w-full ${
        isSignature
          ? 'bg-gradient-to-b from-white via-[#FDFBF7] to-[#FAF5EB] border-2 border-[#C5A059] shadow-xl md:-translate-y-2'
          : 'bg-white border border-[#E8E2DA] hover:border-[#C5A059]/40'
      }`}
    >
      {isSignature && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#C5A059] text-white text-[11px] font-bold uppercase tracking-widest px-4 py-1 rounded-full shadow-md flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{pkg.badge}</span>
        </div>
      )}

      <div>
        <div className="text-center pb-6 border-b border-[#E8E2DA]">
          <h3 className={`font-serif text-2xl font-bold tracking-wide mb-2 ${isSignature ? 'text-[#9B4B5A]' : 'text-[#2C221E]'}`}>
            {pkg.name}
          </h3>
          <div className="flex items-baseline justify-center gap-1 my-3">
            <span className="font-serif text-4xl sm:text-5xl font-bold text-[#2C221E]">{pkg.price}</span>
            <span className="text-xs text-[#6E655F] font-medium">/ event</span>
          </div>
          <p className="text-xs text-[#6E655F] max-w-xs mx-auto leading-relaxed">{pkg.description}</p>
        </div>

        <div className="py-6 space-y-3.5">
          <div className="text-xs font-bold uppercase tracking-wider text-[#9B4B5A] mb-3 text-left">Package Inclusions:</div>
          {pkg.features.map((feature, idx) => (
            <div key={idx} className="flex items-start gap-3 text-left">
              <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${isSignature ? 'bg-[#C5A059] text-white' : 'bg-[#F7EFF1] text-[#9B4B5A]'}`}>
                <Check className="w-3.5 h-3.5 stroke-[3]" />
              </div>
              <span className="text-xs sm:text-sm text-[#2C221E] font-medium leading-snug">{feature}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-4 border-t border-[#E8E2DA]">
        <button
          onClick={() => openWhatsApp(`${pkg.name} Package`)}
          className={`btn w-full justify-center ${isSignature ? 'btn-primary btn-lg shadow-rose' : 'btn-secondary btn-lg'}`}
        >
          <MessageCircle className={`w-4 h-4 ${isSignature ? 'fill-white' : ''}`} />
          <span>WhatsApp Us</span>
        </button>
      </div>
    </div>
  );
}
