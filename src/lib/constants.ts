import Hero from "@/components/sections/Hero";

export const COMPANY_DETAILS = {
  name: "SHROFF PROCESS PRODUCTS",
  parent: "SHROFF PROCESS PRODUCTS",
  tagline: "Engineered to Flex. Built to Last.",
  yearFounded: 1974,
  countriesServed: 25,
  clientsCount: 500,
  /** Use with tel: href (digits, E.164-style) */
  phone: "+919227105232",
  /** Obfuscated display (no extra labels — section headings provide context) */
  phoneDisplay: "(+91) Nine double two seven one zero five two three two",
  emailPrimary: "shroffproducts@gmail.com",
  emailSecondary: "info@shroffprocesspumps.com",
  emailDisplayLine1: "shroffproducts (at) gmail (dot) com",
  emailDisplayLine2: "info (at) shroffprocesspumps (dot) com",
  address:
    "A3/121, Associated Society, Old Padra Road, Vadodara - 390020, Gujarat Bharat",
};

export const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Products", href: "/products" },
  { name: "The Anatomy of Excellence", href: "/about#our-process", footerOnly: true },
  { name: "Why Choose Us", href: "/about#why-choose-us", footerOnly: true },
  { name: "Contact", href: "/contact" },
];

export const CLIENT_LOGOS = [
  "TATA",
  "ADANI",
  "UPL",
  "BOROSIL",
  "HINDALCO",
  "GRASIM",
  "HZL",
  "VEDANTA",
  "BHEL",
  "NTPC",
  "SAIL",
  "JSW",
  "AMUL",
];

// ─── DN Size Options (used in product enquiry form) ─────────────────────────
export const PRODUCT_DN_SIZES = [
  "DN 25", "DN 32", "DN 40", "DN 50", "DN 65", "DN 80",
  "DN 100", "DN 125", "DN 150", "DN 200", "DN 250", "DN 300",
  "DN 350", "DN 400", "DN 450", "DN 500", "DN 600", "DN 700",
  "DN 800", "DN 900", "DN 1000", "DN 1050", "DN 1100", "DN 1200",
  "DN 1300", "DN 1400", "DN 1600", "DN 1800", "DN 2000",
  "DN 2200", "DN 2400", "DN 2600", "DN 2800", "DN 3000",
];

