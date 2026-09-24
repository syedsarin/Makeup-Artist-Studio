import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Navigation, Mail, ExternalLink } from 'lucide-react';
import { ARTIST_INFO } from '../data/bridalData';

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
            <span>OUR STUDIO</span>
          </div>
          <h2 className="section-title">
            Visit Our Studio
          </h2>
          <p className="section-subtitle">
            Experience private bridal trials and consultations in our tranquil luxury beauty studio.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 items-stretch max-w-5xl mx-auto">
          
          {/* Studio Info Card */}
          <motion.div 
            className="lg:col-span-5 luxury-card p-3.5 sm:p-5 flex flex-col justify-between bg-[#FAF8F5] border border-[#ECE6DE] rounded-xl sm:rounded-2xl"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div>
              <div className="mb-3 sm:mb-4">
                <span className="font-serif text-base sm:text-lg font-bold text-[#1F1917] block mb-0.5">
                  {ARTIST_INFO.studioName}
                </span>
                <span className="text-[10px] sm:text-[11px] font-sans uppercase font-bold tracking-widest text-[#C5A059]">
                  Bespoke Bridal Salon & Trial Suite
                </span>
              </div>

              {/* Detail Items */}
              <div className="space-y-2.5 sm:space-y-3.5 my-3 sm:my-4 text-left">
                
                {/* Address */}
                <div className="flex items-start gap-2.5">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white border border-[#ECE6DE] flex items-center justify-center text-[#C5A059] shrink-0 mt-0.5 shadow-2xs">
                    <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                  <div>
                    <h4 className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-[#958D86] mb-0.5">Address</h4>
                    <p className="text-xs text-[#1F1917] font-medium leading-relaxed">
                      {ARTIST_INFO.address}
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-2.5">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white border border-[#ECE6DE] flex items-center justify-center text-[#C5A059] shrink-0 mt-0.5 shadow-2xs">
                    <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                  <div>
                    <h4 className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-[#958D86] mb-0.5">Phone</h4>
                    <a href={`tel:${ARTIST_INFO.phone}`} className="text-xs text-[#1F1917] font-semibold hover:text-[#9B4B5A]">
                      {ARTIST_INFO.phone}
                    </a>
                  </div>
                </div>

                {/* Opening Hours */}
                <div className="flex items-start gap-2.5">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white border border-[#ECE6DE] flex items-center justify-center text-[#C5A059] shrink-0 mt-0.5 shadow-2xs">
                    <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                  <div>
                    <h4 className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-[#958D86] mb-0.5">Studio Hours</h4>
                    <p className="text-xs text-[#1F1917] font-medium">
                      {ARTIST_INFO.hours}
                    </p>
                    <p className="text-[9.5px] sm:text-[10px] text-[#958D86]">By Prior Appointment Only</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-2.5">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white border border-[#ECE6DE] flex items-center justify-center text-[#C5A059] shrink-0 mt-0.5 shadow-2xs">
                    <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                  <div>
                    <h4 className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-[#958D86] mb-0.5">Email</h4>
                    <a href={`mailto:${ARTIST_INFO.email}`} className="text-xs text-[#1F1917] font-medium hover:text-[#9B4B5A]">
                      {ARTIST_INFO.email}
                    </a>
                  </div>
                </div>

              </div>
            </div>

            {/* Directions Action */}
            <div className="pt-3 sm:pt-4 border-t border-[#ECE6DE]">
              <button
                onClick={handleDirections}
                className="btn btn-primary btn-md w-full justify-center min-h-[40px] text-xs"
              >
                <Navigation className="w-3.5 h-3.5 fill-current" />
                <span>Get Directions</span>
                <ExternalLink className="w-3 h-3 ml-1" />
              </button>
            </div>
          </motion.div>

          {/* Map Preview Embed Frame */}
          <motion.div 
            className="lg:col-span-7 rounded-xl sm:rounded-2xl overflow-hidden border border-[#ECE6DE] shadow-xs relative bg-[#FAF8F5] min-h-[220px] sm:min-h-[280px]"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {/* Interactive Embedded Google Map */}
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
            
            {/* Map Floating Location Pin Card */}
            <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 bg-white/95 backdrop-blur-md p-2 px-3 rounded-lg border border-white/70 shadow-xs flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#9B4B5A]" />
              <span className="text-[10px] sm:text-[11px] font-bold text-[#1F1917]">Studio Open • Bandra West</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
