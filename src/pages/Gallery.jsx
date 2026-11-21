import React, { useState } from 'react';
import { Maximize2, Filter } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import Lightbox from '../components/Lightbox';
import { GALLERY_ITEMS, GYM_IMAGES } from '../data/gymData';

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const categories = ['All', 'Interior', 'Strength', 'Cardio', 'Training', 'Nutrition'];

  const filteredItems = selectedCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === selectedCategory);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? filteredItems.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === filteredItems.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="bg-[#0B0B0B] text-white min-h-screen">
      {/* Page Header */}
      <PageHeader
        tag="PHOTO GALLERY"
        title="THE IRON TEMPLE IN ACTION"
        subtitle="Explore our battle-tested equipment, high-energy environment, and the everyday grind of athletes pursuing their goals."
        bgImage={GYM_IMAGES.interiorRed}
        breadcrumb={[{ label: "Gallery" }]}
      />

      {/* Gallery Section */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Filters */}
        <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-brand-red text-white shadow-glow-red scale-105'
                  : 'bg-[#181818] text-[#8C8C8C] hover:text-white hover:bg-[#252525] border border-[#2A2A2A]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid with Staggered Reveal and Hover Zoom */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openLightbox(index)}
              className="group relative rounded-2xl overflow-hidden bg-[#141414] border border-[#222222] shadow-xl cursor-pointer aspect-[4/3] sm:aspect-[4/3] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl hover:border-brand-red/50"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                loading="lazy"
              />

              {/* Gradient Shade Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300" />

              {/* Top Category Badge */}
              <div className="absolute top-4 left-4 z-10">
                <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-black/60 backdrop-blur-md text-brand-red border border-white/10">
                  {item.category}
                </span>
              </div>

              {/* Top Right Zoom Icon */}
              <div className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/60 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-white/10">
                <Maximize2 className="w-4 h-4 text-brand-red" />
              </div>

              {/* Bottom Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-5 z-10 transform translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-base sm:text-lg font-heading uppercase tracking-wide text-white font-bold leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-[#A6A6A6] mt-1 line-clamp-1 group-hover:line-clamp-none transition-all">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State Guard */}
        {filteredItems.length === 0 && (
          <div className="text-center py-20 text-[#888888]">
            <p className="text-lg">No photos found in this category.</p>
          </div>
        )}
      </section>

      {/* Lightbox Modal */}
      <Lightbox
        items={filteredItems}
        currentIndex={currentIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </div>
  );
}
