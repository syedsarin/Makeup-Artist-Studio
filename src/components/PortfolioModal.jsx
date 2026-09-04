import React, { useEffect } from 'react';
import { X, MessageCircle, Sparkles } from 'lucide-react';

export default function PortfolioModal({ item, onClose, onBook }) {
  useEffect(() => {
    const handleKeyDown = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div
        className="relative max-w-4xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl border border-white/20 flex flex-col md:flex-row max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/50 text-white hover:bg-black flex items-center justify-center transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="md:w-3/5 bg-black flex items-center justify-center overflow-hidden max-h-[50vh] md:max-h-none">
          <img src={item.image} alt={item.title} className="w-full h-full object-contain max-h-[80vh]" />
        </div>

        <div className="md:w-2/5 p-6 md:p-8 flex flex-col justify-between bg-[#FAF8F5]">
          <div>
            <div className="eyebrow mb-2"><span>{item.category} Look</span></div>
            <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#2C221E] mb-3">{item.title}</h3>
            <p className="text-sm text-[#6E655F] leading-relaxed mb-6">{item.description}</p>
            <div className="p-4 rounded-xl bg-white border border-[#E8E2DA] mb-6">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#9B4B5A] mb-1">
                <Sparkles className="w-4 h-4 text-[#C5A059]" />
                <span>Signature Artistry</span>
              </div>
              <p className="text-xs text-[#6E655F]">
                Hand-blended contouring, lightweight skin prep, and customized hair styling tailored for camera perfection.
              </p>
            </div>
          </div>

          <div className="pt-4 border-t border-[#E8E2DA]">
            <button
              onClick={() => { onClose(); onBook(item.title); }}
              className="btn btn-primary w-full justify-center"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Book Similar Look on WhatsApp</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
