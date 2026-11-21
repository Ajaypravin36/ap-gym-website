// Global Business & Configuration Data for AP GYM
export const GYM_CONFIG = {
  name: "AP GYM",
  tagline: "STRONGER TOGETHER",
  phone: "9384970529",
  phoneDisplay: "+91 93849 70529",
  email: "apgym@gmail.com",
  address: "123 Fitness Street, Cross-Cut Road, Gandhipuram, Coimbatore - 641012",
  mapAddress: "Cross Cut Road, Gandhipuram, Coimbatore, Tamil Nadu 641012",
  googleMapsUrl: "https://maps.google.com/?q=Cross+Cut+Road+Gandhipuram+Coimbatore",
  openingHours: [
    { days: "Monday – Friday", hours: "5:00 AM – 10:00 PM" },
    { days: "Saturday", hours: "6:00 AM – 9:00 PM" },
    { days: "Sunday", hours: "6:00 AM – 1:00 PM" }
  ],
  whatsappDefaultMsg: "Hello AP GYM, I'm interested in joining your gym. Please share the membership details.",
  getWhatsAppLink: (customMsg) => {
    const text = encodeURIComponent(customMsg || GYM_CONFIG.whatsappDefaultMsg);
    return `https://wa.me/91${GYM_CONFIG.phone}?text=${text}`;
  }
};

// High-Definition Authentic Gym Photos from Unsplash
export const GYM_IMAGES = {
  // Hero athlete curling dumbbells under dramatic moody gym lighting
  hero: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=1920&auto=format&fit=crop",
  // Neon red / dramatic dark gym interior
  interiorRed: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1600&auto=format&fit=crop",
  // Muscular athlete back physique training
  backPhysique: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?q=80&w=1600&auto=format&fit=crop",
  // Heavy dumbbells rack
  dumbbellsRack: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1600&auto=format&fit=crop",
  // Treadmills and cardio zone
  cardioTreadmills: "https://images.unsplash.com/photo-1576678927484-cc907957088c?q=80&w=1600&auto=format&fit=crop",
  // Personal training coach assisting
  personalTraining: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1600&auto=format&fit=crop",
  // Strength training bench press / barbell
  barbellBench: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1600&auto=format&fit=crop",
  // Nutrition & healthy fitness meal
  nutrition: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=1600&auto=format&fit=crop",
  // Hardcore gym atmosphere
  gymAtmosphere: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=1600&auto=format&fit=crop",
  // Cross training & turf
  functionalTraining: "https://images.unsplash.com/photo-1517963879433-6ad2b056d712?q=80&w=1600&auto=format&fit=crop",
  // Female strength training
  athleteTraining: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1600&auto=format&fit=crop",
  // Cable crossover machine
  cableMachine: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1600&auto=format&fit=crop"
};

export const SERVICES_DATA = [
  {
    id: "strength-training",
    title: "Strength Training",
    shortDesc: "Build strength. Build confidence.",
    tagline: "Heavy Iron & Hypertrophy Protocols",
    description: "Designed for those seeking raw strength, muscle definition, and athletic performance. Our facility features competition-grade Olympic barbells, calibrated plates, power racks, and specialized resistance machines.",
    benefits: [
      "Targeted compound lifts (Squat, Bench, Deadlift, Overhead Press)",
      "Progressive overload tracking and technique correction",
      "Extensive dumbbell range from 2.5kg to 50kg+",
      "Hypertrophy and periodized strength programming"
    ],
    image: GYM_IMAGES.barbellBench,
    icon: "Dumbbell"
  },
  {
    id: "cardio-training",
    title: "Cardio Training",
    shortDesc: "Improve stamina. Boost endurance.",
    tagline: "High-Intensity Endurance & Calorie Burn",
    description: "Elevate your cardiovascular capacity with our commercial-grade treadmills, stair climbers, rowing ergometers, and assault bikes. Monitored heart rate zones help maximize metabolic burn and endurance.",
    benefits: [
      "State-of-the-art shock-absorbing treadmills and incline trainers",
      "StairMaster gauntlets for lower-body power and high calorie expenditure",
      "Low-impact water rowers and air bikes for high-intensity intervals",
      "Cardiovascular health and endurance conditioning"
    ],
    image: GYM_IMAGES.cardioTreadmills,
    icon: "Flame"
  },
  {
    id: "personal-training",
    title: "Personal Training",
    shortDesc: "Custom plans. Better results.",
    tagline: "1-on-1 Dedicated Elite Coaching",
    description: "Work directly with certified trainers who build tailored programs based on your biometric profile, injury history, and fitness ambitions. Accelerate results with real-time feedback and unwavering accountability.",
    benefits: [
      "Comprehensive biomechanical movement assessment",
      "Tailored workout splits crafted specifically for your body type",
      "Strict form checks to ensure maximum stimulus and zero injuries",
      "Weekly milestone tracking and progression adjustments"
    ],
    image: GYM_IMAGES.personalTraining,
    icon: "UserCheck"
  },
  {
    id: "nutrition-guidance",
    title: "Nutrition Guidance",
    shortDesc: "Eat right. Perform better.",
    tagline: "Fuel Your Muscle & Accelerate Recovery",
    description: "Training is only 30% of your transformation; nutrition determines the rest. We provide customized macronutrient breakdowns, calorie targets, and sustainable nutritional plans tailored to Indian and international dietary preferences.",
    benefits: [
      "Custom macronutrient targets (Protein, Carbs, Healthy Fats)",
      "Flexible meal templates for vegetarian, non-veg, and vegan diets",
      "Pre and post-workout nutrient timing strategies",
      "Hydration and evidence-backed supplement guidance"
    ],
    image: GYM_IMAGES.nutrition,
    icon: "Apple"
  },
  {
    id: "weight-training",
    title: "Weight Training",
    shortDesc: "Targeted resistance for all fitness levels.",
    tagline: "Pin-Selected & Plate-Loaded Machinery",
    description: "From beginner isolation machines to heavy plate-loaded leverage systems, our weights floor gives you safe, guided motion ranges to sculpt every muscle group with surgical precision.",
    benefits: [
      "Plate-loaded leg presses, hack squats, and chest presses",
      "Multi-station dual adjustable cable pulleys and lat pull-downs",
      "Ergonomic biomechanical benches and preacher curls",
      "Ideal for beginners to master form without risk of free-weight drop"
    ],
    image: GYM_IMAGES.dumbbellsRack,
    icon: "Layers"
  },
  {
    id: "fitness-guidance",
    title: "Fitness & Mobility Guidance",
    shortDesc: "Agility, mobility and injury rehabilitation.",
    tagline: "Longevity, Joint Health & Core Stability",
    description: "True fitness is not just about moving weight; it is about moving well. Our mobility protocols restore joint range of motion, alleviate desk-job postural issues, and bulletproof your core against injuries.",
    benefits: [
      "Foam rolling and myofascial release techniques",
      "Dynamic hip and thoracic spine mobility routines",
      "Core stabilization and posture correction drills",
      "Active recovery and functional movement patterns"
    ],
    image: GYM_IMAGES.functionalTraining,
    icon: "Activity"
  }
];

