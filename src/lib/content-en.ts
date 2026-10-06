import type { L } from "@/lib/language";

export const NAV_ITEMS: { href: string; label: L }[] = [
  { href: "/", label: { en: "Home" } },
  { href: "/about", label: { en: "About" } },
  { href: "/services", label: { en: "Services" } },
  { href: "/santhidham", label: { en: "Santhidham" } },
  { href: "/gallery", label: { en: "Gallery" } },
  { href: "/contact", label: { en: "Contact" } },
];

export const FEATURES: {
  icon: "ScrollText" | "Flame" | "Sparkles" | "Landmark";
  title: L;
  description: L;
}[] = [
  {
    icon: "ScrollText",
    title: { en: "Jyothisha Guidance" },
    description: { en: "Traditional astrological guidance" },
  },
  {
    icon: "Flame",
    title: { en: "Thandrika Practices" },
    description: { en: "Rooted in ancient traditions" },
  },
  {
    icon: "Sparkles",
    title: { en: "Spiritual Consultation" },
    description: { en: "Guidance for life and wellbeing" },
  },
  {
    icon: "Landmark",
    title: { en: "Santhidham Dharma Peedom" },
    description: { en: "A centre for spiritual knowledge" },
  },
];

export type Service = {
  slug: string;
  number: string;
  title: L;
  tagline: L;
  description: L;
  whoItIsFor: L;
  focus: L[];
  image: string;
  icon: "ScrollText" | "Flame" | "Sparkles" | "Users" | "Flower2";
};

export const SERVICES: Service[] = [
  {
    slug: "jyothisha-consultation",
    number: "01",
    title: { en: "Jyothisha Consultation" },
    tagline: { en: "Traditional readings for life's important questions" },
    description: {
      en: "A traditional Jyothisha consultation that approaches the birth chart as a reflective map, offering considered perspective on temperament, timing and the larger patterns of one's life.",
    },
    whoItIsFor: {
      en: "For individuals seeking a traditional reading of their chart, or perspective when facing important decisions, transitions and questions of timing.",
    },
    focus: [
      { en: "Reading of the birth chart within the traditional Jyothisha framework" },
      { en: "Discussion of present life phases and their significance" },
      { en: "Suggestions for reflection, discipline and meaningful observance" },
    ],
    image: "/images/service-01.jpg",
    icon: "ScrollText",
  },
  {
    slug: "thandrika-guidance",
    number: "02",
    title: { en: "Thandrika Guidance" },
    tagline: { en: "Guidance rooted in ancient Thandrika traditions" },
    description: {
      en: "Guidance drawn from Thandrika traditions, supporting individuals and families in understanding prescribed practices, their observance and their deeper spiritual intent.",
    },
    whoItIsFor: {
      en: "For those wishing to understand or follow traditional Thandrika practices correctly, and for families seeking guidance for observances at home.",
    },
    focus: [
      { en: "Understanding relevant Thandrika practices and their purpose" },
      { en: "Guidance on observances and their proper performance" },
      { en: "Answers to questions arising from traditional practice" },
    ],
    image: "/images/service-02.jpg",
    icon: "Flame",
  },
  {
    slug: "spiritual-consultation",
    number: "03",
    title: { en: "Spiritual Consultation" },
    tagline: { en: "Personal guidance for clarity and direction" },
    description: {
      en: "A personal conversation for those seeking clarity, direction and a grounded spiritual perspective on the path ahead, held in a respectful and confidential setting.",
    },
    whoItIsFor: {
      en: "For anyone experiencing uncertainty or a period of change, and seeking calm, considered guidance.",
    },
    focus: [
      { en: "Personal discussion in a respectful and confidential setting" },
      { en: "Perspective on present circumstances and the questions they raise" },
      { en: "Simple practices that support awareness and inner steadiness" },
    ],
    image: "/images/service-03.jpg",
    icon: "Sparkles",
  },
  {
    slug: "family-life-guidance",
    number: "04",
    title: { en: "Family & Life Guidance" },
    tagline: { en: "Steady counsel for family and personal matters" },
    description: {
      en: "Considered guidance on matters relating to family life, relationships, household responsibilities and significant personal decisions.",
    },
    whoItIsFor: {
      en: "For families and individuals seeking harmony, understanding and a steady perspective on everyday life matters.",
    },
    focus: [
      { en: "Family and relationship matters" },
      { en: "Decisions concerning home and personal life" },
      { en: "Ways to bring balance and understanding into daily living" },
    ],
    image: "/images/service-04.jpg",
    icon: "Users",
  },
  {
    slug: "spiritual-practices",
    number: "05",
    title: { en: "Spiritual Practices" },
    tagline: { en: "Tradition carried into daily life" },
    description: {
      en: "Introductions to relevant spiritual practices and observances — their meaning, their method and their place in everyday life.",
    },
    whoItIsFor: {
      en: "For those beginning a practice, returning after a pause, or wishing to deepen an existing observance.",
    },
    focus: [
      { en: "Guidance on practices suited to one's circumstances" },
      { en: "The meaning and method of everyday observance" },
      { en: "Building a steady and sustainable spiritual routine" },
    ],
    image: "/images/service-05.jpg",
    icon: "Flower2",
  },
];