// ─── Active Product Catalog ──────────────────────────────────────────────────
export const PRODUCTS_CATALOG = [
  {
    slug: "cu-type-rubber-expansion-joint",
    title: "CU Type – Rubber Expansion Joint",
    subtitle: "Integral Rubber Flanges with Control Unit & Tie Rod Assembly",
    size: "DN 25 to 3000 mm",
    temperature: "Up to 120°C",
    description:
      "Rubber Expansion Joint with integral rubber flanges, supplied with Steel Split Retainer Rings, Control Unit Plates and Tie Rod Assembly. Engineered for systems requiring movement compensation in axial and lateral offset directions.",
    image: "/product-images/CU Type.jpg",
    detailImage: "/product-images/CU Type.jpg",
    features: [
      "Robust design with integral rubber flanges",
      "Available in EPDM, Neoprene, Butyl, Nitrile, Natural and other elastomers",
      "Moves in both axial and lateral offset directions",
      "Thermal expansion, settlement and movement compensation",
      "Compensation of misalignment",
    ],
  },
  {
    slug: "srr-type-rubber-expansion-joint",
    title: "SRR Type – Rubber Expansion Joint",
    subtitle: "Integral Rubber Flanges with Steel Split Retainer Rings",
    size: "DN 25 to 3000 mm",
    temperature: "Up to 120°C",
    description:
      "Rubber Expansion Joint with integral rubber flanges, supplied with Steel Split Retainer Rings. Available in single, double, triple arch and filled arch models with optional stainless steel backing rings and custom bolt hole drilling.",
    image: "/product-images/SRR Type.jpg",
    detailImage: "/product-images/SRR Type.jpg",
    features: [
      "Robust design with integral rubber flanges",
      "Available in EPDM, Neoprene, Butyl, Nitrile, Natural and other elastomers",
      "Moves in both axial and lateral offset directions",
      "Single, double, triple arch & filled arch models available",
      "304 or 316 stainless steel flange backing rings available",
      "Special bolt hole drilling available",
      "Non-standard designs manufactured as required",
    ],
  },
  {
    slug: "ffr-type-rubber-expansion-bellow",
    title: "FFR Type – Rubber Expansion Bellow",
    subtitle: "Integral Full Face Rubber Flanges",
    size: "DN 25 to 3000 mm",
    temperature: "Up to 120°C",
    description:
      "Rubber Expansion Bellow with integral full face rubber flanges. Designed for complete face-to-face sealing across the flange bore, ideal for large pipelines requiring comprehensive sealing and flexibility.",
    image: "/product-images/FFR Type.jpg",
    detailImage: "/product-images/FFR Type.jpg",
    features: [
      "Robust design with integral full face rubber flanges",
      "Available in EPDM, Neoprene, Butyl, Nitrile, Natural and other elastomers",
      "Moves in both axial and lateral offset directions",
      "Single, double, triple arch & filled arch models available",
      "Special bolt hole drilling available",
      "Non-standard designs manufactured as required",
    ],
  },
  {
    slug: "concentric-eccentric-srr-type",
    title: "Concentric & Eccentric SRR Type",
    subtitle: "Reducer Expansion Joint with Steel Split Retainer Rings",
    size: "DN 50 to 450 mm",
    temperature: "Up to 120°C",
    description:
      "Rubber Expansion Joint with integral rubber flanges and Steel Split Retainer Rings for reducer applications. Provides an expansion joint and reduces to accommodate a pipe size change — ideal for flexible pump connectors where pipe size changes at the equipment.",
    image: "/product-images/Concentric & Eccentric SRR Type.jpg",
    detailImage: "/product-images/Concentric & Eccentric SRR Type.jpg",
    features: [
      "Robust design with integral rubber flanges",
      "Reduces to accommodate a pipe size change",
      "Ideal for pump connections requiring a size change",
      "Available in EPDM, Neoprene, Butyl, Nitrile, Natural and other elastomers",
      "Axial and lateral offset movement",
      "Control units are optional",
      "304 or 316 stainless steel flange backing rings available",
      "Non-standard designs manufactured as required",
    ],
  },
  {
    slug: "rf-type-rubber-expansion-joint",
    title: "RF Type – Rubber Expansion Joint",
    subtitle: "Rotating Metal Flanges (Swivel Flanges)",
    size: "DN 25 to 900 mm",
    temperature: "Up to 120°C",
    description:
      "Rubber Expansion Joint with freely rotating metal swivel flanges for economical, easy installation. Flanges rotate to align bolt holes without twisting the bellows body.",
    image: "/product-images/RF Type.jpg",
    detailImage: "/product-images/RF Type.jpg",
    features: [
      "Economical and easy installation",
      "Flanges rotate freely for bolt hole alignment",
      "Available in EPDM, Neoprene, Butyl, Nitrile, Natural and other elastomers",
      "304 or 316 stainless steel flanges available",
      "Special bolt hole drilling available",
      "Non-standard designs manufactured as required",
    ],
  },
  {
    slug: "rfcu-type-rubber-expansion-joint",
    title: "RFCU Type – Rubber Expansion Joint",
    subtitle: "Rotating Metal Flanges with Tie Rod Assembly & Control Unit Plates",
    size: "DN 25 to 900 mm",
    temperature: "Up to 120°C",
    description:
      "Rubber Expansion Joint with rotating metal swivel flanges, supplied with Tie Rod Assembly and Control Unit Plates. Control Unit Plates are either welded to the flanges or supplied loose for maximum installation flexibility.",
    image: "/product-images/RFCU Type.jpg",
    detailImage: "/product-images/RFCU Type.jpg",
    features: [
      "Economical and easy installation",
      "Flanges rotate freely for bolt hole alignment",
      "Control Unit Plates welded or supplied loose",
      "Available in EPDM, Neoprene, Butyl, Nitrile, Natural and other elastomers",
      "304 or 316 stainless steel flanges available",
      "Special bolt hole drilling available",
      "Non-standard designs manufactured as required",
    ],
  },
  {
    slug: "spool-type-rubber-expansion-bellow",
    title: "Spool Type – Rubber Expansion Bellow",
    subtitle: "Rubber Pipe Connector (No Arch)",
    size: "DN 25 to 900 mm",
    temperature: "Up to 120°C",
    description:
      "Rubber Pipe Connector with no arch profile. Designed to suppress noise and vibration from pumps, chillers and other mechanical equipment. Flexible, easy to install and available in a wide range of elastomers.",
    image: "/product-images/Spool Type.jpg",
    detailImage: "/product-images/Spool Type.jpg",
    features: [
      "No arch — smooth rubber pipe connector profile",
      "Suppresses noise and vibration from pumps and chillers",
      "Available in EPDM, Neoprene, Butyl, Nitrile, Natural and other elastomers",
      "Special bolt hole drilling available",
      "Non-standard designs manufactured as required",
    ],
  },
  {
    slug: "clamp-type-multi-arch",
    title: "Clamp Type Multi Arch – Rubber Expansion Bellow",
    subtitle: "Multiple Arcs with Sleeve Ends for Clamp Fixing",
    size: "DN 25 to 1200 mm",
    temperature: "—",
    description:
      "Multi-arch rubber expansion bellow with sleeve ends that clamp directly over pipes. Widely used on vibrating screens to suppress vibration transfer to adjoining structures and act as a dust-tight enclosure preventing spillage of powders, granules or aggregates.",
    image: "/product-images/Clamp Type Multi Arch.jpg",
    detailImage: "/product-images/Clamp Type Multi Arch.jpg",
    features: [
      "Multiple arcs for maximum movement compensation",
      "Sleeve ends clamp directly over pipes",
      "Fabric reinforcement construction",
      "SS316 Vacuum Support Rings available",
      "Used on vibrating screens and bulk material systems",
      "Acts as a dust-tight enclosure",
      "Available in Silicon, EPDM, Neoprene, Butyl, Nitrile, Natural and other elastomers",
    ],
  },
  {
    slug: "clamp-type-single-arch",
    title: "Clamp Type Single Arch – Rubber Expansion Bellow",
    subtitle: "Single Arc with Sleeve Ends for Clamp Fixing",
    size: "DN 25 to 1200 mm",
    temperature: "—",
    description:
      "Single-arch rubber expansion bellow with sleeve ends that clamp directly over pipes. Economical and simple to install, ideal for standard vibration isolation and movement compensation requirements.",
    image: "/product-images/Clamp Type Single Arch.jpg",
    detailImage: "/product-images/Clamp Type Single Arch.jpg",
    features: [
      "Single arch — economical and easy to install",
      "Sleeve ends clamp directly over pipes",
      "Fabric reinforcement construction",
      "Available in Silicon, EPDM, Neoprene, Butyl, Nitrile, Natural and other elastomers",
    ],
  },
  {
    slug: "bus-duct-rubber-bellow-rectangular",
    title: "Bus Duct Rubber Bellow – Rectangular",
    subtitle: "For Electrical Distribution and Transformer Applications",
    size: "Lengths up to 3000 mm",
    temperature: "—",
    description:
      "Rectangular rubber bellow designed for electrical bus duct and transformer installations. Maintains electrical safety and insulation integrity while accommodating thermal expansion and vibration. Available with or without backup metal split retainer flanges.",
    image: "/product-images/Bus Duct Rubber Bellow (Rectangular).jpg",
    detailImage: "/product-images/Bus Duct Rubber Bellow (Rectangular).jpg",
    features: [
      "Designed for electrical bus duct and transformer applications",
      "Maintains electrical safety and insulation integrity",
      "Single, double & no arch configurations with fabric reinforcement",
      "Backup flanges (metal split retainer rings) are optional",
      "Available in EPDM & Neoprene elastomers",
    ],
  },
  {
    slug: "bus-duct-rubber-bellow-round",
    title: "Rubber Bus Duct Bellow – Round",
    subtitle: "For Electrical Distribution and Transformer Applications",
    size: "OD up to 3000 mm diameter",
    temperature: "—",
    description:
      "Round rubber bellow for bus duct and transformer electrical distribution systems. Maintains insulation integrity and accommodates thermal movement and vibration. Available with or without backup metal split retainer flanges.",
    image: "/product-images/Bus Duct Rubber Bellow (Round).jpg",
    detailImage: "/product-images/Bus Duct Rubber Bellow (Round).jpg",
    features: [
      "Designed for electrical bus duct and transformer applications",
      "Maintains electrical safety and insulation integrity",
      "Single, double & no arch configurations with fabric reinforcement",
      "Backup flanges (metal split retainer rings) are optional",
      "Available in EPDM & Neoprene elastomers",
    ],
  },
  {
    slug: "se-type-rubber-expansion-joint",
    title: "SE Type – Rubber Expansion Joint",
    subtitle: "Supplied Without Flanges (Flanges in Buyer's Scope)",
    size: "DN 25 to 900 mm",
    temperature: "Up to 120°C",
    description:
      "Rubber Expansion Joint supplied without metal flanges — the buyer provides or reuses their own existing metal flanges. Economical option for replacements where the original flanges are still serviceable.",
    image: "/products/Rubber-Expansion-Joints-SE-Type.jpg",
    detailImage: "/products/Rubber-Expansion-Joints-SE-Type-Detail.jpg",
    features: [
      "Metal / steel flanges in the buyer's scope",
      "Reuse existing flanges from old or worn-out bellows",
      "Economical and easy installation",
      "Available in EPDM, Neoprene, Butyl, Nitrile, Natural and other elastomers",
      "304 or 316 stainless steel flanges available",
      "Special bolt hole drilling available",
      "Non-standard designs manufactured as required",
    ],
  },
];

