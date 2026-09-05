import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Navigation, Mail, ExternalLink } from 'lucide-react';
import { ARTIST_INFO } from '../data/bridalData';

export default function Location() {
  const handleDirections = () => {
    window.open(ARTIST_INFO.mapsUrl, '_blank');
  };

  return (
    <section id="location" className="section bg-white border-b border-[#E8E2DA]">
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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch max-w-6xl mx-auto">
          
          {/* Studio Info Card */}
          <motion.div 
            className="lg:col-span-5 luxury-card p-6 sm:p-8 flex flex-col justify-between bg-[#FAF8F5] border border-[#E8E2DA] rounded-3xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <div className="mb-6">
                <span className="font-serif text-2xl font-bold text-[#2C221E] block mb-1">
                  {ARTIST_INFO.studioName}
                </span>
                <span className="text-xs font-sans uppercase font-bold tracking-widest text-[#C5A059]">
                  Bespoke Bridal Salon & Trial Suite
                </span>
              </div>

              {/* Detail Items */}
              <div className="space-y-5 my-6 text-left">
                
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white border border-[#E8E2DA] flex items-center justify-center text-[#9B4B5A] shrink-0 mt-0.5 shadow-xs">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#6E655F] mb-1">Address</h4>
                    <p className="text-sm text-[#2C221E] font-medium leading-relaxed">
                      {ARTIST_INFO.address}
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white border border-[#E8E2DA] flex items-center justify-center text-[#9B4B5A] shrink-0 mt-0.5 shadow-xs">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#6E655F] mb-1">Phone</h4>
                    <a href={`tel:${ARTIST_INFO.phone}`} className="text-sm text-[#2C221E] font-semibold hover:text-[#9B4B5A]">
                      {ARTIST_INFO.phone}
                    </a>
                  </div>
                </div>

                {/* Opening Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white border border-[#E8E2DA] flex items-center justify-center text-[#C5A059] shrink-0 mt-0.5 shadow-xs">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#6E655F] mb-1">Studio Hours</h4>
                    <p className="text-sm text-[#2C221E] font-medium">
                      {ARTIST_INFO.hours}
                    </p>
                    <p className="text-[11px] text-[#9A918A]">By Prior Appointment Only</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white border border-[#E8E2DA] flex items-center justify-center text-[#9B4B5A] shrink-0 mt-0.5 shadow-xs">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#6E655F] mb-1">Email</h4>
                    <a href={`mailto:${ARTIST_INFO.email}`} className="text-sm text-[#2C221E] font-medium hover:text-[#9B4B5A]">
                      {ARTIST_INFO.email}
                    </a>
                  </div>
                </div>

              </div>
            </div>

            {/* Directions Action */}
            <div className="pt-6 border-t border-[#E8E2DA]">
              <button
                onClick={handleDirections}
                className="btn btn-gold btn-lg w-full justify-center"
              >
                <Navigation className="w-4 h-4 fill-current" />
                <span>Get Directions</span>
                <ExternalLink className="w-3.5 h-3.5 ml-1" />
              </button>
            </div>
          </motion.div>

          {/* Map Preview Embed Frame */}
          <motion.div 
            className="lg:col-span-7 rounded-3xl overflow-hidden border border-[#E8E2DA] shadow-md relative bg-[#F4EFEA]" style={{ minHeight: '300px' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Interactive Embedded Google Map */}
            <iframe
              title="Studio Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.494793616654!2d72.8277!3d19.0596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDAzJzM0LjYiTiA3MsKwNDknND.fRS!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '300px', height: '100%' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full object-cover"
            />
            
            {/* Map Floating Location Pin Card */}
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md p-3 px-4 rounded-xl border border-white/60 shadow-md hidden sm:flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-[#9B4B5A] animate-ping" />
              <span className="text-xs font-bold text-[#2C221E]">Studio Open • Bandra West</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
