import React from 'react';
import { Plus, ArrowRight } from 'lucide-react';

export default function ServiceCard({ service, onSelectService }) {
  return (
    <div
      onClick={() => onSelectService(service)}
      className="group rounded-[24px] sm:rounded-[30px] bg-white border border-[#ECE4DB] p-3 sm:p-4 shadow-2xs hover:shadow-md transition-all duration-300 cursor-pointer flex flex-col justify-between h-full"
    >
      {/* Portrait Image Container matching Image 2 with slightly increased size */}
      <div className="relative aspect-[3/4] rounded-[18px] sm:rounded-[24px] overflow-hidden bg-[#ECE3D8] min-h-[220px] sm:min-h-[280px] lg:min-h-[320px]">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
          loading="lazy"
        />

        {/* Floating Top-Right Plus Circle Button matching Image 2 */}
        <div
          className="absolute top-3 right-3 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white text-[#1F1917] shadow-sm flex items-center justify-center font-bold text-base sm:text-lg group-hover:bg-[#A25345] group-hover:text-white transition-all duration-200 z-10"
          title="Quick View / Book"
        >
          <Plus className="w-4 h-4 sm:w-4.5 sm:h-4.5 stroke-[2.5]" />
        </div>
      </div>

      {/* Card Details matching Image 2 with comfortable typography */}
      <div className="pt-3.5 sm:pt-4 pb-1 px-1 text-left">
        {/* Uppercase Category Title */}
        <h3 className="font-bold text-sm sm:text-base tracking-wider text-[#1F1917] uppercase group-hover:text-[#A25345] transition-colors">
          {service.title}
        </h3>

        {/* Shop Now / Book Link with Right Arrow */}
        <div className="text-xs sm:text-[13px] font-medium text-[#1F1917] group-hover:text-[#A25345] flex items-center gap-1.5 mt-1 sm:mt-1.5 transition-colors">
          <span>{service.actionText || 'Shop Now'}</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1 text-[#1F1917] group-hover:text-[#A25345]" />
        </div>
      </div>
    </div>
  );
}
