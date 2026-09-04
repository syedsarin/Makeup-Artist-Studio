import React, { useState, useEffect } from 'react';
import { X, Calendar, MessageCircle, Sparkles, CheckCircle2 } from 'lucide-react';
import { ARTIST_INFO } from '../data/bridalData';

export default function AvailabilityModal({ isOpen, onClose, selectedService = '' }) {
  const [formData, setFormData] = useState({
    name: '',
    eventDate: '',
    functionType: selectedService || 'Bridal',
    location: '',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (selectedService) {
      setFormData(prev => ({ ...prev, functionType: selectedService }));
    }
  }, [selectedService]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!isOpen) return null;

  const handleSubmitWhatsApp = (e) => {
    e.preventDefault();
    const message = `Hello ${ARTIST_INFO.name}! 👋
I would like to check availability for my wedding function:

📅 Event Date: ${formData.eventDate || 'Not decided yet'}
💄 Function Type: ${formData.functionType}
📍 Venue / City: ${formData.location || 'Mumbai'}
👤 Name: ${formData.name || 'Bride'}
📝 Notes: ${formData.notes || 'Looking forward to details.'}`;

    const whatsappUrl = `https://wa.me/${ARTIST_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="relative max-w-lg w-full bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#E8E2DA] max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#FAF8F5] text-[#6E655F] hover:text-[#2C221E] hover:bg-[#F4EFEA] flex items-center justify-center transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center animate-scale-up">
            <div className="w-16 h-16 rounded-full bg-[#F7EFF1] text-[#9B4B5A] flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="font-serif text-2xl font-semibold text-[#2C221E] mb-2">
              Opening WhatsApp...
            </h3>
            <p className="text-xs text-[#6E655F]">
              Your inquiry details have been formatted. We'll connect with you on WhatsApp right away!
            </p>
          </div>
        ) : (
          <div>
            {/* Header */}
            <div className="text-left mb-6">
              <div className="eyebrow eyebrow-no-line mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>DIRECT DATES CHECK</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#2C221E]">
                Check Date Availability
              </h3>
              <p className="text-xs sm:text-sm text-[#6E655F] mt-1">
                Fill in your event details below to get instant confirmation and package options on WhatsApp.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmitWhatsApp} className="space-y-4 text-left">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#6E655F] mb-1">
                  Your Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ananya Sharma"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#E8E2DA] text-sm text-[#2C221E] focus:outline-none focus:border-[#9B4B5A] focus:bg-white transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#6E655F] mb-1">
                    Event Date
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.eventDate}
                    onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#E8E2DA] text-sm text-[#2C221E] focus:outline-none focus:border-[#9B4B5A] focus:bg-white transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#6E655F] mb-1">
                    Function Look
                  </label>
                  <select
                    value={formData.functionType}
                    onChange={(e) => setFormData({ ...formData, functionType: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#E8E2DA] text-sm text-[#2C221E] focus:outline-none focus:border-[#9B4B5A] focus:bg-white transition-colors"
                  >
                    <option value="Bridal">Bridal Ceremony</option>
                    <option value="Pre-Wedding">Pre-Wedding / Sangeet</option>
                    <option value="Engagement">Engagement / Ring Ceremony</option>
                    <option value="Party">Party / Reception</option>
                    <option value="Hair">Hair Styling & Draping</option>
                    <option value="SIGNATURE Package">SIGNATURE Package</option>
                    <option value="LUXURY Package">LUXURY Package</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#6E655F] mb-1">
                  Venue City / Location
                </label>
                <input
                  type="text"
                  placeholder="e.g. Mumbai / Goa / Udaipur"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#E8E2DA] text-sm text-[#2C221E] focus:outline-none focus:border-[#9B4B5A] focus:bg-white transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#6E655F] mb-1">
                  Additional Notes (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Looking for mother of bride makeup as well..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#E8E2DA] text-sm text-[#2C221E] focus:outline-none focus:border-[#9B4B5A] focus:bg-white transition-colors resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="btn btn-primary btn-lg w-full justify-center shadow-rose"
                >
                  <MessageCircle className="w-5 h-5 fill-current" />
                  <span>Check Availability On WhatsApp</span>
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