export const GALLERY_ITEMS = [
  {
    id: 1,
    title: "Main Strength & Neon Red Gym Floor",
    category: "Interior",
    image: GYM_IMAGES.interiorRed,
    description: "Custom ambient red lighting and heavy-duty racks designed for maximum focus."
  },
  {
    id: 2,
    title: "Bicep & Dumbbell Isolation Station",
    category: "Training",
    image: GYM_IMAGES.hero,
    description: "Professional dumbbells up to 50kg for targeted hypertrophy work."
  },
  {
    id: 3,
    title: "Commercial Treadmill Row & Cardio Suite",
    category: "Cardio",
    image: GYM_IMAGES.cardioTreadmills,
    description: "Commercial cardio machinery equipped with shock-absorbing tracks."
  },
  {
    id: 4,
    title: "Heavy Free Weights & Barbells Zone",
    category: "Strength",
    image: GYM_IMAGES.barbellBench,
    description: "Olympic bars, bumper plates, and competition benches."
  },
  {
    id: 5,
    title: "Physique & Muscular Conditioning",
    category: "Training",
    image: GYM_IMAGES.backPhysique,
    description: "High-intensity progressive resistance training for athletic symmetry."
  },
  {
    id: 6,
    title: "Heavy Dumbbell Free-Weights Floor",
    category: "Strength",
    image: GYM_IMAGES.dumbbellsRack,
    description: "Multi-tiered rubber hex and urethane dumbbell racks."
  },
  {
    id: 7,
    title: "1-on-1 Personal Trainer Session",
    category: "Training",
    image: GYM_IMAGES.personalTraining,
    description: "Certified trainers coaching proper biomechanics and lifting technique."
  },
  {
    id: 8,
    title: "Functional Fitness & Core Turf Area",
    category: "Interior",
    image: GYM_IMAGES.functionalTraining,
    description: "Specialized turf for sled pushes, battle ropes, and functional conditioning."
  },
  {
    id: 9,
    title: "Cable Cross & Multi-Station Towers",
    category: "Strength",
    image: GYM_IMAGES.cableMachine,
    description: "Dual adjustable pulleys offering unlimited movement variations."
  },
  {
    id: 10,
    title: "Athlete Conditioning & Power Drills",
    category: "Training",
    image: GYM_IMAGES.athleteTraining,
    description: "Dedicated training environment for both men and women of all skill levels."
  },
  {
    id: 11,
    title: "High Energy Training Atmosphere",
    category: "Interior",
    image: GYM_IMAGES.gymAtmosphere,
    description: "Immersive sound system and motivating atmosphere that fuels your workout."
  },
  {
    id: 12,
    title: "Nutrition & Healthy Fuel",
    category: "Nutrition",
    image: GYM_IMAGES.nutrition,
    description: "Evidence-based meal plans to fuel recovery and muscle growth."
  }
];

export const MEMBERSHIP_PLANS = [
  {
    name: "Monthly Flex",
    duration: "1 Month",
    price: "₹1,999",
    tagline: "Great for testing your routine",
    popular: false,
    features: [
      "Full gym floor & cardio access",
      "Locker room & shower facilities",
      "Complimentary fitness assessment",
      "Access during all opening hours",
      "Standard mobile locker access"
    ]
  },
  {
    name: "Quarterly Pro",
    duration: "3 Months",
    price: "₹4,999",
    period: "Save ₹1,000",
    popular: true,
    features: [
      "Everything in Monthly Flex",
      "1 Free 1-on-1 Personal Training session",
      "Custom workout split programming",
      "Basic nutritional macro guidance",
      "Guest pass (1 per month)"
    ]
  },
  {
    name: "Annual VIP Transformation",
    duration: "12 Months",
    price: "₹14,999",
    period: "Best Value – Only ₹1,250/mo",
    popular: false,
    features: [
      "Everything in Quarterly Pro",
      "4 Personal Training sessions included",
      "Full nutritional consultation & diet chart",
      "Body composition scan every month",
      "Dedicated AP GYM gym kit & shaker",
      "Complimentary locker reservation"
    ]
  }
];