export const PHILOSOPHY_PILLARS: { number: string; title: L; text: L }[] = [
  {
    number: "01",
    title: { en: "Wisdom" },
    text: { en: "Understanding knowledge preserved through generations." },
  },
  {
    number: "02",
    title: { en: "Guidance" },
    text: { en: "Finding clarity when life's path becomes uncertain." },
  },
  {
    number: "03",
    title: { en: "Inner Peace" },
    text: { en: "Moving towards balance, awareness and spiritual wellbeing." },
  },
];

/**
 * PLACEHOLDER CONTENT.
 * The quotes below are design placeholders taken from the approved mockup.
 * Replace them with verified testimonials before launch.
 */
export const TESTIMONIALS: {
  quote: L;
  name: L;
  location: L;
  placeholder: boolean;
}[] = [
  {
    quote: {
      en: "The guidance I received gave me a fresh perspective and clarity in life.",
    },
    name: { en: "Vishnu R." },
    location: { en: "Kochi" },
    placeholder: true,
  },
  {
    quote: {
      en: "A very peaceful and meaningful experience. Truly grateful.",
    },
    name: { en: "Anitha S." },
    location: { en: "Ernakulam" },
    placeholder: true,
  },
  {
    quote: {
      en: "The spiritual guidance here has helped me immensely.",
    },
    name: { en: "Rajesh M." },
    location: { en: "Kalam" },
    placeholder: true,
  },
];

/* ------------------------------------------------------------------ */
/* Home page copy                                                      */
/* ------------------------------------------------------------------ */

export const HOME = {
  hero: {
    eyebrow: { en: "Thandrika Jyothisha Acharyan" },
    nameLine1: { en: "Sri. Muraleedhara" },
    nameLine2: { en: "Swamikal" },
    institution: { en: "Santhidham Dharma Peedom" },
    ashram: { en: "Madadhipathi Sadguru Ashram, Pantheerankavu" },
    statement1: { en: "Guidance Rooted in" },
    statement2: { en: "Ancient Wisdom" },
    description: {
      en: "Traditional Jyothisha, Thandrika knowledge and spiritual guidance for greater clarity, balance and inner awareness.",
    },
    primaryCta: { en: "Book a Consultation" },
    secondaryCta: { en: "Contact on WhatsApp" },
  },
  about: {
    eyebrow: { en: "About" },
    title: { en: "Sri. Muraleedhara Swamikal" },
    portraitAlt: {
      en: "Sri. Muraleedhara Swamikal, Thandrika Jyothisha Acharyan",
    },
    paragraphs: [
      {
        en: "Sri. Muraleedhara Swamikal, Thandrika Jyothisha Acharyan and Madadhipathi Sadguru of Santhidham Dharma Peedom, is dedicated to guiding individuals through traditional spiritual knowledge, Jyothisha and Thandrika traditions.",
      },
      {
        en: "His approach is rooted in the belief that ancient wisdom can help individuals understand life's challenges, find clarity and move towards greater inner balance.",
      },
    ],
    cta: { en: "Know More About Swamikal" },
  },
  santhidham: {
    eyebrow: { en: "Santhidham Dharma Peedom" },
    title1: { en: "A Centre for Spiritual" },
    title2: { en: "Knowledge & Guidance" },
    description: {
      en: "Santhidham Dharma Peedom, located at Pantheerankavu, is a spiritual centre dedicated to the preservation and practice of traditional knowledge, dharma and spiritual values.",
    },
    cta: { en: "Explore Santhidham" },
  },
  services: {
    eyebrow: { en: "Our Services" },
    title: { en: "Spiritual Guidance for a Better Tomorrow" },
    cta: { en: "View All Services" },
  },
  philosophy: {
    eyebrow: { en: "Our Philosophy" },
    title: { en: "The Path Begins With Understanding" },
  },
  gallery: {
    eyebrow: { en: "Gallery" },
    title: { en: "Moments from Santhidham" },
    cta: { en: "View More Photos" },
  },
  testimonials: {
    eyebrow: { en: "Testimonials" },
    title: { en: "Words From Those Who Have Sought Guidance" },
    note: { en: "Placeholder content — to be replaced with verified testimonials." },
  },
  cta: {
    eyebrow: { en: "Consultations" },
    title: { en: "Begin Your Journey Towards Clarity" },
    description: {
      en: "For consultations, spiritual guidance and enquiries, connect with Santhidham Dharma Peedom.",
    },
    primary: { en: "Book a Consultation" },
    secondary: { en: "Contact on WhatsApp" },
    imageAlt: { en: "Traditional lamp lit at Santhidham Dharma Peedom" },
  },
  philosophyImageAlt: {
    en: "Traditional brass lamp lit for an evening observance",
  },
  santhidhamImageAlt: {
    en: "Kerala heritage architecture at Santhidham Dharma Peedom, Pantheerankavu",
  },
} as const;

