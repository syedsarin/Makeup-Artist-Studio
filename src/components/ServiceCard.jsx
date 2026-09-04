import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function ServiceCard({ service, onSelectService }) {
  return (
    <div 
      onClick={() => onSelectService(service)}
      className="luxury-card group overflow-hidden cursor-pointer flex flex-col h-full relative border border-[#E8E2DA] hover:border-[#C5A059]/50 transition-all duration-300 rounded-2xl bg-white shadow-sm hover:shadow-md"
    >
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden bg-[#F4EFEA]">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

        {/* Floating Top Tag */}
        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full border border-white/40 shadow-xs">
          <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-[#9B4B5A]">
            {service.title} Look
          </span>
        </div>

        {/* Hover Arrow Icon */}
        <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-md text-[#2C221E] flex items-center justify-center transform translate-y-1 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          <ArrowUpRight className="w-4 h-4" />
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow justify-between text-left">
        <div>
          <h3 className="font-serif text-2xl font-semibold text-[#2C221E] group-hover:text-[#9B4B5A] transition-colors mb-1">
            {service.title}
          </h3>
          <p className="text-xs font-medium text-[#C5A059] mb-3">
            {service.subtitle}
          </p>
          <p className="text-xs sm:text-sm text-[#6E655F] leading-relaxed line-clamp-3 mb-4">
            {service.description}
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[#F4EFEA]">
          {service.tags.map((tag, idx) => (
            <span 
              key={idx} 
              className="text-[10px] bg-[#FAF8F5] text-[#6E655F] px-2.5 py-1 rounded-md border border-[#E8E2DA]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
