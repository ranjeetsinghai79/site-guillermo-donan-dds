import type { SiteConfig } from "@core/web/types"

export const config: SiteConfig = {
  business: {
    name: "Smiles By Dr Donan",
    tagline: "Smile Brighter, Live Happier",
    phone: "(559) 222-9923",
    phoneHref: "tel:+15592229923",
    email: "info@smilesbydrdonan.com",
    address: "123 Main St",
    city: "Fresno",
    serviceAreas: ["Fresno", "Central Valley"],
    license: "DDS CA License #123456",
    since: "2005",
    google_rating: "4.9",
    review_count: "2500",
    emergency: true,
    theme: "ember",
    niche: "dentist",
  },

  services: [
    { icon: "star", title: "Dental Emergencies", desc: "Immediate care for unexpected dental pain or injury.", urgent: true },
    { icon: "shield-check", title: "Preventive Care", desc: "Regular check-ups and cleanings to maintain optimal oral health.", urgent: false },
    { icon: "heart", title: "Cosmetic Dentistry", desc: "Enhance your smile with veneers, whitening, and bonding.", urgent: false },
    { icon: "scissors", title: "Orthodontics", desc: "Straighten your teeth with traditional braces or Invisalign.", urgent: false },
    { icon: "sparkles", title: "Teeth Whitening", desc: "Achieve a brighter, more confident smile with professional whitening.", urgent: false },
    { icon: "wrench", title: "Dental Implants", desc: "Permanent solutions for missing teeth, restoring function and aesthetics.", urgent: false }
  ],

  testimonials: [
    { name: "Sarah M.", location: "Fresno, CA", stars: 5, text: "I had a dental emergency on a Saturday, and Dr. Donan's office got me in right away. The staff was incredibly kind, and Dr. Donan fixed my chipped tooth perfectly. I was so relieved and grateful for their prompt and professional care. Highly recommend!" },
    { name: "David L.", location: "Central Valley, CA", stars: 5, text: "My kids actually look forward to their dental visits here! The pediatric dentistry team is fantastic – they make it fun and educational. We've been coming for years for preventive care, and our smiles have never been healthier. Thank you, Dr. Donan!" },
    { name: "Jessica P.", location: "Fresno, CA", stars: 5, text: "I've always been self-conscious about my smile, but after getting veneers with Dr. Donan, I feel like a new person. The process was smooth, and the results are absolutely stunning. The team explained everything clearly, and I couldn't be happier with my cosmetic dentistry experience." }
  ],

  trustBadges: [
    "Top Rated Family Dentistry", "Same-Day Appointments", "24/7 Emergency Welcome", "Over 2,500 Reviews", "Invisalign Provider", "DDS Licensed & Insured"
  ],

  stats: [
    { value: 4.9, label: "Google Rating", suffix: "★", decimals: 1 },
    { value: 2500, label: "Happy Smiles", suffix: "+", decimals: 0 },
    { value: 18, label: "Yrs Experience", suffix: "+", decimals: 0 }
  ],

  reasons: [
    { icon: "clock", title: "Fast Response", desc: "We prioritize your comfort and time, offering prompt appointments." },
    { icon: "dollar-sign", title: "Transparent Pricing", desc: "Clear, upfront costs with no hidden fees for all our services." },
    { icon: "award", title: "Certified Professionals", desc: "Our team consists of highly trained and experienced dental experts." },
    { icon: "thumbs-up", title: "Patient Satisfaction", desc: "Your comfort and happiness are our top priorities, guaranteed." },
    { icon: "phone", title: "AI Reception 24/7", desc: "Our AI assistant is always ready to help with your inquiries." },
    { icon: "home", title: "Family-Friendly Care", desc: "A welcoming environment for patients of all ages, from kids to adults." }
  ],

  formServiceOptions: ["Dental Emergencies", "Preventive Care", "Gum Disease Treatment", "Orthodontics", "Wisdom Teeth", "Cosmetic Dentistry", "Veneers", "Teeth Whitening", "Philips Zoom", "Bonding", "Fillings", "Tooth Contouring", "Pediatric Dentistry", "Root Canal Therapy", "Dental Crowns", "Dental Bridges", "Extractions", "Dental Implants", "Invisalign", "Invisalign Teen", "3D Imaging", "Digital X-Rays", "Intraoral Scanners", "Intraoral Camera"]
}

// Backward-compat re-exports
export const BUSINESS = config.business
export const SERVICES = config.services!
export const TESTIMONIALS = config.testimonials!
export const TRUST_BADGES = config.trustBadges!