// ─── Legacy Product Catalog (kept as reference — not rendered) ───────────────
export const PRODUCTS_CATALOG_LEGACY = [
  {
    slug: "se-type-rubber-expansion-joints",
    title: "Rubber Expansion Joints SE Type",
    description:
      "Standard rubber expansion joints designed to absorb vibration, compensate for thermal expansion, misalignment, and movement. Long service life compared to molded bellows.",
    image: "/products/Rubber-Expansion-Joints-SE-Type.jpg",
    detailImage: "/products/Rubber-Expansion-Joints-SE-Type-Detail.jpg",
    features: [
      "Vibration absorbing",
      "Thermal compensation",
      "ISO Compliant construction",
      "Hand-built durability",
    ],
  },
  {
    slug: "1500-nb-cu-type-bellow",
    title: "1500 NB CU Type Bellow",
    description:
      "Extra-large hand-built bellow specifically designed for 1500 Nominal Bore pipelines, complete with Control Units (CU) to limit excessive movement.",
    image: "/products/1500-NB-CU-Type.jpg",
    detailImage: "/products/1500-NB-CU-Type-Bellow-Detail.jpg",
    features: [
      "Custom extra-large sizing",
      "Integrated control units",
      "High-pressure resilience",
      "Steel-wire reinforced",
    ],
  },
  {
    slug: "ffr-1500-nb-type",
    title: "FFR 1500 NB Type Bellow",
    description:
      "Heavy-duty expansion bellow with Full Face Rubber (FFR) flanges. Engineered for large pipelines requiring comprehensive sealing and flexibility.",
    image: "/products/FFR-1500-NB-Type-Bellow.jpg",
    detailImage: "/products/FFR-1500-NB-Type-Bellow-Detail.jpg",
    features: [
      "Full Face Rubber flanges",
      "Secure sealing",
      "Large-scale pipeline integration",
      "Hand-layered construction",
    ],
  },
  {
    slug: "srr-type-bellow",
    title: "Rubber Expansion Bellow SRR Type",
    description:
      "Specialized bellow with Split Retainer Rings (SRR) for secure seating and enhanced pressure resistance. Ideal for intense industrial environments.",
    image: "/products/Rubber-Expansion-Bellow-SRR-Type.jpg",
    detailImage: "/products/Rubber-Expansion-Bellow-SRR-Type-Detail.jpg",
    features: [
      "Split Retainer Ring construction",
      "Enhanced pressure handling",
      "Easy installation",
      "Rugged performance",
    ],
  },
  {
    slug: "bus-duct-split-retainer-rings",
    title: "Bus Duct Bellow with Split Retainer Rings",
    description:
      "Custom-configured bellow for bus duct systems featuring split retainer rings, ensuring weatherproofing and dust exclusion for electrical installations.",
    image: "/products/Bus-Duct-Bellow-with-Split-Retainer-Rings.jpg",
    detailImage:
      "/products/Bus-Duct-Bellow-with-Split-Retainer-Rings-Detail.jpg",
    features: [
      "Precise bus duct fitting",
      "Weather and dust resistant",
      "Split retainer rings",
      "Electrical installation protection",
    ],
  },
  {
    slug: "rf-type-swivel-flanges-welded-stretcher",
    title: "RF Type Bellow with Swivel Flanges & Welded Stretcher Plates",
    description:
      "Advanced Raised Face (RF) bellow configuration featuring swivel flanges for easy alignment and welded stretcher plates for structural control.",
    image:
      "/products/RF-Type-Bellow-with-Swivel-Flanges-Welded-Stretcher-Plates.jpg",
    detailImage:
      "/products/RF-Type-Bellow-with-Swivel-Flanges-Welded-Stretcher-Plates-Detail.jpg",
    features: [
      "Swivel flanges for easy alignment",
      "Welded stretcher plates",
      "Raised Face configuration",
      "High tensile strength",
    ],
  },
  {
    slug: "clamp-type-multiple-arcs",
    title: "Clamp Type Bellow - Multiple Arcs",
    description:
      "Flexible clamp-style installation bellow featuring multiple arcs for maximum movement compensation in tight piping structures.",
    image: "/products/Clamp-Type-Bellow-Multiple-Arcs.jpeg",
    detailImage:
      "/products/Clamp-Type-Bellow-Multiple-Arcs-detail.jpeg",
    features: [
      "Clamp-style installation",
      "Multiple movement arcs",
      "High flexibility",
      "Quick replacement",
    ],
  },
  {
    slug: "clamp-type-single-arc",
    title: "Clamp Type Bellow - Single Arc",
    description:
      "A streamlined single-arc clamp bellow offering essential vibration isolation and simple installation for standard piping requirements.",
    image: "/products/Clamp-Type-Bellow-Single-Arc.jpeg",
    detailImage:
      "/products/Clamp-Type-Bellow-Single-Arc-detail.jpeg",
    features: [
      "Single-arc design",
      "Simple clamp installation",
      "Vibration isolation",
      "Cost-effective solution",
    ],
  },
  {
    slug: "bus-duct-rectangular-2-arcs",
    title: "Rectangular Bus Duct Bellow - 2 Arcs",
    description:
      "Custom rectangular profile bellows featuring dual arcs, designed explicitly to protect heavy-duty rectangular bus duct enclosures.",
    image: "/products/Rectangular-Bus-Duct-Bellow-2-Arcs.jpeg",
    detailImage:
      "/products/Rectangular-Bus-Duct-Bellow-2-Arcs-detail.jpeg",
    features: [
      "Custom rectangular profile",
      "Dual-arc flexibility",
      "Thermal expansion absorption",
      "Weather-tight sealing",
    ],
  },
  {
    slug: "diaphragms-weir-valves",
    title: "Rubber Diaphragms for Weir Type Valves",
    description:
      "Precision-molded rubber diaphragms engineered specifically for weir type valves, offering superior chemical resistance and flow control.",
    image: "/products/Rubber-Diaphragms-for-Weir-Type-Valves.jpeg",
    detailImage:
      "/products/Rubber-Diaphragms-for-Weir-Type-Valves-detail.jpeg",
    features: [
      "Weir valve compatibility",
      "Chemical resistant",
      "Precise flow control",
      "Long flex life",
    ],
  },
];

