import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Dumbbell, 
  Flame, 
  Users, 
  Sparkles, 
  Layers, 
  Activity, 
  CheckCircle2, 
  Check, 
  Zap, 
  ShieldCheck, 
  MessageCircle 
} from 'lucide-react';
import PageHeader from '../components/PageHeader';
import { SERVICES_DATA, MEMBERSHIP_PLANS, GYM_CONFIG, GYM_IMAGES } from '../data/gymData';

export default function Services() {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Dumbbell': return <Dumbbell className="w-6 h-6" />;
      case 'Flame': return <Flame className="w-6 h-6" />;
      case 'UserCheck': return <Users className="w-6 h-6" />;
      case 'Apple': return <Sparkles className="w-6 h-6" />;
      case 'Layers': return <Layers className="w-6 h-6" />;
      default: return <Activity className="w-6 h-6" />;
    }
  };

  return (
    <div className="bg-[#0B0B0B] text-white">
      {/* Page Header */}
      <PageHeader
        tag="TRAINING PROGRAMS"
        title="OUR SERVICES & SPECIALIZATIONS"
        subtitle="Custom-tailored fitness solutions designed for raw strength, explosive fat loss, biomechanical longevity, and peak physique conditioning."
        bgImage={GYM_IMAGES.barbellBench}
        breadcrumb={[{ label: "Services" }]}
      />

      {/* Services Showcase - Alternating Distinct Layouts */}
      <section className="py-20 md:py-28 bg-[#0B0B0B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {SERVICES_DATA.map((service, index) => {
            const isEven = index % 2 === 1;

            return (
              <div 
                key={service.id}
                id={service.id}
                className="scroll-mt-32 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center"
              >
                {/* Visual / Photograph Column */}
                <div className={`lg:col-span-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="relative rounded-2xl overflow-hidden border border-[#242424] shadow-2xl group">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-[360px] sm:h-[440px] object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
                    
                    {/* Floating Badge */}
                    <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10 flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-brand-red">
                      {getIcon(service.icon)}
                      <span className="text-white">{service.title}</span>
                    </div>

                    <div className="absolute bottom-5 left-6 right-6">
                      <span className="text-xs uppercase font-extrabold tracking-widest text-brand-red">
                        {service.tagline}
                      </span>
                      <h4 className="text-xl sm:text-2xl font-heading text-white font-bold mt-1">
                        {service.title}
                      </h4>
                    </div>
                  </div>
                </div>

                {/* Details Column */}
                <div className={`lg:col-span-6 space-y-5 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="inline-flex items-center space-x-2">
                    <span className="text-xs uppercase font-extrabold tracking-[0.2em] text-brand-red">
                      PROGRAM #{index + 1}
                    </span>
                    <span className="w-8 h-[2px] bg-brand-red" />
                  </div>

                  <h3 className="text-3xl sm:text-4xl font-heading font-extrabold uppercase text-white tracking-wide">
                    {service.title}
                  </h3>

                  <p className="text-sm font-semibold text-brand-red uppercase tracking-wider">
                    {service.shortDesc}
                  </p>

                  <p className="text-sm sm:text-base text-[#A6A6A6] leading-relaxed">
                    {service.description}
                  </p>

                  {/* Bullet Benefits */}
                  <div className="pt-2 space-y-2.5">
                    {service.benefits.map((benefit, bIdx) => (
                      <div key={bIdx} className="flex items-start space-x-3 text-xs sm:text-sm text-[#CCCCCC]">
                        <CheckCircle2 className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-4 flex flex-wrap items-center gap-3">
                    <a
                      href={GYM_CONFIG.getWhatsAppLink(`Hi AP Gym, I want to enquire about the ${service.title} program.`)}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center px-6 py-3 rounded-full bg-brand-red text-white text-xs font-bold uppercase tracking-wider hover:bg-brand-red-hover transition-all shadow-glow-red"
                    >
                      <MessageCircle className="w-3.5 h-3.5 mr-2" />
                      <span>Enquire via WhatsApp</span>
                    </a>

                    <Link
                      to="/contact"
                      className="inline-flex items-center px-6 py-3 rounded-full bg-[#181818] border border-[#333333] hover:border-white text-white text-xs font-bold uppercase tracking-wider transition-all"
                    >
                      <span>Send Enquiry Form</span>
                      <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Membership Tiers / Pricing Section */}
      <section className="py-20 md:py-28 bg-[#111111] border-t border-[#1F1F1F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-red block mb-2">
              SIMPLE & TRANSPARENT
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold uppercase text-white">
              MEMBERSHIP TIERS
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#A6A6A6]">
              Choose the commitment level that fits your goals. No hidden enrollment fees, no locking contracts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {MEMBERSHIP_PLANS.map((plan, idx) => (
              <div 
                key={idx}
                className={`relative rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 ${
                  plan.popular
                    ? 'bg-[#181818] border-2 border-brand-red shadow-glow-red transform md:-translate-y-2'
                    : 'bg-[#141414] border border-[#242424] hover:border-[#383838]'
                }`}
              >
                {/* Popular Pill */}
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-brand-red text-white text-[11px] font-extrabold uppercase tracking-widest px-4 py-1 rounded-full shadow-lg">
                    Most Popular Choice
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-heading font-bold uppercase tracking-wider text-white">
                      {plan.name}
                    </h3>
                    <span className="text-xs uppercase font-bold text-[#888888] tracking-widest">
                      {plan.duration}
                    </span>
                  </div>

                  <p className="text-xs text-[#8C8C8C] mt-1">{plan.tagline || plan.period}</p>

                  <div className="mt-6 flex items-baseline">
                    <span className="text-4xl sm:text-5xl font-heading font-extrabold text-white">
                      {plan.price}
                    </span>
                    <span className="text-xs text-[#888888] ml-2">/ plan</span>
                  </div>

                  {/* Feature Checklist */}
                  <div className="mt-8 space-y-3 pt-6 border-t border-[#242424]">
                    {plan.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start space-x-3 text-xs sm:text-sm text-[#CCCCCC]">
                        <Check className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-10">
                  <a
                    href={GYM_CONFIG.getWhatsAppLink(`Hello AP Gym, I am interested in signing up for the ${plan.name} (${plan.price}). Please share registration steps.`)}
                    target="_blank"
                    rel="noreferrer"
                    className={`w-full py-3.5 rounded-full flex items-center justify-center text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                      plan.popular
                        ? 'bg-brand-red text-white hover:bg-brand-red-hover shadow-glow-red'
                        : 'bg-[#222222] text-white hover:bg-white hover:text-black border border-[#333333]'
                    }`}
                  >
                    <span>Choose {plan.name}</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-2" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 rounded-2xl bg-[#141414] border border-[#222222] text-center max-w-2xl mx-auto text-xs text-[#888888]">
            <p>
              * Need customized corporate plans, student discounts, or personal training packages? 
              <Link to="/contact" className="text-brand-red font-semibold ml-1 hover:underline">
                Contact our front desk directly.
              </Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
