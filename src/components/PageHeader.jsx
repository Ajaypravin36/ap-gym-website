import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export default function PageHeader({ 
  tag = "AP GYM", 
  title, 
  subtitle, 
  bgImage = "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1920&auto=format&fit=crop",
  breadcrumb = []
}) {
  return (
    <div className="relative pt-32 pb-20 md:pt-40 md:pb-24 bg-[#0B0B0B] overflow-hidden border-b border-[#1E1E1E]">
      {/* Background Image with Dark Vignette Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30 transform scale-105 transition-transform duration-1000"
        style={{ backgroundImage: `url(${bgImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/80 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0B] via-transparent to-[#0B0B0B]" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-red/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center space-x-2 text-xs uppercase tracking-wider text-[#8A8A8A] mb-4">
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          {breadcrumb.map((item, idx) => (
            <React.Fragment key={idx}>
              <ChevronRight className="w-3.5 h-3.5 text-brand-red" />
              {item.path ? (
                <Link to={item.path} className="hover:text-white transition-colors">{item.label}</Link>
              ) : (
                <span className="text-brand-red font-semibold">{item.label}</span>
              )}
            </React.Fragment>
          ))}
        </nav>

        {/* Tagline */}
        <div className="flex items-center space-x-2 mb-2">
          <span className="text-xs uppercase font-extrabold tracking-widest text-brand-red">
            {tag}
          </span>
          <span className="w-8 h-[2px] bg-brand-red" />
        </div>

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-white tracking-wide uppercase">
          {title}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p className="mt-3 text-base sm:text-lg text-[#A6A6A6] max-w-2xl font-normal leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
