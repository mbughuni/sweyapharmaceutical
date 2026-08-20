

window.SWEYA_CONFIG = {

  // ---------------------------------------------------------------
  // CORE BUSINESS INFO
  // ---------------------------------------------------------------
  business: {
    name: "Sweya Pharmaceutical Limited",
    tagline: "Your Trusted Pharmaceutical & Healthcare Supply Partner",
    description:
      "Pharmaceutical products, medical supplies and healthcare equipment for hospitals, clinics and healthcare institutions — supplied with professionalism, quality and reliability from Mwanza, Tanzania.",
    logo: "assets/logo.png",
    logoMark: "assets/logo-mark.png",
    // Placeholder contact details — replace with Sweya Pharmaceutical Limited's
    // real email, phone numbers and WhatsApp number before launch.
    email: "masharebabu@gmail.com",
    phones: [
      { display: "+255 652 059 546", href: "tel:+255652059546" },
      { display: "+255 652 059 546", href: "tel:+255652059546" }
    ],
    // First phone number is used for the WhatsApp quick-contact button.
    whatsapp: "https://wa.me/255657987215",
    address: {
      line1: "Mwanza City",
      line2: "Mwanza, Tanzania"
    },
    // Set a real Google Maps embed / share URL when available.
    // Leave as-is and the map section will show an editable-placeholder state.
    mapEmbedUrl: "",
    mapDirectionsUrl: "",
    year: new Date().getFullYear()
  },

  // ---------------------------------------------------------------
  // NAVIGATION
  // ---------------------------------------------------------------
  nav: [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#about" },
    { label: "Products", href: "#products" },
    { label: "Services", href: "#services" },
    { label: "Branches", href: "#branches" },
    { label: "Contact", href: "#contact" }
  ],

  // ---------------------------------------------------------------
  // TRUST / QUICK HIGHLIGHTS
  // ---------------------------------------------------------------
  highlights: [
    {
      icon: "capsule",
      title: "Pharmaceutical Products",
      text: "A broad range of human medicines and pharmaceutical products."
    },
    {
      icon: "shield",
      title: "Quality-Focused Supply",
      text: "Procurement and supply handled with quality and care at every step."
    },
    {
      icon: "pin",
      title: "Based in Mwanza",
      text: "Serving healthcare institutions from Mwanza, Tanzania."
    },
    {
      icon: "hospital",
      title: "Medical & Hospital Supplies",
      text: "Medical equipment, hospital supplies and healthcare consumables."
    }
  ],

  // ---------------------------------------------------------------
  // PRODUCT CATEGORIES
  // ---------------------------------------------------------------
  categories: [
    {
      icon: "capsule",
      name: "Human Medicines",
      image: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?q=80&w=1200&auto=format&fit=crop",
      imageAlt: "Rows of pharmaceutical medicine boxes and packaging",
      items: [
        "Prescription medicines",
        "Over-the-counter medicines",
        "Pain relief medicines",
        "Antibiotics",
        "Antihypertensive medicines",
        "Antidiabetic medicines",
        "Gastrointestinal medicines",
        "Vitamins and supplements",
        "Pediatric medicines",
        "Women's health products"
      ]
    },
    {
      icon: "monitor",
      name: "Medical Devices & Equipment",
      image: "assets/medeq.jpg",
      imageAlt: "Medical equipment and diagnostic devices",
      items: [
        "Blood pressure monitors",
        "Thermometers",
        "Glucose meters",
        "Diagnostic accessories",
        "Patient monitoring devices",
        "Mobility / assistive products"
      ]
    },
    {
      icon: "hospital",
      name: "Hospital & Surgical Supplies",
      image: "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?q=80&w=1200&auto=format&fit=crop",
      imageAlt: "Hospital and surgical medical supplies",
      items: [
        "Surgical consumables",
        "Syringes",
        "Bandages and gauze",
        "Gloves",
        "First-aid supplies",
        "Clinical and patient-care equipment"
      ]
    },
    {
      icon: "sparkle",
      name: "Laboratory Supplies",
      image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=1200&auto=format&fit=crop",
      imageAlt: "Laboratory supplies and testing equipment",
      items: [
        "Laboratory consumables",
        "Testing and diagnostic supplies",
        "Sample collection materials",
        "Laboratory accessories"
      ]
    }
  ],

  // ---------------------------------------------------------------
  // PRODUCT SHOWCASE (example items — not a live inventory)
  // ---------------------------------------------------------------
  showcase: [
    { icon: "capsule", name: "Medicine Packaging", category: "Human Medicines", desc: "Examples of packaged pharmaceutical products supplied to healthcare providers.", image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=800&auto=format&fit=crop", imageAlt: "Pharmaceutical medicine bottle and packaging" },
    { icon: "pill", name: "Tablets & Capsules", category: "Human Medicines", desc: "A wide range of tablet and capsule medicines for everyday healthcare needs.", image: "https://images.unsplash.com/photo-1577401132921-cb39bb0adcff?q=80&w=800&auto=format&fit=crop", imageAlt: "Blister packs of pharmaceutical tablets" },
    { icon: "monitor", name: "Diagnostic Equipment", category: "Medical Devices", desc: "Devices to support monitoring and diagnostics in clinical settings.", image: "https://images.unsplash.com/photo-1666214280391-8ff5bd3c0bf0?q=80&w=800&auto=format&fit=crop", imageAlt: "Medical diagnostic equipment" },
    { icon: "thermometer", name: "Clinical Instruments", category: "Medical Devices", desc: "Reliable clinical instruments for accurate patient assessment.", image: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?q=80&w=800&auto=format&fit=crop", imageAlt: "Stethoscope and clinical instruments" },
    { icon: "hospital", name: "Hospital Supplies", category: "Hospital & Surgical", desc: "Consumables and supplies for hospitals and healthcare facilities.", image: "https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?q=80&w=800&auto=format&fit=crop", imageAlt: "Hospital and surgical supplies" },
    { icon: "glove", name: "Medical Consumables", category: "Hospital & Surgical", desc: "Protective gloves and everyday pharmaceutical consumables.", image: "https://images.unsplash.com/photo-1584362917165-526a968579e8?q=80&w=800&auto=format&fit=crop", imageAlt: "Medical gloves and consumables" },
    { icon: "sparkle", name: "Laboratory Materials", category: "Laboratory Supplies", desc: "Supplies used in laboratory testing and diagnostics.", image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?q=80&w=800&auto=format&fit=crop", imageAlt: "Laboratory testing materials" },
    { icon: "capsule", name: "Pharmaceutical Warehouse", category: "Distribution", desc: "Organized storage and handling supporting reliable supply.", image: "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?q=80&w=800&auto=format&fit=crop", imageAlt: "Pharmaceutical warehouse shelving" }
  ],

  // ---------------------------------------------------------------
  // SERVICES
  // ---------------------------------------------------------------
  services: [
    {
      icon: "capsule",
      title: "Pharmaceutical Supply",
      text: "Supply of human medicines and pharmaceutical products."
    },
    {
      icon: "monitor",
      title: "Medical Equipment Supply",
      text: "Sourcing and supply of medical devices and equipment."
    },
    {
      icon: "grid",
      title: "Procurement Support",
      text: "Support with pharmaceutical and medical supply procurement."
    },
    {
      icon: "hospital",
      title: "Healthcare Institution Supply",
      text: "Supply support for hospitals, clinics and healthcare institutions."
    },
    {
      icon: "chat",
      title: "Product Enquiries",
      text: "Contact us to ask about product availability."
    }
  ],


  whyChooseUs: [
    {
      icon: "grid",
      title: "Wide Product Range",
      text: "Pharmaceutical products, medical supplies and healthcare equipment in one place."
    },
    {
      icon: "shield",
      title: "Quality-Focused Operations",
      text: "Procurement, quality assurance and quality control built into how we work."
    },
    {
      icon: "handshake",
      title: "Professional Service",
      text: "We aim to make every interaction with healthcare partners professional and reliable."
    },
    {
      icon: "pin",
      title: "Based in Mwanza",
      text: "Positioned in Mwanza, Tanzania to support healthcare supply in the region."
    },
    {
      icon: "cross",
      title: "Healthcare Focused",
      text: "Our business is dedicated to supporting healthcare and pharmaceutical supply needs."
    }
  ],


  team: [
    {
      name: "Araphat Khamis",
      role: "Procurement Officer",
      image: "assets/arafat.jpg",
      imageAlt: "Procurement Officer",
      bio: "Responsible for procurement at Sweya Pharmaceutical Limited, supporting the sourcing and supply of pharmaceutical and healthcare products."
    },
    {
      name: "Fredrick Paul",
      role: "Quality Assurance Manager",
      image: "assets/fredrick.jpg",
      imageAlt: "Quality Assurance Manager",
      bio: "Oversees quality assurance at Sweya Pharmaceutical Limited, supporting professional and reliable pharmaceutical supply."
    },
    {
      name: "Irene Joseph Kamanzi",
      role: "Quality Control Manager",
      image: "assets/irene.jpg",
      imageAlt: "Quality Control Manager",
      bio: "Oversees quality control at Sweya Pharmaceutical Limited, supporting consistent and dependable product quality."
    }
  ],


  branches: [
    {
      name: "Sweya Pharmaceutical Limited — Mwanza",
      address: "Mwanza City, Mwanza, Tanzania",
      phone: { display: "0700 000 000", href: "tel:+255700000000" },
      mapDirectionsUrl: ""
    }
  ],


  social: {
    facebook: "",
    instagram: "",
    twitter: ""
  }
};