/* ------------------------------------------------------------------ */
/* About page                                                          */
/* NOTE: biography sections are written from verified information only. */
/* Add further verified details to the copy blocks below as supplied.  */
/* ------------------------------------------------------------------ */

export const ABOUT_PAGE = {
  hero: {
    eyebrow: { en: "About" },
    title: { en: "About Swamikal" },
    subtitle: { en: "Thandrika Jyothisha Acharyan" },
    description: {
      en: "Madadhipathi Sadguru of Santhidham Dharma Peedom, guiding individuals through traditional spiritual knowledge.",
    },
  },
  sections: [
    {
      id: "introduction",
      eyebrow: { en: "Introduction" },
      title: { en: "Sri. Muraleedhara Swamikal" },
      paragraphs: [
        {
          en: "Sri. Muraleedhara Swamikal is a Thandrika Jyothisha Acharyan and the Madadhipathi Sadguru of Santhidham Dharma Peedom, located at Pantheerankavu in Kerala.",
        },
        {
          en: "He is dedicated to guiding individuals through traditional spiritual knowledge, Jyothisha and Thandrika traditions, and to keeping these streams of knowledge accessible to those who seek them.",
        },
      ],
      image: "/images/portrait.jpg",
      imageAlt: {
        en: "Portrait of Sri. Muraleedhara Swamikal",
      },
    },
    {
      id: "spiritual-journey",
      eyebrow: { en: "Spiritual Journey" },
      title: { en: "A Life Rooted in Tradition" },
      paragraphs: [
        {
          en: "The journey of Santhidham is one of continuity — of receiving traditional knowledge and carrying it forward with care, discipline and service.",
        },
        {
          en: "At Pantheerankavu, this work is expressed daily through guidance, consultation and the practice of time-honoured spiritual observances, for the benefit of individuals and families who come seeking direction.",
        },
        // Replace with verified biographical detail as it becomes available.
      ],
      image: "/images/hero-mobile.jpg",
      imageAlt: {
        en: "Sri. Muraleedhara Swamikal at Santhidham Dharma Peedom",
      },
    },
    {
      id: "philosophy",
      eyebrow: { en: "Philosophy" },
      title: { en: "Wisdom That Meets the Moment" },
      paragraphs: [
        {
          en: "Swamikal's approach is rooted in the belief that ancient wisdom can help individuals understand life's challenges, find clarity and move towards greater inner balance.",
        },
        {
          en: "Traditional knowledge is not treated as a relic of the past, but as a living guide — one that offers perspective when life feels uncertain and steadiness when choices are difficult.",
        },
      ],
      image: "/images/lamp.jpg",
      imageAlt: { en: "Traditional brass lamp lit for an evening observance" },
    },
    {
      id: "approach",
      eyebrow: { en: "Approach to Guidance" },
      title: { en: "Respectful, Considered, Personal" },
      paragraphs: [
        {
          en: "Every consultation is approached with respect for the individual, confidentiality in discussion and patience in listening.",
        },
        {
          en: "Guidance is offered in the traditional spirit: to inform reflection and support balanced decision-making, never to impose fear or to promise outcomes.",
        },
      ],
      image: "/images/service-03.jpg",
      imageAlt: { en: "A traditional consultation setting at the ashram" },
    },
    {
      id: "santhidham",
      eyebrow: { en: "Santhidham Dharma Peedom" },
      title: { en: "The Centre of His Work" },
      paragraphs: [
        {
          en: "Santhidham Dharma Peedom, Madadhipathi Sadguru Ashram at Pantheerankavu, is the institutional home of this work — a centre dedicated to traditional knowledge, spiritual guidance and dharmic values.",
        },
        {
          en: "It is here that consultations, teaching and spiritual activities are held, and where the values that guide Swamikal's work are practised and shared.",
        },
      ],
      image: "/images/heritage.jpg",
      imageAlt: {
        en: "Kerala heritage architecture at Santhidham Dharma Peedom",
      },
    },
  ],
} as const;

