import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Dumbbell, 
  Flame, 
  Users, 
  Heart, 
  ShieldCheck, 
  Award, 
  Sparkles, 
  Calendar,
  Phone,
  Mail,
  MapPin,
  ChevronRight
} from 'lucide-react';
import { GYM_CONFIG, GYM_IMAGES, SERVICES_DATA } from '../data/gymData';

export default function Home() {
  return (
    <div className="overflow-hidden bg-[#0B0B0B] text-white">
      {/* =========================================================================
          SECTION 1: HERO
          ========================================================================= */}
      <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
        {/* Background Image of Athlete working out with dumbbells with red/dark moody lighting */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 transform scale-105"
          style={{ 
            backgroundImage: `url(${GYM_IMAGES.hero})`,
            backgroundPosition: 'right 20% center'
          }}
        />

        {/* Cinematic Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0B] via-[#0B0B0B]/85 sm:via-[#0B0B0B]/75 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-transparent to-[#0B0B0B]/70 z-10" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0B0B0B] to-transparent z-10" />
        
        {/* Ambient Red Glow Spotlight */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-red/20 rounded-full blur-[120px] pointer-events-none z-10" />

        {/* Content Container */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20 w-full py-12 md:py-20">
          <div className="max-w-2xl">
            {/* Tag / Category Badge */}
            <div className="inline-flex items-center space-x-2 mb-4">
              <span className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.25em] text-brand-red">
                AP GYM
              </span>
              <span className="w-10 h-[2px] bg-brand-red" />
            </div>

            {/* Headline */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-extrabold tracking-tight uppercase leading-[0.9] text-white">
              TRAIN HARD.<br />
              <span className="text-brand-red">BUILD YOURSELF.</span>
            </h1>

            {/* Supporting Text */}
            <p className="mt-6 text-base sm:text-lg md:text-xl text-[#D1D1D1] font-normal tracking-wide max-w-xl">
              Your Journey. Your Strength. Your Transformation.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-brand-red text-white text-sm font-bold uppercase tracking-wider hover:bg-brand-red-hover transition-all duration-300 shadow-glow-red hover:shadow-glow-red-lg transform hover:-translate-y-0.5 group"
              >
                <span>Join Now</span>
                <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                to="/services"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[#181818]/90 hover:bg-[#252525] text-white text-sm font-bold uppercase tracking-wider border border-[#333333] hover:border-[#555555] transition-all duration-300 backdrop-blur-sm"
              >
                <span>Explore Services</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Down Indicator on Right Edge (matches reference) */}
        <div className="hidden lg:flex absolute right-8 top-1/2 -translate-y-1/2 flex-col items-center space-y-3 z-20 text-xs font-semibold tracking-widest text-[#888888] select-none">
          <span className="writing-vertical-rl rotate-180 uppercase tracking-[0.2em] text-[10px]">
            Scroll Down
          </span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-brand-red to-transparent animate-pulse" />
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: ABOUT AP GYM
          ========================================================================= */}
      <section className="py-20 md:py-28 bg-[#0B0B0B] border-t border-[#181818] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left: Gym Interior with Red Neon Accent Line */}
            <div className="lg:col-span-6 relative">
              <div className="relative group overflow-hidden rounded-2xl border-l-4 border-brand-red shadow-2xl">
                <img
                  src={GYM_IMAGES.interiorRed}
                  alt="AP Gym Neon Interior"
                  className="w-full h-[360px] sm:h-[420px] md:h-[480px] object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-md p-3.5 rounded-xl border border-white/10 flex items-center justify-between">
                  <div>
                    <div className="text-xs uppercase font-bold tracking-wider text-brand-red">High Performance Arena</div>
                    <div className="text-sm font-semibold text-white">Commercial Grade Equipment</div>
                  </div>
                  <Dumbbell className="w-5 h-5 text-brand-red" />
                </div>
              </div>

              {/* Decorative Subtle Background Element */}
              <div className="absolute -bottom-6 -right-6 w-36 h-36 bg-brand-red/10 rounded-full blur-2xl -z-10" />
            </div>

            {/* Right: Copy & Value Pillars */}
            <div className="lg:col-span-6">
              <div className="inline-flex items-center space-x-2 mb-3">
                <span className="text-xs uppercase font-extrabold tracking-[0.2em] text-brand-red">
                  ABOUT AP GYM
                </span>
                <span className="w-8 h-[2px] bg-brand-red" />
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold uppercase tracking-tight text-white leading-tight">
                MORE THAN JUST A GYM.
              </h2>

              <p className="mt-5 text-base sm:text-lg text-[#A6A6A6] leading-relaxed">
                At AP Gym, we believe fitness is not just about building a better body, but a stronger mind and a healthier life. Our goal is to help you reach your full potential with the right training, support and environment.
              </p>

              {/* Three Value Badges (matches reference image icons) */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10 pt-8 border-t border-[#1C1C1C]">
                {/* Modern Equipment */}
                <div className="flex flex-col items-start space-y-2 group">
                  <div className="w-12 h-12 rounded-xl bg-[#181818] border border-[#2A2A2A] flex items-center justify-center text-brand-red group-hover:bg-brand-red group-hover:text-white transition-colors duration-300">
                    <Dumbbell className="w-6 h-6" />
                  </div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-white">
                    Modern Equipment
                  </h3>
                  <p className="text-xs text-[#8C8C8C] leading-normal">
                    Precision bio-mechanics & heavy-duty iron.
                  </p>
                </div>

                {/* Expert Trainers */}
                <div className="flex flex-col items-start space-y-2 group">
                  <div className="w-12 h-12 rounded-xl bg-[#181818] border border-[#2A2A2A] flex items-center justify-center text-brand-red group-hover:bg-brand-red group-hover:text-white transition-colors duration-300">
                    <Users className="w-6 h-6" />
                  </div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-white">
                    Expert Trainers
                  </h3>
                  <p className="text-xs text-[#8C8C8C] leading-normal">
                    Certified coaches who push you past limits.
                  </p>
                </div>

                {/* Supportive Community */}
                <div className="flex flex-col items-start space-y-2 group">
                  <div className="w-12 h-12 rounded-xl bg-[#181818] border border-[#2A2A2A] flex items-center justify-center text-brand-red group-hover:bg-brand-red group-hover:text-white transition-colors duration-300">
                    <Heart className="w-6 h-6" />
                  </div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-white">
                    Supportive Community
                  </h3>
                  <p className="text-xs text-[#8C8C8C] leading-normal">
                    Encouraging athletes who lift each other up.
                  </p>
                </div>
              </div>

              {/* Learn More Link */}
              <div className="mt-8">
                <Link
                  to="/about"
                  className="inline-flex items-center text-sm font-bold uppercase tracking-wider text-white hover:text-brand-red transition-colors group"
                >
                  <span>Discover Our Story & Facilities</span>
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1 text-brand-red" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: OUR SERVICES (Clean Light Background for Maximum Visual Impact)
          Matches Reference Image Section 3
          ========================================================================= */}
      <section className="py-20 md:py-28 bg-[#FFFFFF] text-[#0B0B0B] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Header Column */}
            <div className="lg:col-span-4">
              <div className="inline-flex items-center space-x-2 mb-3">
                <span className="text-xs uppercase font-extrabold tracking-[0.2em] text-brand-red">
                  OUR SERVICES
                </span>
                <span className="w-8 h-[2px] bg-brand-red" />
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold uppercase tracking-tight text-[#0B0B0B] leading-none">
                WHAT WE OFFER
              </h2>

              <p className="mt-5 text-base text-[#555555] leading-relaxed">
                From strength training to personal coaching, we have everything you need to achieve your goals.
              </p>

              <div className="mt-8">
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-brand-red text-white text-xs font-bold uppercase tracking-wider hover:bg-brand-red-hover transition-all duration-300 shadow-md group"
                >
                  <span>View All Services</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Right Cards: 4 Dark / Charcoal Interactive Cards */}
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* 1. Strength Training */}
                <Link
                  to="/services"
                  className="group bg-[#0E0E0E] hover:bg-[#181818] p-6 rounded-2xl flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-lg border border-[#222222]"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-brand-red/10 text-brand-red flex items-center justify-center mb-6 group-hover:bg-brand-red group-hover:text-white transition-colors duration-300">
                      <Dumbbell className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-heading uppercase tracking-wide text-white font-bold">
                      Strength Training
                    </h3>
                    <p className="mt-2 text-xs text-[#999999] leading-relaxed">
                      Build strength. Build confidence.
                    </p>
                  </div>
                  <div className="mt-8 flex items-center text-xs font-bold text-brand-red group-hover:translate-x-1 transition-transform">
                    <span>Explore</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </div>
                </Link>

                {/* 2. Cardio Training */}
                <Link
                  to="/services"
                  className="group bg-[#0E0E0E] hover:bg-[#181818] p-6 rounded-2xl flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-lg border border-[#222222]"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-brand-red/10 text-brand-red flex items-center justify-center mb-6 group-hover:bg-brand-red group-hover:text-white transition-colors duration-300">
                      <Flame className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-heading uppercase tracking-wide text-white font-bold">
                      Cardio Training
                    </h3>
                    <p className="mt-2 text-xs text-[#999999] leading-relaxed">
                      Improve stamina. Boost endurance.
                    </p>
                  </div>
                  <div className="mt-8 flex items-center text-xs font-bold text-brand-red group-hover:translate-x-1 transition-transform">
                    <span>Explore</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </div>
                </Link>

                {/* 3. Personal Training */}
                <Link
                  to="/services"
                  className="group bg-[#0E0E0E] hover:bg-[#181818] p-6 rounded-2xl flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-lg border border-[#222222]"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-brand-red/10 text-brand-red flex items-center justify-center mb-6 group-hover:bg-brand-red group-hover:text-white transition-colors duration-300">
                      <Users className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-heading uppercase tracking-wide text-white font-bold">
                      Personal Training
                    </h3>
                    <p className="mt-2 text-xs text-[#999999] leading-relaxed">
                      Custom plans. Better results.
                    </p>
                  </div>
                  <div className="mt-8 flex items-center text-xs font-bold text-brand-red group-hover:translate-x-1 transition-transform">
                    <span>Explore</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </div>
                </Link>

                {/* 4. Nutrition Guidance */}
                <Link
                  to="/services"
                  className="group bg-[#0E0E0E] hover:bg-[#181818] p-6 rounded-2xl flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-lg border border-[#222222]"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-brand-red/10 text-brand-red flex items-center justify-center mb-6 group-hover:bg-brand-red group-hover:text-white transition-colors duration-300">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-heading uppercase tracking-wide text-white font-bold">
                      Nutrition Guidance
                    </h3>
                    <p className="mt-2 text-xs text-[#999999] leading-relaxed">
                      Eat right. Perform better.
                    </p>
                  </div>
                  <div className="mt-8 flex items-center text-xs font-bold text-brand-red group-hover:translate-x-1 transition-transform">
                    <span>Explore</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: WHY CHOOSE AP GYM?
          Matches Reference Image Section 4 (Muscular back on left, Center Copy, Right Angled Panel)
          ========================================================================= */}
      <section className="py-20 md:py-28 bg-[#0B0B0B] relative overflow-hidden border-t border-[#181818]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left Image: Muscular Back Physique with Red Highlights */}
            <div className="lg:col-span-4 relative rounded-2xl overflow-hidden min-h-[380px] lg:min-h-full border border-[#222222] shadow-2xl">
              <img
                src={GYM_IMAGES.backPhysique}
                alt="Muscular Back Strength AP Gym"
                className="w-full h-full object-cover object-center filter grayscale contrast-125 hover:grayscale-0 transition-all duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
              <div className="absolute inset-0 bg-brand-red/15 mix-blend-color" />
              <div className="absolute bottom-5 left-5 right-5">
                <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-brand-red block mb-1">
                  Peak Performance
                </span>
                <p className="text-sm font-heading tracking-wider uppercase text-white font-bold">
                  Engineered For Physical Greatness
                </p>
              </div>
            </div>

            {/* Center: Headline & 4 Feature Badges */}
            <div className="lg:col-span-5 flex flex-col justify-center py-4">
              <div className="inline-flex items-center space-x-2 mb-3">
                <span className="text-xs uppercase font-extrabold tracking-[0.2em] text-brand-red">
                  WHY CHOOSE AP GYM
                </span>
                <span className="w-8 h-[2px] bg-brand-red" />
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold uppercase tracking-tight text-white leading-tight">
                YOUR FITNESS. OUR PRIORITY.
              </h2>

              <p className="mt-4 text-sm sm:text-base text-[#A6A6A6] leading-relaxed">
                We provide a clean, safe and motivating environment with the best equipment and expert guidance to help you achieve your fitness goals.
              </p>

              {/* 4 Feature Badges in Grid (Matches Reference Image) */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                {/* 1. Professional Equipment */}
                <div className="flex items-start space-x-3 p-3 rounded-xl bg-[#141414] border border-[#242424]">
                  <div className="w-8 h-8 rounded-lg bg-brand-red/15 text-brand-red flex items-center justify-center shrink-0">
                    <Dumbbell className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-white">Professional</h3>
                    <p className="text-[11px] text-[#8C8C8C]">Equipment</p>
                  </div>
                </div>

                {/* 2. Certified Trainers */}
                <div className="flex items-start space-x-3 p-3 rounded-xl bg-[#141414] border border-[#242424]">
                  <div className="w-8 h-8 rounded-lg bg-brand-red/15 text-brand-red flex items-center justify-center shrink-0">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-white">Certified</h3>
                    <p className="text-[11px] text-[#8C8C8C]">Trainers</p>
                  </div>
                </div>

                {/* 3. Clean & Safe Environment */}
                <div className="flex items-start space-x-3 p-3 rounded-xl bg-[#141414] border border-[#242424]">
                  <div className="w-8 h-8 rounded-lg bg-brand-red/15 text-brand-red flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-white">Clean & Safe</h3>
                    <p className="text-[11px] text-[#8C8C8C]">Environment</p>
                  </div>
                </div>

                {/* 4. Flexible Membership */}
                <div className="flex items-start space-x-3 p-3 rounded-xl bg-[#141414] border border-[#242424]">
                  <div className="w-8 h-8 rounded-lg bg-brand-red/15 text-brand-red flex items-center justify-center shrink-0">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-white">Flexible</h3>
                    <p className="text-[11px] text-[#8C8C8C]">Membership</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Angled Banner "STRONGER HEALTHIER HAPPIER" with weights/dumbbell image */}
            <div className="lg:col-span-3 relative rounded-2xl overflow-hidden min-h-[300px] lg:min-h-full border border-brand-red/40 group">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${GYM_IMAGES.dumbbellsRack})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/75 to-brand-red/40" />

              <div className="relative h-full flex flex-col justify-between p-7 z-10">
                <div className="space-y-1">
                  <span className="text-xs uppercase font-extrabold tracking-widest text-brand-red">
                    THE PROMISE
                  </span>
                  <h3 className="text-3xl sm:text-4xl font-heading font-extrabold uppercase leading-[1.05] tracking-wide text-white">
                    STRONGER<br />
                    HEALTHIER<br />
                    HAPPIER
                  </h3>
                </div>

                <div className="pt-8">
                  <Link
                    to="/contact"
                    className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-white bg-brand-red/90 hover:bg-brand-red px-4 py-2.5 rounded-full transition-colors"
                  >
                    <span>Start Today</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: PHOTO GALLERY PREVIEW
          Matches Reference Image Section 5
          ========================================================================= */}
      <section className="py-20 md:py-28 bg-[#0B0B0B] border-t border-[#181818]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Row */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <div className="inline-flex items-center space-x-2 mb-3">
                <span className="text-xs uppercase font-extrabold tracking-[0.2em] text-brand-red">
                  GALLERY
                </span>
                <span className="w-8 h-[2px] bg-brand-red" />
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold uppercase tracking-tight text-white leading-none">
                SEE OUR GYM
              </h2>

              <p className="mt-3 text-sm sm:text-base text-[#A6A6A6] max-w-xl">
                Take a look at our facilities, equipment and the energy that drives us every day.
              </p>
            </div>

            <div className="mt-6 md:mt-0">
              <Link
                to="/gallery"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-transparent border border-[#3A3A3A] hover:border-brand-red text-white text-xs font-bold uppercase tracking-wider transition-all duration-300 group"
              >
                <span>View Full Gallery</span>
                <ArrowRight className="w-3.5 h-3.5 ml-2 transition-transform duration-300 group-hover:translate-x-1 text-brand-red" />
              </Link>
            </div>
          </div>

          {/* 4 Photo Cards Grid Preview */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* Photo 1: Interior Red */}
            <Link to="/gallery" className="group relative rounded-2xl overflow-hidden border border-[#262626] aspect-[4/5] block">
              <img
                src={GYM_IMAGES.interiorRed}
                alt="Gym Interior Lighting"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90 group-hover:opacity-60 transition-opacity" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-[10px] uppercase font-bold tracking-widest text-brand-red">Interior</span>
                <h4 className="text-sm font-heading uppercase text-white font-semibold">Strength Arena</h4>
              </div>
            </Link>

            {/* Photo 2: Athlete Training */}
            <Link to="/gallery" className="group relative rounded-2xl overflow-hidden border border-[#262626] aspect-[4/5] block">
              <img
                src={GYM_IMAGES.hero}
                alt="Dumbbell Training"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90 group-hover:opacity-60 transition-opacity" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-[10px] uppercase font-bold tracking-widest text-brand-red">Training</span>
                <h4 className="text-sm font-heading uppercase text-white font-semibold">Isolation Drills</h4>
              </div>
            </Link>

            {/* Photo 3: Racks and Bars */}
            <Link to="/gallery" className="group relative rounded-2xl overflow-hidden border border-[#262626] aspect-[4/5] block">
              <img
                src={GYM_IMAGES.barbellBench}
                alt="Olympic Racks"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90 group-hover:opacity-60 transition-opacity" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-[10px] uppercase font-bold tracking-widest text-brand-red">Strength</span>
                <h4 className="text-sm font-heading uppercase text-white font-semibold">Free Weights</h4>
              </div>
            </Link>

            {/* Photo 4: Treadmills */}
            <Link to="/gallery" className="group relative rounded-2xl overflow-hidden border border-[#262626] aspect-[4/5] block">
              <img
                src={GYM_IMAGES.cardioTreadmills}
                alt="Commercial Cardio Suite"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90 group-hover:opacity-60 transition-opacity" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-[10px] uppercase font-bold tracking-widest text-brand-red">Cardio</span>
                <h4 className="text-sm font-heading uppercase text-white font-semibold">Treadmill Row</h4>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6: FINAL CTA / PRE-FOOTER BANNER
          Matches Reference Image Section 6 with Exact Contact Info and Phone No
          ========================================================================= */}
      <section className="relative py-16 bg-[#0E0E0E] border-t border-b border-[#202020] overflow-hidden">
        {/* Background Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20 filter contrast-150"
          style={{ backgroundImage: `url(${GYM_IMAGES.interiorRed})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-red/25 via-[#0E0E0E]/90 to-[#0E0E0E]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left / Center: Action Headline & Button */}
            <div className="lg:col-span-7">
              <h2 className="text-3xl sm:text-4xl font-heading font-extrabold uppercase tracking-wide text-white leading-tight">
                Ready to Start Your Fitness Journey?
              </h2>
              <p className="mt-2 text-sm sm:text-base text-[#B0B0B0] max-w-xl">
                Join AP Gym today and take the first step towards a stronger, healthier you.
              </p>
              <div className="mt-6">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-brand-red text-white text-xs font-bold uppercase tracking-wider hover:bg-brand-red-hover transition-all duration-300 shadow-glow-red hover:shadow-glow-red-lg transform hover:-translate-y-0.5 group"
                >
                  <span>Join Now</span>
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Right: Direct Contact Info (Matches reference image) */}
            <div className="lg:col-span-5 bg-black/60 backdrop-blur-md p-6 rounded-2xl border border-white/10 space-y-3.5 text-xs text-[#D1D1D1]">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full bg-brand-red/20 text-brand-red flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <a href={`tel:${GYM_CONFIG.phone}`} className="hover:text-white transition-colors font-medium">
                  {GYM_CONFIG.phoneDisplay}
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full bg-brand-red/20 text-brand-red flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <a href={`mailto:${GYM_CONFIG.email}`} className="hover:text-white transition-colors font-medium">
                  {GYM_CONFIG.email}
                </a>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 rounded-full bg-brand-red/20 text-brand-red flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="font-medium leading-relaxed">
                  {GYM_CONFIG.address}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