export const APPLICATIONS = [
  {
    title: "Power Plants",
    description:
      "Critical expansion joints for high-temperature and high-pressure steam lines.",
    icon: "power",
  },
  {
    title: "Chemical Industries",
    description:
      "Corrosion-resistant PTFE-lined bellows for harsh chemical processing.",
    icon: "chem",
  },
  {
    title: "Water Treatment",
    description:
      "Large diameter joints for municipal pipelines and desalination plants.",
    icon: "water",
  },
  {
    title: "HVAC Systems",
    description:
      "Vibration isolation for commercial chillers, pumps, and cooling towers.",
    icon: "hvac",
  },
  {
    title: "Steel Plants",
    description:
      "Heavy-duty bellows capable of withstanding extreme industrial environments.",
    icon: "factory",
  },
  {
    title: "Heavy Engineering",
    description:
      "Custom engineered solutions for complex mechanical implementations.",
    icon: "cog",
  },
];

export const USPS = [
  {
    title: "Hand Built Precision",
    description:
      "Every bellows is handcrafted layer by layer using rubber, fabric, and steel reinforcements. This meticulous process ensures superior quality, reliability, and long-term performance.",
    icon: "wrench",
  },
  {
    title: "Extra Large Custom Sizes",
    description:
      "We manufacture custom bellows for large pipelines, ducts, and industrial systems of any size. Built to your exact specifications, every unit is delivered to match your project requirements.",
    icon: "ruler",
  },
  {
    title: "50 Years of Technical Expertise",
    description:
      "With over 50 years of experience, we help clients choose the right bellows for every application. From design guidance to after-sales support, our expertise stays with you at every step.",
    icon: "tool",
  },
];