/* ------------------------------------------------------------------ */
/* Services page                                                       */
/* ------------------------------------------------------------------ */

export const SERVICES_PAGE = {
  hero: {
    eyebrow: { en: "Our Services" },
    title: { en: "Guidance Rooted in Tradition" },
    subtitle: { en: "Traditional consultations & spiritual guidance" },
    description: {
      en: "Five areas of guidance offered at Santhidham Dharma Peedom, each held within the framework of traditional knowledge.",
    },
  },
  disclaimer: {
    en: "Consultations offer traditional spiritual guidance and perspective. They are not a substitute for medical, legal or financial advice, and no specific outcome is promised or guaranteed.",
  },
  ctaLabel: { en: "Book a Consultation" },
  serviceNumber: { en: "Service" },
  whoItIsFor: { en: "Who it is for" },
  focusHeading: { en: "What the consultation focuses on" },
  pleaseNote: { en: "Please note" },
  nextStepEyebrow: { en: "Next Step" },
  nextStep: { en: "Begin Your Journey Towards Clarity" },
  nextStepDesc: {
    en: "Share your details and the area of guidance you are seeking — the ashram will reach out to confirm a suitable time.",
  },
} as const;

/* ------------------------------------------------------------------ */
/* Santhidham page                                                     */
/* ------------------------------------------------------------------ */

