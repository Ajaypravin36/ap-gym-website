import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Target, 
  Eye, 
  ShieldCheck, 
  Award, 
  Users, 
  Flame, 
  Dumbbell, 
  CheckCircle2, 
  Sparkles 
} from 'lucide-react';
import PageHeader from '../components/PageHeader';
import { GYM_IMAGES } from '../data/gymData';

export default function About() {
  const facilityHighlights = [
    { title: "Competition Barbells & Bumper Plates", desc: "Eleiko-style Olympic steel barbells, bumper plates, and deadlift platforms." },
    { title: "Commercial Pin-Selected Machines", desc: "Ergonomic biomechanical isolation machines for targeted hypertrophy." },
    { title: "Cardio Conditioning Theater", desc: "Shock-absorbing treadmills, cross trainers, stair climbers, and air bikes." },
    { title: "Functional Movement & Turf Track", desc: "High-density sprint turf for sled pushes, farmers walks, and battle ropes." },
    { title: "Locker Rooms & Sanitized Showers", desc: "Spacious individual lockers, hot water showers, and daily sanitization." },
    { title: "Dedicated Warmup & Mobility Zone", desc: "Foam rollers, resistance bands, and inversion tables for prehab & rehab." }
  ];

  return (
    <div className="bg-[#0B0B0B] text-white">
      {/* Page Header */}
      <PageHeader
        tag="ABOUT US"
        title="BUILT ON DISCIPLINE & STRENGTH"
        subtitle="We exist to give serious individuals the tools, coaching, and atmosphere required to forge real physical and mental transformation."
        bgImage={GYM_IMAGES.interiorRed}
        breadcrumb={[{ label: "About Us" }]}
      />

      {/* Story & Philosophy Section */}
      <section className="py-20 md:py-28 bg-[#0B0B0B] border-b border-[#1A1A1A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Story Text */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center space-x-2">
                <span className="text-xs uppercase font-extrabold tracking-[0.2em] text-brand-red">
                  OUR STORY
                </span>
                <span className="w-8 h-[2px] bg-brand-red" />
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold uppercase tracking-tight text-white leading-tight">
                FOUNDED TO REDEFINE LOCAL FITNESS.
              </h2>

              <p className="text-[#A6A6A6] text-base sm:text-lg leading-relaxed">
                AP GYM was established with one uncompromising standard: provide athletes, beginners, and hard-working locals with an authentic, results-focused training ground without gimmicks or excuses.
              </p>

              <p className="text-[#8C8C8C] text-sm sm:text-base leading-relaxed">
                Too many commercial gyms focus on fancy lounge areas while neglecting the fundamentals: heavy iron, scientific programming, and a culture of mutual respect. At AP GYM, every square foot is optimized for athletic progression. Whether you are stepping into a gym for the first time or training for a powerlifting meet, our doors are open to those ready to work.
              </p>

              <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-6 border-t border-[#1F1F1F]">
                <div>
                  <div className="text-3xl sm:text-4xl font-heading font-extrabold text-brand-red">100%</div>
                  <div className="text-xs uppercase tracking-wider text-[#A6A6A6] mt-1">Real Results</div>
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-heading font-extrabold text-white">5,000+</div>
                  <div className="text-xs uppercase tracking-wider text-[#A6A6A6] mt-1">Sq. Ft Training Floor</div>
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-heading font-extrabold text-brand-red">50+</div>
                  <div className="text-xs uppercase tracking-wider text-[#A6A6A6] mt-1">Specialized Stations</div>
                </div>
              </div>
            </div>

            {/* Visual Showcase */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border-2 border-[#242424] shadow-2xl group">
                <img
                  src={GYM_IMAGES.dumbbellsRack}
                  alt="AP Gym Equipment Rack"
                  className="w-full h-[460px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="text-xs font-bold uppercase tracking-widest text-brand-red">The Iron Room</span>
                  <p className="text-lg font-heading text-white font-bold mt-1">
                    Precision Equipment For Maximum Hypertrophy
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Cards */}
      <section className="py-20 bg-[#101010] border-b border-[#1A1A1A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission Card */}
            <div className="p-8 sm:p-10 rounded-2xl bg-[#141414] border border-[#262626] relative overflow-hidden group hover:border-brand-red/50 transition-colors duration-300">
              <div className="w-14 h-14 rounded-2xl bg-brand-red/10 text-brand-red flex items-center justify-center mb-6 group-hover:bg-brand-red group-hover:text-white transition-colors duration-300">
                <Target className="w-7 h-7" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-brand-red block mb-2">
                Our Purpose
              </span>
              <h3 className="text-2xl sm:text-3xl font-heading font-extrabold uppercase text-white tracking-wide">
                OUR MISSION
              </h3>
              <p className="mt-4 text-sm sm:text-base text-[#A6A6A6] leading-relaxed">
                To empower our local community through disciplined strength training, professional coaching, and evidence-based nutrition. We eliminate guesswork so you can reach your peak physical potential safely, consistently, and permanently.
              </p>
            </div>

            {/* Vision Card */}
            <div className="p-8 sm:p-10 rounded-2xl bg-[#141414] border border-[#262626] relative overflow-hidden group hover:border-brand-red/50 transition-colors duration-300">
              <div className="w-14 h-14 rounded-2xl bg-brand-red/10 text-brand-red flex items-center justify-center mb-6 group-hover:bg-brand-red group-hover:text-white transition-colors duration-300">
                <Eye className="w-7 h-7" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-brand-red block mb-2">
                The Long Game
              </span>
              <h3 className="text-2xl sm:text-3xl font-heading font-extrabold uppercase text-white tracking-wide">
                OUR VISION
              </h3>
              <p className="mt-4 text-sm sm:text-base text-[#A6A6A6] leading-relaxed">
                To be recognized as the gold standard of strength and fitness training in the region—a community where individuals of all skill levels build lifelong health, mental grit, and unshakeable physical confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gym Facilities & Environment */}
      <section className="py-20 md:py-28 bg-[#0B0B0B] border-b border-[#1A1A1A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center space-x-2 mb-3">
              <span className="text-xs uppercase font-extrabold tracking-[0.2em] text-brand-red">
                PREMIUM FACILITIES
              </span>
              <span className="w-8 h-[2px] bg-brand-red" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold uppercase tracking-tight text-white">
              ENGINEERED FOR SERIOUS TRAINING.
            </h2>
            <p className="mt-4 text-sm sm:text-base text-[#A6A6A6]">
              Every machine, rack, and barbell is hand-selected to deliver optimal biomechanics, maximum muscle tension, and safety.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilityHighlights.map((item, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-[#141414] border border-[#222222] hover:border-[#383838] transition-all duration-300"
              >
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-red shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-base font-bold text-white font-subheading tracking-wide">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#8C8C8C] mt-2 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose AP Gym Section */}
      <section className="py-20 bg-[#121212] border-b border-[#1E1E1E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-red block mb-2">
                WHAT SETS US APART
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-extrabold uppercase text-white leading-tight">
                NO GIMMICKS. NO BULLSHIT. JUST HONEST WORK.
              </h2>
              <p className="mt-4 text-[#A6A6A6] text-sm sm:text-base leading-relaxed">
                We believe you deserve a gym that respects your dedication. That means zero broken machines, no overcrowding during peak hours, and trainers who actually care about your progress.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-start space-x-3">
                  <Award className="w-5 h-5 text-brand-red shrink-0 mt-1" />
                  <div>
                    <h4 className="text-sm font-bold text-white uppercase tracking-wider">Certified Strength Coaches</h4>
                    <p className="text-xs text-[#8C8C8C] mt-0.5">Accredited trainers with competitive lifting and sports science credentials.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <ShieldCheck className="w-5 h-5 text-brand-red shrink-0 mt-1" />
                  <div>
                    <h4 className="text-sm font-bold text-white uppercase tracking-wider">Pristine Hygiene & Safety</h4>
                    <p className="text-xs text-[#8C8C8C] mt-0.5">Continuous sanitation of equipment and clean changing rooms all day long.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Users className="w-5 h-5 text-brand-red shrink-0 mt-1" />
                  <div>
                    <h4 className="text-sm font-bold text-white uppercase tracking-wider">A Community That Has Your Back</h4>
                    <p className="text-xs text-[#8C8C8C] mt-0.5">An uplifting culture free of intimidation where everyone is striving to improve.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src={GYM_IMAGES.personalTraining}
                  alt="Coach Training Member"
                  className="rounded-2xl object-cover h-64 w-full border border-[#222222]"
                />
                <img
                  src={GYM_IMAGES.functionalTraining}
                  alt="Functional Turf Zone"
                  className="rounded-2xl object-cover h-64 w-full mt-6 border border-[#222222]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-[#0B0B0B] to-[#121212] text-center">
        <div className="max-w-4xl mx-auto px-4">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-red block mb-2">
            TAKE THE LEAP
          </span>
          <h2 className="text-4xl sm:text-5xl font-heading font-extrabold uppercase text-white tracking-wide">
            EXPERIENCE THE AP GYM DIFFERENCE.
          </h2>
          <p className="mt-4 text-[#A6A6A6] text-base max-w-xl mx-auto">
            Visit our facility, meet our coaches, and see firsthand why AP GYM is the premier fitness destination in Coimbatore.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="px-8 py-3.5 rounded-full bg-brand-red text-white text-xs font-bold uppercase tracking-wider hover:bg-brand-red-hover transition-all shadow-glow-red"
            >
              Claim Your Free Trial Session
            </Link>
            <Link
              to="/gallery"
              className="px-8 py-3.5 rounded-full bg-[#181818] border border-[#333333] hover:border-white text-white text-xs font-bold uppercase tracking-wider transition-all"
            >
              Explore Facility Gallery
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
