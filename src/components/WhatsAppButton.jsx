import React from 'react';
import { MessageCircle } from 'lucide-react';
import { GYM_CONFIG } from '../data/gymData';

export default function WhatsAppButton() {
  const whatsappUrl = GYM_CONFIG.getWhatsAppLink();

  return (
    <aside aria-label="Quick contact" className="fixed bottom-6 right-6 z-40 group">
      {/* Tooltip on hover */}
      <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#181818] text-white text-xs font-medium py-1.5 px-3 rounded-lg shadow-xl whitespace-nowrap border border-[#333333]">
        Chat on WhatsApp
        <div className="absolute right-[-4px] top-1/2 -translate-y-1/2 border-4 border-transparent border-l-[#181818]" />
      </div>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with AP GYM on WhatsApp"
        className="relative flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:bg-[#20ba59] transition-all duration-300 transform group-hover:scale-110 focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
      >
        {/* Pulsing ring animation */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-35 animate-ping group-hover:opacity-60" />
        
        {/* WhatsApp Icon */}
        <MessageCircle className="w-7 h-7 relative z-10 fill-current" />
      </a>
    </aside>
  );
}
