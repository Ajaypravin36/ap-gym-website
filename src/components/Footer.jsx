import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Instagram, Facebook, Youtube, ArrowRight, Clock } from 'lucide-react';
import Logo from './Logo';
import { GYM_CONFIG } from '../data/gymData';

export default function Footer() {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services & Coaching', path: '/services' },
    { name: 'Photo Gallery', path: '/gallery' },
    { name: 'Contact Us', path: '/contact' },
    { name: 'Gym Location', path: '/location' },
  ];

  return (
    <footer className="bg-[#080808] border-t border-[#1A1A1A] text-white">
      {/* Upper Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Brand & Bio */}
          <div className="space-y-4">
            <Logo />
            <p className="text-sm text-[#A6A6A6] leading-relaxed pt-2">
              AP GYM is dedicated to creating elite transformations through science-backed strength training, cutting-edge equipment, and an unbreakable community.
            </p>
            <div className="flex items-center space-x-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-[#181818] flex items-center justify-center text-[#A6A6A6] hover:text-white hover:bg-brand-red transition-all duration-200 border border-[#262626]"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-[#181818] flex items-center justify-center text-[#A6A6A6] hover:text-white hover:bg-brand-red transition-all duration-200 border border-[#262626]"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-[#181818] flex items-center justify-center text-[#A6A6A6] hover:text-white hover:bg-brand-red transition-all duration-200 border border-[#262626]"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-base font-bold font-subheading uppercase tracking-wider text-white border-l-2 border-brand-red pl-3 mb-4">
              Explore Pages
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-sm text-[#A6A6A6] hover:text-white hover:translate-x-1 inline-flex items-center transition-transform duration-200"
                  >
                    <ArrowRight className="w-3 h-3 text-brand-red mr-2" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Hours & Timing */}
          <div>
            <h4 className="text-base font-bold font-subheading uppercase tracking-wider text-white border-l-2 border-brand-red pl-3 mb-4">
              Operating Hours
            </h4>
            <div className="space-y-3 text-sm">
              {GYM_CONFIG.openingHours.map((item, idx) => (
                <div key={idx} className="bg-[#121212] p-2.5 rounded-lg border border-[#222222]">
                  <div className="font-semibold text-white flex items-center">
                    <Clock className="w-3.5 h-3.5 text-brand-red mr-1.5" />
                    {item.days}
                  </div>
                  <div className="text-[#A6A6A6] text-xs mt-1 ml-5">{item.hours}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 4: Contact & Location */}
          <div>
            <h4 className="text-base font-bold font-subheading uppercase tracking-wider text-white border-l-2 border-brand-red pl-3 mb-4">
              Direct Contact
            </h4>
            <ul className="space-y-3 text-sm text-[#A6A6A6]">
              <li className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-brand-red shrink-0 mt-1" />
                <span>{GYM_CONFIG.address}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-brand-red shrink-0" />
                <a href={`tel:${GYM_CONFIG.phone}`} className="hover:text-white transition-colors">
                  {GYM_CONFIG.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-brand-red shrink-0" />
                <a href={`mailto:${GYM_CONFIG.email}`} className="hover:text-white transition-colors">
                  {GYM_CONFIG.email}
                </a>
              </li>
            </ul>

            <div className="mt-5">
              <a
                href={GYM_CONFIG.getWhatsAppLink()}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center w-full py-2.5 px-4 rounded-lg bg-[#181818] hover:bg-[#202020] border border-[#2A2A2A] text-xs font-semibold text-white transition-colors"
              >
                <span>Quick WhatsApp Enquiry</span>
                <ArrowRight className="w-3.5 h-3.5 ml-2 text-brand-red" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar matching reference image */}
      <div className="border-t border-[#141414] py-6 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between text-xs text-[#737373] space-y-4 md:space-y-0">
          <div className="flex items-center space-x-6">
            <span className="font-semibold text-[#8C8C8C]">AP GYM</span>
            <div className="hidden sm:flex space-x-4">
              <Link to="/" className="hover:text-white">Home</Link>
              <Link to="/about" className="hover:text-white">About</Link>
              <Link to="/services" className="hover:text-white">Services</Link>
              <Link to="/gallery" className="hover:text-white">Gallery</Link>
              <Link to="/contact" className="hover:text-white">Contact</Link>
              <Link to="/location" className="hover:text-white">Location</Link>
            </div>
          </div>
          <div>
            © {new Date().getFullYear()} AP Gym. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