export const SANTHIDHAM_PAGE = {
  hero: {
    eyebrow: { en: "Santhidham Dharma Peedom" },
    title: { en: "Santhidham Dharma Peedom" },
    subtitle: { en: "Madadhipathi Sadguru Ashram, Pantheerankavu" },
    description: {
      en: "A spiritual centre for traditional knowledge, guidance and dharmic values.",
    },
    viewGallery: { en: "View Gallery" },
  },
  about: {
    eyebrow: { en: "About Santhidham" },
    title: { en: "A Home for Traditional Knowledge" },
    paragraphs: [
      {
        en: "Santhidham Dharma Peedom is located at Pantheerankavu, Kerala, and functions as a spiritual centre dedicated to the preservation and practice of traditional knowledge, dharma and spiritual values.",
      },
      {
        en: "Under the guidance of Sri. Muraleedhara Swamikal, Madadhipathi Sadguru of the ashram, Santhidham welcomes individuals and families seeking consultation, teaching and a deeper connection with traditional spiritual life.",
      },
    ],
  },
  purpose: {
    eyebrow: { en: "Our Purpose" },
    title: { en: "Why Santhidham Exists" },
    items: [
      {
        title: { en: "Preserve" },
        text: {
          en: "To keep traditional streams of knowledge alive through teaching, guidance and practice.",
        },
      },
      {
        title: { en: "Guide" },
        text: {
          en: "To offer considered spiritual guidance to those seeking clarity in personal and family life.",
        },
      },
      {
        title: { en: "Serve" },
        text: {
          en: "To function as an accessible centre of learning and support for the wider community.",
        },
      },
      {
        title: { en: "Uphold" },
        text: {
          en: "To stand for dharmic values in everyday life and in the life of the institution itself.",
        },
      },
    ],
  },
  knowledge: {
    eyebrow: { en: "Spiritual Knowledge" },
    title: { en: "Knowledge Passed Down With Care" },
    paragraphs: [
      {
        en: "The knowledge held at Santhidham is traditional in character — Jyothisha, Thandrika practice and spiritual teaching received through lineages of practice and shared in the same spirit.",
      },
      {
        en: "Study and consultation at the ashram are approached with seriousness and humility, so that what is received can be understood rather than merely repeated.",
      },
    ],
    points: [
      { en: "Traditional Jyothisha study and consultation" },
      { en: "Thandrika practices and their correct observance" },
      { en: "Spiritual teaching for everyday life" },
      { en: "Guidance on dharma, conduct and self-discipline" },
    ],
  },
  practices: {
    eyebrow: { en: "Traditional Practices" },
    title: { en: "Practices Held in the Traditional Way" },
    paragraphs: [
      {
        en: "Observances at the ashram follow traditional methods and timings, carried out with the care and attention that these practices require.",
      },
      {
        en: "Devotees and families are guided in how these practices may be observed respectfully, both at Santhidham and within their own homes.",
      },
    ],
    items: [
      { en: "Evening lamp and prayer observances" },
      { en: "Traditional ceremonies and rituals" },
      { en: "Festival and auspicious-day observances" },
      { en: "Guidance for household practice" },
    ],
  },
  activities: {
    eyebrow: { en: "Activities" },
    title: { en: "Life at the Ashram" },
    items: [
      {
        title: { en: "Consultations" },
        text: {
          en: "Personal and family consultations in the areas of Jyothisha, Thandrika and spiritual guidance.",
        },
      },
      {
        title: { en: "Teaching" },
        text: {
          en: "Sharing the principles and practices of traditional knowledge with those who wish to learn.",
        },
      },
      {
        title: { en: "Observances" },
        text: {
          en: "Regular spiritual observances held at the ashram throughout the year.",
        },
      },
      {
        title: { en: "Community" },
        text: {
          en: "Receiving visitors, devotees and families who come to Santhidham for guidance and darshan.",
        },
      },
    ],
  },
  galleryPreview: {
    eyebrow: { en: "Gallery" },
    title: { en: "Moments from Santhidham" },
    description: {
      en: "A glimpse of the ashram, its observances and the people who visit.",
    },
    viewMore: { en: "View More Photos" },
    visitTitle: { en: "Visit Santhidham" },
    visitDesc: {
      en: "For consultations, spiritual guidance and enquiries, connect with Santhidham Dharma Peedom.",
    },
    contact: { en: "Contact" },
  },
} as const;

/* ------------------------------------------------------------------ */
/* Contact page                                                        */
/* ------------------------------------------------------------------ */

export const CONTACT_PAGE = {
  hero: {
    eyebrow: { en: "Contact" },
    title: { en: "Seek Guidance" },
    subtitle: { en: "Santhidham Dharma Peedom, Pantheerankavu" },
    description: {
      en: "For consultations, spiritual guidance and enquiries, connect with Santhidham Dharma Peedom.",
    },
    imageAlt: { en: "Santhidham Dharma Peedom at dusk" },
  },
  channels: [
    { label: { en: "Phone" }, value: { en: "9895843138" } },
    { label: { en: "Email" }, value: { en: "sadguru9895@gmail.com" } },
    {
      label: { en: "Location" },
      value: {
        en: "Santhidham Dharma Peedom, Madadhipathi Sadguru Ashram, Pantheerankavu, Kerala",
      },
    },
  ],
  actions: {
    call: { en: "Call Now" },
    whatsapp: { en: "WhatsApp" },
    book: { en: "Book a Consultation" },
  },
  form: {
    eyebrow: { en: "Enquiry" },
    title: { en: "Request a Consultation" },
    description: {
      en: "Share your details and the area of guidance you are seeking. The ashram will reach out to you to confirm a suitable time.",
    },
    fields: {
      name: { en: "Name" },
      phone: { en: "Phone" },
      email: { en: "Email" },
      preferred: { en: "Preferred Consultation" },
      message: { en: "Message" },
    },
    placeholders: {
      name: { en: "Your full name" },
      phone: { en: "Your phone number" },
      email: { en: "your@email.com" },
      message: { en: "Tell us briefly what you would like guidance for" },
    },
    selectDefault: { en: "Select an area of guidance" },
    submit: { en: "Submit Request" },
    successTitle: { en: "Your consultation request has been received." },
    successText: {
      en: "This is a demonstration confirmation. No data has been sent. Connect a form endpoint to receive enquiries.",
    },
    successAgain: { en: "Send another enquiry" },
    errors: {
      name: { en: "Please enter your name." },
      phone: { en: "Please enter a valid phone number (10 digits)." },
      email: { en: "Please enter a valid email address." },
      preferred: { en: "Please choose an area of guidance." },
      message: { en: "Please add a short message." },
    },
  },
} as const;

