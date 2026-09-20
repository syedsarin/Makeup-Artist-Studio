import React, { useEffect, useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function PortfolioModal({ isOpen, items, currentIndex, onClose, onPrev, onNext }) {
  const [touchStart, setTouchStart] = useState(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onPrev, onNext, onClose]);

  if (!isOpen || !items || items.length === 0) return null;

  const currentItem = items[currentIndex] || items[0];

  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    if (!touchStart) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;
    if (diff > 50) onNext();
    if (diff < -50) onPrev();
    setTouchStart(null);
  };

  return (
    <div
      onClick={onClose}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/92 backdrop-blur-xs p-3 sm:p-6 select-none transition-opacity duration-200"
    >
      {/* Close Button (Top Right) */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        className="fixed top-4 right-4 sm:top-6 sm:right-6 z-50 flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-white/20 bg-white/10 text-white shadow-lg backdrop-blur-md transition-all hover:bg-white/25 active:scale-95"
        aria-label="Close Lightbox"
      >
        <X className="h-5 w-5 sm:h-6 sm:w-6" />
      </button>

      {/* Previous Button (Left) */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="fixed left-3 top-1/2 z-50 flex h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-white/20 bg-white/10 text-white shadow-lg backdrop-blur-md transition-all hover:bg-white/25 active:scale-95 sm:left-6 sm:h-13 sm:w-13"
        aria-label="Previous Image"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      {/* Next Button (Right) */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="fixed right-3 top-1/2 z-50 flex h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-white/20 bg-white/10 text-white shadow-lg backdrop-blur-md transition-all hover:bg-white/25 active:scale-95 sm:right-6 sm:h-13 sm:w-13"
        aria-label="Next Image"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Large Centered Image Preserving Aspect Ratio */}
      <div
        className="relative flex max-h-[88vh] max-w-[92vw] items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          key={currentItem.id}
          src={currentItem.image}
          alt=""
          className="max-h-[86vh] max-w-[90vw] rounded-md object-contain shadow-2xl transition-opacity duration-200"
        />
      </div>

      {/* Subtle Counter (Bottom Center) */}
      <div className="fixed bottom-4 left-1/2 z-50 -translate-x-1/2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-medium tracking-widest text-white/80 backdrop-blur-md sm:bottom-6 sm:text-sm">
        {currentIndex + 1} / {items.length}
      </div>
    </div>
  );
}
