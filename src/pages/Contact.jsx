import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  MessageCircle, 
  AlertCircle 
} from 'lucide-react';
import PageHeader from '../components/PageHeader';
import { GYM_CONFIG, GYM_IMAGES } from '../data/gymData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Strength Training',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) {
      errs.name = 'Full name is required';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Phone number is required';
    } else if (!/^[0-9+\s-]{8,15}$/.test(formData.phone.trim())) {
      errs.phone = 'Please enter a valid phone number';
    }
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please provide a brief message or question';
    }
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    // Simulate submission to frontend demo
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      phone: '',
      email: '',
      service: 'Strength Training',
      message: ''
    });
    setSubmitted(false);
    setErrors({});
  };

  return (
    <div className="bg-[#0B0B0B] text-white">
      {/* Page Header */}
      <PageHeader
        tag="CONTACT US"
        title="GET IN TOUCH WITH AP GYM"
        subtitle="Have questions about memberships, personal training, or scheduling a facility visit? We are here to help you get started."
        bgImage={GYM_IMAGES.hero}
        breadcrumb={[{ label: "Contact Us" }]}
      />

      {/* Main Content */}
      <section className="py-20 md:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Direct Contact Details & WhatsApp Button */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center space-x-2 mb-3">
                <span className="text-xs uppercase font-extrabold tracking-[0.2em] text-brand-red">
                  DIRECT CHANNELS
                </span>
                <span className="w-8 h-[2px] bg-brand-red" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-heading font-extrabold uppercase text-white tracking-wide">
                WE ARE READY TO HELP YOU TRAIN.
              </h2>
              <p className="mt-3 text-sm sm:text-base text-[#A6A6A6] leading-relaxed">
                Reach out to our front desk team directly via phone, email, or WhatsApp. We reply promptly during opening hours.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {/* Phone Card */}
              <div className="p-5 rounded-2xl bg-[#141414] border border-[#222222] flex items-center space-x-4">
                <div className="w-12 h-12 rounded-xl bg-brand-red/10 text-brand-red flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs uppercase font-bold text-[#888888] tracking-wider">Phone Hotline</div>
                  <a 
                    href={`tel:${GYM_CONFIG.phone}`} 
                    className="text-base sm:text-lg font-heading text-white hover:text-brand-red transition-colors font-bold"
                  >
                    {GYM_CONFIG.phoneDisplay}
                  </a>
                </div>
              </div>

              {/* Email Card */}
              <div className="p-5 rounded-2xl bg-[#141414] border border-[#222222] flex items-center space-x-4">
                <div className="w-12 h-12 rounded-xl bg-brand-red/10 text-brand-red flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs uppercase font-bold text-[#888888] tracking-wider">Official Email</div>
                  <a 
                    href={`mailto:${GYM_CONFIG.email}`} 
                    className="text-base sm:text-lg font-heading text-white hover:text-brand-red transition-colors font-bold"
                  >
                    {GYM_CONFIG.email}
                  </a>
                </div>
              </div>

              {/* Location Card */}
              <div className="p-5 rounded-2xl bg-[#141414] border border-[#222222] flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl bg-brand-red/10 text-brand-red flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs uppercase font-bold text-[#888888] tracking-wider">Location</div>
                  <p className="text-sm text-[#CCCCCC] font-medium leading-relaxed">
                    {GYM_CONFIG.address}
                  </p>
                </div>
              </div>

              {/* Timing Card */}
              <div className="p-5 rounded-2xl bg-[#141414] border border-[#222222] flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl bg-brand-red/10 text-brand-red flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs uppercase font-bold text-[#888888] tracking-wider">Gym Hours</div>
                  <div className="text-xs text-[#A6A6A6] space-y-1 mt-1">
                    <div>Mon – Fri: 5:00 AM – 10:00 PM</div>
                    <div>Saturday: 6:00 AM – 9:00 PM</div>
                    <div>Sunday: 6:00 AM – 1:00 PM</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Callout Banner */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-[#25D366]/20 via-[#181818] to-[#141414] border border-[#25D366]/40">
              <div className="flex items-center space-x-3 mb-2">
                <MessageCircle className="w-5 h-5 text-[#25D366]" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#25D366]">Fastest Response</span>
              </div>
              <h3 className="text-lg font-heading font-bold text-white uppercase">Chat on WhatsApp</h3>
              <p className="text-xs text-[#A6A6A6] mt-1 mb-4">
                Connect directly with our fitness advisors for quick membership pricing and booking a trial.
              </p>
              <a
                href={GYM_CONFIG.getWhatsAppLink()}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold uppercase tracking-wider transition-all"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                <span>Open WhatsApp ({GYM_CONFIG.phoneDisplay})</span>
              </a>
            </div>
          </div>

          {/* Right Column: Contact & Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#141414] border border-[#262626] rounded-3xl p-8 sm:p-10 shadow-2xl relative">
              <div className="mb-8">
                <span className="text-xs uppercase font-extrabold tracking-[0.2em] text-brand-red block mb-1">
                  SEND AN ENQUIRY
                </span>
                <h3 className="text-2xl sm:text-3xl font-heading font-extrabold uppercase text-white tracking-wide">
                  START YOUR FITNESS TRANSFORMATION
                </h3>
                <p className="text-xs sm:text-sm text-[#8C8C8C] mt-1">
                  Fill in your details below and our management team will reach out with membership information.
                </p>
              </div>

              {submitted ? (
                /* Success Message State */
                <div className="py-12 px-6 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-brand-red/20 text-brand-red flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="text-2xl font-heading font-bold uppercase text-white tracking-wide">
                    Enquiry Received Successfully!
                  </h4>
                  <p className="text-sm text-[#A6A6A6] max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-white">{formData.name}</strong>! Your enquiry for <strong className="text-brand-red">{formData.service}</strong> has been logged. Our front desk will contact you at <strong className="text-white">{formData.phone}</strong> shortly.
                  </p>
                  <div className="pt-6 flex flex-wrap justify-center gap-4">
                    <button
                      onClick={handleReset}
                      className="px-6 py-2.5 rounded-full bg-[#202020] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#2a2a2a] border border-[#333333]"
                    >
                      Send Another Message
                    </button>
                    <a
                      href={GYM_CONFIG.getWhatsAppLink(`Hi AP Gym, I just submitted an enquiry for ${formData.service} on your website. My name is ${formData.name}.`)}
                      target="_blank"
                      rel="noreferrer"
                      className="px-6 py-2.5 rounded-full bg-[#25D366] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#20ba59] flex items-center space-x-1.5"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Follow-up on WhatsApp</span>
                    </a>
                  </div>
                </div>
              ) : (
                /* Form Fields */
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs uppercase font-bold tracking-wider text-[#A6A6A6] mb-2">
                        Your Full Name <span className="text-brand-red">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Rahul Sharma"
                        className={`w-full px-4 py-3 rounded-xl bg-[#0B0B0B] border text-sm text-white placeholder-[#555555] focus:outline-none transition-colors ${
                          errors.name ? 'border-red-500 focus:border-red-500' : 'border-[#2A2A2A] focus:border-brand-red'
                        }`}
                      />
                      {errors.name && (
                        <p className="text-xs text-red-400 mt-1.5 flex items-center">
                          <AlertCircle className="w-3.5 h-3.5 mr-1" />
                          {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label className="block text-xs uppercase font-bold tracking-wider text-[#A6A6A6] mb-2">
                        Phone Number <span className="text-brand-red">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g. 98765 43210"
                        className={`w-full px-4 py-3 rounded-xl bg-[#0B0B0B] border text-sm text-white placeholder-[#555555] focus:outline-none transition-colors ${
                          errors.phone ? 'border-red-500 focus:border-red-500' : 'border-[#2A2A2A] focus:border-brand-red'
                        }`}
                      />
                      {errors.phone && (
                        <p className="text-xs text-red-400 mt-1.5 flex items-center">
                          <AlertCircle className="w-3.5 h-3.5 mr-1" />
                          {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Email Address */}
                    <div>
                      <label className="block text-xs uppercase font-bold tracking-wider text-[#A6A6A6] mb-2">
                        Email Address <span className="text-brand-red">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. rahul@example.com"
                        className={`w-full px-4 py-3 rounded-xl bg-[#0B0B0B] border text-sm text-white placeholder-[#555555] focus:outline-none transition-colors ${
                          errors.email ? 'border-red-500 focus:border-red-500' : 'border-[#2A2A2A] focus:border-brand-red'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-xs text-red-400 mt-1.5 flex items-center">
                          <AlertCircle className="w-3.5 h-3.5 mr-1" />
                          {errors.email}
                        </p>
                      )}
                    </div>

                    {/* Service Program Selection */}
                    <div>
                      <label className="block text-xs uppercase font-bold tracking-wider text-[#A6A6A6] mb-2">
                        Interested Program
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-[#0B0B0B] border border-[#2A2A2A] text-sm text-white focus:outline-none focus:border-brand-red transition-colors"
                      >
                        <option value="Strength Training">Strength Training</option>
                        <option value="Cardio Training">Cardio Training</option>
                        <option value="Personal Training">Personal Training</option>
                        <option value="Nutrition Guidance">Nutrition Guidance</option>
                        <option value="Weight Training">Weight Training</option>
                        <option value="General Gym Membership">General Gym Membership</option>
                      </select>
                    </div>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label className="block text-xs uppercase font-bold tracking-wider text-[#A6A6A6] mb-2">
                      Your Message / Fitness Goals <span className="text-brand-red">*</span>
                    </label>
                    <textarea
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us what you want to achieve or when you'd like to visit the gym..."
                      className={`w-full px-4 py-3 rounded-xl bg-[#0B0B0B] border text-sm text-white placeholder-[#555555] focus:outline-none transition-colors ${
                        errors.message ? 'border-red-500 focus:border-red-500' : 'border-[#2A2A2A] focus:border-brand-red'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-xs text-red-400 mt-1.5 flex items-center">
                        <AlertCircle className="w-3.5 h-3.5 mr-1" />
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-brand-red hover:bg-brand-red-hover text-white text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-glow-red flex items-center justify-center space-x-2 disabled:opacity-70 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span>Sending Your Enquiry...</span>
                    ) : (
                      <>
                        <span>Submit Membership Enquiry</span>
                        <Send className="w-4 h-4 ml-1" />
                      </>
                    )}
                  </button>

                  <p className="text-center text-[11px] text-[#666666] pt-1">
                    * Client-side demo. Your privacy is respected. No spam, ever.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