/* ------------------------------------------------------------------ */
/* Shared UI copy                                                      */
/* ------------------------------------------------------------------ */

export const UI = {
  learnMore: { en: "Learn more" },
  readMore: { en: "Read More" },
  exploreSanthidham: { en: "Explore Santhidham" },
  bookConsultation: { en: "Book a Consultation" },
  skipToContent: { en: "Skip to content" },
  quickLinks: { en: "Quick Links" },
  contact: { en: "Contact" },
  copyright: { en: "All rights reserved." },
  allRights: { en: "All rights reserved." },
  directContact: { en: "Direct Contact" },
  placeholderTestimonials: { en: "Placeholder content" },
  galleryAll: { en: "All" },
  galleryPhoto: { en: "photo" },
  galleryPhotos: { en: "photos" },
  galleryPhotosIn: { en: "in" },
  closeMenu: { en: "Close menu" },
  openMenu: { en: "Open menu" },
  close: { en: "Close" },
  previous: { en: "Previous" },
  next: { en: "Next" },
  lightboxHint: { en: "Use ← → to navigate · Esc to close · swipe on mobile" },
  chatWhatsApp: { en: "Chat on WhatsApp" },
  madadhipathi: { en: "Madadhipathi Sadguru" },
  photoCount: { en: "photos" },
  viewGallery: { en: "View gallery" },
  openImage: { en: "Open image" },
  pleaseNote: { en: "Please note" },
  serviceNumber: { en: "Service" },
  whoItIsFor: { en: "Who it is for" },
  focusHeading: { en: "What the consultation focuses on" },
  fieldsRequired: { en: "Fields marked * are required." },
  formPrivacy: {
    en: "Your details are used only to respond to this enquiry.",
  },
  consultationOptions: [
    { en: "Jyothisha Consultation" },
    { en: "Thandrika Guidance" },
    { en: "Spiritual Consultation" },
    { en: "Family & Life Guidance" },
    { en: "Spiritual Practices" },
  ],
  galleryCategories: [
    { en: "Swamikal" },
    { en: "Santhidham" },
    { en: "Spiritual Activities" },
    { en: "Events" },
    { en: "Visitors" },
  ],
  galleryPage: {
    hero: {
      eyebrow: { en: "Gallery" },
      title: { en: "Moments from Santhidham" },
      subtitle: { en: "Santhidham Dharma Peedom · Pantheerankavu" },
      description: {
        en: "A visual journey through the ashram, its observances, celebrations and the people who visit.",
      },
      imageAlt: {
        en: "Kerala heritage architecture at Santhidham Dharma Peedom",
      },
    },
    collection: {
      eyebrow: { en: "The Collection" },
      title: { en: "Santhidham in Pictures" },
      description: {
        en: "Browse by category. Select any photograph to view it full screen.",
      },
    },
    note: {
      en: "Photography shown here is indicative of the ashram and its activities. Final photographs can be swapped without any layout changes.",
    },
  },
  aboutPage: {
    heroImageAlt: {
      en: "Sri. Muraleedhara Swamikal seated at Santhidham Dharma Peedom",
    },
    readMore: { en: "Read More" },
    bookConsultation: { en: "Book a Consultation" },
  },
  santhidham: {
    heroImageAlt: {
      en: "Kerala heritage architecture at Santhidham Dharma Peedom",
    },
    aboutImageAlt: {
      en: "Kerala heritage architecture at Santhidham Dharma Peedom",
    },
    knowledgeImageAlt: {
      en: "Traditional observance with sacred fire at Santhidham",
    },
    practicesImageAlt: { en: "Traditional brass lamp lit for an observance" },
    galleryViewAria: { en: "View gallery" },
    phone: { en: "Phone" },
    email: { en: "Email" },
    location: { en: "Location" },
    callNow: { en: "Call Now" },
    whatsapp: { en: "WhatsApp" },
    institutionLine: { en: "Santhidham Dharma Peedom" },
  },
  servicesPage: {
    heroImageAlt: { en: "Traditional brass lamp lit at the ashram" },
    bookConsultation: { en: "Book a Consultation" },
  },
  siteNavigation: { en: "Site navigation" },
  callOrganization: { en: "Call Santhidham Dharma Peedom" },
  contactWhatsApp: { en: "Contact on WhatsApp" },
  galleryViewPrefix: { en: "View gallery" },
  languageSelection: { en: "Language selection" },
} as const;

