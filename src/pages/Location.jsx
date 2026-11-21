import React from 'react';
import { 
  MapPin, 
  Navigation, 
  Phone, 
  Clock, 
  Car, 
  Bus, 
  CheckCircle2, 
  ExternalLink,
  MessageCircle 
} from 'lucide-react';
import PageHeader from '../components/PageHeader';
import { GYM_CONFIG, GYM_IMAGES } from '../data/gymData';

export default function Location() {
  const directionsHighlights = [
    {
      title: "Prime Commercial Access",
      desc: "Located on Cross-Cut Road, Gandhipuram, directly accessible from all major commercial centers in Coimbatore.",
      icon: <MapPin className="w-5 h-5 text-brand-red" />
    },
    {
      title: "Dedicated Member Parking",
      desc: "Ample 2-wheeler and designated 4-wheeler parking space located directly in front of the gym building.",
      icon: <Car className="w-5 h-5 text-brand-red" />
    },
    {
      title: "Transit Accessibility",
      desc: "Only 400 meters from the Gandhipuram Central Bus Stand. Multiple city bus routes pass right by the gym entrance.",
      icon: <Bus className="w-5 h-5 text-brand-red" />
    }
  ];

  return (
    <div className="bg-[#0B0B0B] text-white">
      {/* Page Header */}
      <PageHeader
        tag="LOCATION & HOURS"
        title="FIND AP GYM"
        subtitle="Conveniently situated in the heart of Coimbatore with accessible parking, pristine changing amenities, and extended training hours."
        bgImage={GYM_IMAGES.cardioTreadmills}
        breadcrumb={[{ label: "Location" }]}
      />

      {/* Main Location Section */}
      <section className="py-20 md:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Address, Hours, Transit, and Get Directions */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center space-x-2 mb-3">
                <span className="text-xs uppercase font-extrabold tracking-[0.2em] text-brand-red">
                  VISIT OUR FACILITY
                </span>
                <span className="w-8 h-[2px] bg-brand-red" />
              </div>

              <h2 className="text-3xl sm:text-4xl font-heading font-extrabold uppercase text-white tracking-wide">
                COME TRAIN WITH US IN PERSON.
              </h2>

              <p className="mt-3 text-sm sm:text-base text-[#A6A6A6] leading-relaxed">
                Step inside, take a walk across our equipment floor, and experience the energy of AP GYM. Our front desk staff is always ready to guide you.
              </p>
            </div>

            {/* Address Box */}
            <div className="p-6 rounded-2xl bg-[#141414] border border-[#242424] space-y-4">
              <div className="flex items-start space-x-3.5">
                <MapPin className="w-6 h-6 text-brand-red shrink-0 mt-1" />
                <div>
                  <h3 className="text-base font-bold uppercase tracking-wider text-white">
                    Gym Address
                  </h3>
                  <p className="text-sm text-[#CCCCCC] mt-1 leading-relaxed">
                    {GYM_CONFIG.address}
                  </p>
                  <p className="text-xs text-[#8C8C8C] mt-2">
                    Landmark: Near Cross-Cut Road Commercial Junction.
                  </p>
                </div>
              </div>

              {/* Get Directions Button */}
              <div className="pt-2">
                <a
                  href={GYM_CONFIG.googleMapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center w-full py-3.5 px-6 rounded-xl bg-brand-red hover:bg-brand-red-hover text-white text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-glow-red"
                >
                  <Navigation className="w-4 h-4 mr-2" />
                  <span>Get Directions on Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 ml-2 opacity-80" />
                </a>
              </div>
            </div>

            {/* Operating Hours Table */}
            <div className="p-6 rounded-2xl bg-[#141414] border border-[#242424]">
              <div className="flex items-center space-x-3 mb-4">
                <Clock className="w-5 h-5 text-brand-red" />
                <h3 className="text-base font-bold uppercase tracking-wider text-white">
                  Opening Hours
                </h3>
              </div>

              <div className="space-y-3">
                {GYM_CONFIG.openingHours.map((slot, index) => (
                  <div 
                    key={index}
                    className="flex items-center justify-between py-2 border-b border-[#202020] last:border-none text-xs sm:text-sm"
                  >
                    <span className="text-[#A6A6A6] font-medium">{slot.days}</span>
                    <span className="text-white font-bold">{slot.hours}</span>
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-4 border-t border-[#202020] text-xs text-[#8C8C8C] flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-brand-red shrink-0" />
                <span>Open 365 days a year with dedicated trainer shifts.</span>
              </div>
            </div>

            {/* Transit and Parking Info */}
            <div className="space-y-3">
              {directionsHighlights.map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-[#111111] border border-[#202020] flex items-start space-x-3.5">
                  <div className="p-2 rounded-lg bg-black shrink-0 border border-[#262626]">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-white">
                      {item.title}
                    </h4>
                    <p className="text-xs text-[#8C8C8C] mt-1 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Direct Hotline */}
            <div className="p-5 rounded-2xl bg-[#181818] border border-[#2A2A2A] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <div className="text-xs text-[#8C8C8C] uppercase font-bold">Need Help Finding Us?</div>
                <div className="text-base font-bold text-white mt-0.5">Call: {GYM_CONFIG.phoneDisplay}</div>
              </div>
              <a
                href={`tel:${GYM_CONFIG.phone}`}
                className="px-4 py-2 rounded-lg bg-brand-red text-white text-xs font-bold uppercase tracking-wider hover:bg-brand-red-hover"
              >
                Call Hotline
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Map Placeholder / Embed & Photo */}
          <div className="lg:col-span-7 space-y-8">
            <div className="rounded-3xl overflow-hidden border border-[#262626] bg-[#141414] shadow-2xl relative">
              {/* Header inside Map Box */}
              <div className="p-4 bg-[#181818] border-b border-[#262626] flex items-center justify-between text-xs text-[#A6A6A6]">
                <div className="flex items-center space-x-2 font-medium">
                  <MapPin className="w-4 h-4 text-brand-red" />
                  <span className="text-white font-semibold">{GYM_CONFIG.mapAddress}</span>
                </div>
                <span className="hidden sm:inline-block text-[11px] text-[#777777]">Interactive Map</span>
              </div>

              {/* Google Maps Embed Iframe */}
              <div className="relative w-full h-[450px] sm:h-[500px] bg-[#111111]">
                <iframe
                  title="AP Gym Coimbatore Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.326263595709!2d76.9634710758416!3d11.014101489150119!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859b4007823f9%3A0xe96fa4fa178e23f!2sCross%20Cut%20Rd%2C%20Gandhipuram%2C%20Coimbatore%2C%20Tamil%20Nadu%20641012!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(100%)' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="opacity-90 hover:opacity-100 transition-opacity"
                />

                {/* Floating Map Pin Badge */}
                <div className="absolute top-4 left-4 bg-[#0B0B0B]/90 backdrop-blur-md px-4 py-2.5 rounded-xl border border-white/10 shadow-xl flex items-center space-x-3 pointer-events-none">
                  <div className="w-8 h-8 rounded-lg bg-brand-red text-white flex items-center justify-center font-bold">
                    AP
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white uppercase tracking-wider">AP GYM COIMBATORE</div>
                    <div className="text-[10px] text-brand-red font-medium">Cross-Cut Road, Gandhipuram</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Gym Exterior / Atmosphere Visual */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="relative rounded-2xl overflow-hidden border border-[#242424] h-48 group">
                <img
                  src={GYM_IMAGES.interiorRed}
                  alt="AP Gym Entrance & Interior"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-xs font-bold uppercase tracking-wider text-white">
                  Main Arena Entrance
                </div>
              </div>

              <div className="relative rounded-2xl overflow-hidden border border-[#242424] h-48 group">
                <img
                  src={GYM_IMAGES.dumbbellsRack}
                  alt="AP Gym Floor"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-xs font-bold uppercase tracking-wider text-white">
                  Free Weights & Dumbbells Floor
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
