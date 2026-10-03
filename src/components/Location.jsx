import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Navigation, Mail, MessageCircle, Instagram, ExternalLink } from 'lucide-react';
import { ARTIST_INFO } from '../data/bridalData';
import { openWhatsApp } from '../App';

const CONTACT_BADGES = [
  {
    icon: MapPin,
    label: 'Studio',
    value: 'Bandra West, Mumbai',
    sub: 'Suite 402, Luxury Promenade',
    color: 'bg-[#FFF0F3]',
    iconBg: 'bg-[#FD4659]',
    iconColor: 'text-white',
    border: 'border-[#FD4659]/20',
    accent: 'text-[#FD4659]',
  },
  {
    icon: Phone,
    label: 'Call Direct',
    value: ARTIST_INFO.phone,
    sub: 'Mon – Sun · 10 AM – 7 PM',
    href: `tel:${ARTIST_INFO.phone}`,
    color: 'bg-[#F0FFF4]',
    iconBg: 'bg-[#22C55E]',
    iconColor: 'text-white',
    border: 'border-[#22C55E]/20',
    accent: 'text-[#16A34A]',
  },
  {
    icon: Clock,
    label: 'Hours',
    value: '10 AM – 7 PM',
    sub: 'By Prior Appointment',
    color: 'bg-[#FFFBEB]',
    iconBg: 'bg-[#F59E0B]',
    iconColor: 'text-white',
    border: 'border-[#F59E0B]/20',
    accent: 'text-[#D97706]',
  },
  {
    icon: Mail,
    label: 'Email',
    value: ARTIST_INFO.email,
    sub: 'Replies within 24 hours',
    href: `mailto:${ARTIST_INFO.email}`,
    color: 'bg-[#F5F3FF]',
    iconBg: 'bg-[#8B5CF6]',
    iconColor: 'text-white',
    border: 'border-[#8B5CF6]/20',
    accent: 'text-[#7C3AED]',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: 'Quick Booking',
    sub: 'Fastest way to connect',
    isAction: true,
    color: 'bg-[#F0FDF4]',
    iconBg: 'bg-[#25D366]',
    iconColor: 'text-white',
    border: 'border-[#25D366]/20',
    accent: 'text-[#16A34A]',
  },
  {
    icon: Instagram,
    label: 'Instagram',
    value: '@ayeshamalikbridal',
    sub: 'Daily bridal looks',
    href: ARTIST_INFO.socials?.instagram,
    color: 'bg-[#FDF2F8]',
    iconBg: 'bg-gradient-to-br from-[#F97316] via-[#EC4899] to-[#8B5CF6]',
    iconColor: 'text-white',
    border: 'border-[#EC4899]/20',
    accent: 'text-[#DB2777]',
  },
];

export default function Location() {
  const handleDirections = () => {
    window.open(ARTIST_INFO.mapsUrl, '_blank');
  };

  return (
    <section id="location" className="section bg-white border-b border-[#ECE6DE]">
      <div id="contact" className="sr-only" aria-hidden="true" />
      <div className="container">

        {/* Section Header */}
        <div className="section-header">
          <div className="eyebrow">
            <span>CONTACT & STUDIO</span>
          </div>
          <h2 className="section-title">
            Get In Touch
          </h2>
          <p className="section-subtitle">
            Book a private bridal trial, request a custom quote, or simply say hello — we'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 items-start max-w-5xl mx-auto">

          {/* Contact Badge Grid (3 in row 1, 3 in row 2 on mobile) */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-2 gap-1.5 sm:gap-2.5 lg:gap-3">
              {CONTACT_BADGES.map(({ icon: Icon, label, value, sub, href, isAction, color, iconBg, iconColor, border, accent }, idx) => {
                const Inner = (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: idx * 0.04 }}
                    className={`group flex flex-col justify-between gap-1.5 p-2 sm:p-3 lg:p-3.5 rounded-xl sm:rounded-2xl border ${border} ${color} hover:shadow-md transition-all duration-200 cursor-pointer active:scale-[0.98] ${isAction ? 'hover:brightness-95' : ''}`}
                    onClick={isAction ? () => openWhatsApp('Studio Contact') : href ? () => { window.location.href = href; } : undefined}
                  >
                    {/* Icon */}
                    <div className={`w-7 h-7 sm:w-8 sm:h-8 lg:w-9 lg:h-9 rounded-lg sm:rounded-xl ${iconBg} ${iconColor} flex items-center justify-center shadow-xs shrink-0`}>
                      <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </div>

                    {/* Text */}
                    <div className="min-w-0 w-full text-left">
                      <p className={`text-[8px] sm:text-[9.5px] font-bold uppercase tracking-wider ${accent} mb-0.5 truncate`}>
                        {label}
                      </p>
                      <p className="text-[9.5px] sm:text-[11px] lg:text-xs font-semibold text-[#1F1917] leading-tight line-clamp-2">
                        {value}
                      </p>
                      <p className="text-[8px] sm:text-[9px] text-[#958D86] mt-0.5 leading-tight truncate hidden sm:block">
                        {sub}
                      </p>
                    </div>
                  </motion.div>
                );
                return Inner;
              })}
            </div>
          </motion.div>

          {/* Map + Directions */}
          <motion.div
            className="lg:col-span-7 flex flex-col gap-3"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {/* Map */}
            <div className="rounded-xl sm:rounded-2xl overflow-hidden border border-[#ECE6DE] shadow-xs relative bg-[#FAF8F5] min-h-[220px] sm:min-h-[300px]">
              <iframe
                title="Studio Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.494793616654!2d72.8277!3d19.0596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDAzJzM0LjYiTiA3MsKwNDknND.fRS!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '220px', height: '100%' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full object-cover"
              />
              {/* Map Floating Badge */}
              <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 bg-white/95 backdrop-blur-md p-2 px-3 rounded-lg border border-white/70 shadow-xs flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse" />
                <span className="text-[10px] sm:text-[11px] font-bold text-[#1F1917]">Studio Open · Bandra West</span>
              </div>
            </div>

            {/* Get Directions button */}
            <button
              onClick={handleDirections}
              className="btn btn-primary w-full justify-center min-h-[42px] text-xs normal-case tracking-normal rounded-xl"
            >
              <Navigation className="w-3.5 h-3.5" />
              <span>Get Directions on Google Maps</span>
              <ExternalLink className="w-3 h-3 ml-1" />
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