export const CHECKLIST_ITEMS = [
  "On-time deliveries guaranteed",
  "Prompt after-sales support",
  "Technical consultation included",
  "Export-ready packaging for global shipments",
];

export const MANUFACTURING_PROCESS = [
  {
    step: 1,
    title: "Engineering & Design",
    description:
      "Every build starts on paper, not on the shop floor. We study your application — pressure class, movement range, media, and installation constraints — before a single material is touched.",
    details: [
      "Type approval with dimensional accuracy",
      "Finite Element Analysis for critical applications",
      "Full alignment with client specs and drawings",
    ],
  },
  {
    step: 2,
    title: "Material Selection",
    description:
      "The compound is chosen for what the bellows will actually face, not for what is convenient. Wrong material at this stage means failure in the field.",
    details: [
      "EPDM, Neoprene, or Nitrile based on service condition",
      "High tensile steel wire / Rods reinforcements",
      "Incoming batch testing before production release",
    ],
  },
  {
    step: 3,
    title: "Hand-Building Process",
    description:
      "No molds. No machines forming the shape. Our craftsmen build each bellows by hand, layer by layer. This is where the reliability is actually made.",
    details: [
      "Ply by ply fabric wrapping under controlled tension",
      "Rubber compound applied at precise thickness between layers",
      "Steel wire / rods wound at exact pitch for rated pressure",
    ],
  },
  {
    step: 4,
    title: "Vulcanization",
    description:
      "Heat and pressure bond every layer into one unified structure. The curing cycle is set specifically for each compound and wall thickness — not a general setting applied to everything.",
    details: [
      "Controlled temperature and pressure cycles",
      "Full-body uniform heat distribution",
      "Each run monitored and logged",
    ],
  },
  {
    step: 5,
    title: "Quality Assurance",
    description:
      "Testing is not a formality here. Every bellows is tested, dimensionally verified, and documented before it moves toward dispatch.",
    details: [
      "Hydrostatic and Vacuum testing at multiples of working pressure",
      "Dimensional checks against original drawing",
      "Test certificates and documentation for every order",
    ],
  },
];

export const TESTIMONIALS = [
  {
    feedback:
      "Bhartiflex bellows have significantly reduced our pipeline vibrations. Excellent durability.",
    name: "Rajiv Sharma",
    role: "Chief Engineer",
    company: "Tata Steel",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    feedback:
      "We depend on Bhartiflex for all our high-pressure custom joints. Hand-built quality is unmatched.",
    name: "Sarah Jenkins",
    role: "Procurement Head",
    company: "Global Heavy Industries",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    feedback:
      "Outstanding service and rapid delivery. The custom 3-meter bellows fit perfectly.",
    name: "Ahmed Al-Fayed",
    role: "Project Manager",
    company: "Gulf Petroleum",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    feedback:
      "A trusted partner for over 15 years. They understand critical tolerances perfectly.",
    name: "Vikram Desai",
    role: "Plant Operations",
    company: "National Power Grid",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
];