export const PAGE_METADATA = {
  home: {
    title: {
      en: "Sri. Muraleedhara Swamikal | Santhidham Dharma Peedom, Pantheerankavu",
    },
    description: {
      en:
        "Sri. Muraleedhara Swamikal, Thandrika Jyothisha Acharyan and Madadhipathi Sadguru of Santhidham Dharma Peedom — traditional Jyothisha, Thandrika guidance and spiritual consultation at Pantheerankavu, Kerala.",
    },
  },
  about: {
    title: {
      en: "About Swamikal — Sri. Muraleedhara Swamikal, Thandrika Jyothisha Acharyan",
    },
    description: {
      en:
        "About Sri. Muraleedhara Swamikal, Thandrika Jyothisha Acharyan and Madadhipathi Sadguru of Santhidham Dharma Peedom, Pantheerankavu — his approach to traditional guidance, philosophy and work.",
    },
    ogTitle: { en: "About Swamikal | Sri. Muraleedhara Swamikal" },
    ogDescription: {
      en:
        "Thandrika Jyothisha Acharyan and Madadhipathi Sadguru of Santhidham Dharma Peedom, Pantheerankavu.",
    },
  },
  services: {
    title: {
      en: "Guidance Rooted in Tradition — Services at Santhidham Dharma Peedom",
    },
    description: {
      en:
        "Jyothisha Consultation, Thandrika Guidance, Spiritual Consultation, Family & Life Guidance and Spiritual Practices offered by Sri. Muraleedhara Swamikal at Santhidham Dharma Peedom, Pantheerankavu.",
    },
    ogTitle: { en: "Guidance Rooted in Tradition | Santhidham Dharma Peedom" },
    ogDescription: {
      en:
        "Five areas of traditional guidance and spiritual consultation at Santhidham Dharma Peedom, Pantheerankavu.",
    },
  },
  santhidham: {
    title: {
      en: "Santhidham Dharma Peedom — Madadhipathi Sadguru Ashram, Pantheerankavu",
    },
    description: {
      en:
        "Santhidham Dharma Peedom, Pantheerankavu — a spiritual centre dedicated to traditional knowledge, spiritual guidance and dharmic values, guided by Sri. Muraleedhara Swamikal.",
    },
    ogTitle: { en: "Santhidham Dharma Peedom | Pantheerankavu" },
    ogDescription: {
      en: "A centre for spiritual knowledge and guidance rooted in Kerala heritage tradition.",
    },
  },
  gallery: {
    title: { en: "Gallery — Moments from Santhidham" },
    description: {
      en:
        "Photographs of Santhidham Dharma Peedom, its heritage architecture, spiritual activities, events and visitors — Pantheerankavu, Kerala.",
    },
    ogTitle: { en: "Gallery | Santhidham Dharma Peedom" },
    ogDescription: {
      en: "Moments from Santhidham — the ashram, its observances and the people who visit.",
    },
  },
  contact: {
    title: { en: "Seek Guidance — Contact Santhidham Dharma Peedom" },
    description: {
      en:
        "Contact Santhidham Dharma Peedom, Pantheerankavu — call 9895843138, email sadguru9895@gmail.com or request a consultation with Sri. Muraleedhara Swamikal.",
    },
    ogTitle: { en: "Seek Guidance | Santhidham Dharma Peedom" },
    ogDescription: {
      en:
        "For consultations, spiritual guidance and enquiries, connect with Santhidham Dharma Peedom, Pantheerankavu.",
    },
  },
} as const;
