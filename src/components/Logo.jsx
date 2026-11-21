import React from 'react';
import { Link } from 'react-router-dom';

export default function Logo({ className = "", isLight = false }) {
  return (
    <Link to="/" className={`inline-flex flex-col items-start select-none group ${className}`}>
      <div className="flex items-center space-x-2">
        {/* Stylized Barbell Icon */}
        <div className="flex items-center text-brand-red">
          <svg className="w-8 h-8 fill-current transition-transform duration-300 group-hover:scale-105" viewBox="0 0 40 40">
            {/* Left Weight Plates */}
            <rect x="4" y="10" width="3.5" height="20" rx="1.5" />
            <rect x="9.5" y="13" width="2.5" height="14" rx="1" />
            {/* Center Bar */}
            <line x1="4" y1="20" x2="36" y2="20" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
            {/* Center Grip Knurling */}
            <line x1="16" y1="20" x2="24" y2="20" stroke={isLight ? "#0B0B0B" : "#FFFFFF"} strokeWidth="4" />
            {/* Right Weight Plates */}
            <rect x="28" y="13" width="2.5" height="14" rx="1" />
            <rect x="32.5" y="10" width="3.5" height="20" rx="1.5" />
          </svg>
        </div>

        {/* Text Logo */}
        <div className="flex items-baseline font-heading tracking-wider">
          <span className="text-2xl lg:text-3xl font-extrabold text-brand-red">AP</span>
          <span className={`text-2xl lg:text-3xl font-extrabold ml-1.5 ${isLight ? 'text-black' : 'text-white'}`}>
            GYM
          </span>
        </div>
      </div>
      
      {/* Subtitle Tagline */}
      <span className="text-[9px] tracking-[0.28em] font-bold text-[#A6A6A6] uppercase ml-10 -mt-1 group-hover:text-white transition-colors duration-200">
        STRONGER TOGETHER
      </span>
    </Link>
  );
}
