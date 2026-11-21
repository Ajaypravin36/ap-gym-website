import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Lightbox({ items, currentIndex, isOpen, onClose, onPrev, onNext }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen || items.length === 0) return null;

  const currentItem = items[currentIndex];

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 sm:p-6 transition-all duration-300"
      onClick={onClose}
    >
      {/* Top Bar with Counter and Close Button */}
      <div 
        className="absolute top-4 left-4 right-4 flex items-center justify-between text-white z-50 pointer-events-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-[#181818]/80 backdrop-blur-sm px-4 py-1.5 rounded-full border border-[#333333] text-xs font-semibold tracking-wider text-[#D1D1D1]">
          {currentIndex + 1} / {items.length}
        </div>

        <button
          onClick={onClose}
          className="p-2.5 rounded-full bg-[#181818]/90 text-white hover:bg-brand-red transition-all duration-200 border border-[#333333]"
          aria-label="Close Lightbox"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Prev Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-[#181818]/80 text-white hover:bg-brand-red hover:text-white transition-all duration-200 border border-[#333333] z-50 focus:outline-none"
        aria-label="Previous Image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Next Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-[#181818]/80 text-white hover:bg-brand-red hover:text-white transition-all duration-200 border border-[#333333] z-50 focus:outline-none"
        aria-label="Next Image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Image Container */}
      <div 
        className="relative max-w-5xl max-h-[85vh] flex flex-col items-center justify-center select-none"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={currentItem.image}
          alt={currentItem.title}
          className="max-h-[75vh] w-auto object-contain rounded-lg shadow-2xl border border-[#222222]"
        />

        {/* Caption */}
        <div className="mt-4 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-red block mb-1">
            {currentItem.category}
          </span>
          <h3 className="text-lg md:text-xl font-heading text-white tracking-wide">
            {currentItem.title}
          </h3>
          {currentItem.description && (
            <p className="text-xs md:text-sm text-[#A6A6A6] mt-1 max-w-xl mx-auto">
              {currentItem.description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
