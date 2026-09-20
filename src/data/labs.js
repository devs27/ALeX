/**
 * ALeX — Amrita Lab Explorer
 * Centralized laboratory dataset for Amrita Vishwa Vidyapeetham, Chennai Campus.
 * 
 * Strict URL rule:
 * - Only verified URLs are populated (NEGCES).
 * - All other laboratories must use `url: null` until officially verified.
 * - Never guess or assume intranet/external endpoints.
 */

export const LABS_DATA = [
  {
    id: "trisul",
    shortName: "TRISUL",
    name: "Tribology and Interactive Surface Research Laboratory",
    category: "Materials",
    description: "Investigating friction, lubrication, surface wear, and innovative coating interfaces for high-durability mechanical and biomechanical systems.",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
    url: null
  },
  {
    id: "race",
    shortName: "RACE",
    name: "Robotics and Automation Centre of Excellence",
    category: "Robotics & Automation",
    description: "Advancing autonomous robotic manipulators, industrial cyber-physical automation, intelligent control theory, and mobile robotics.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80",
    url: null
  },
  {
    id: "aidisc",
    shortName: "AIDISC",
    name: "Artificial Intelligence and Data Science Innovation Center",
    category: "AI & Data Science",
    description: "Pioneering deep learning architectures, generative intelligence models, computer vision systems, and high-throughput data analytics.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
    url: null
  },
  {
    id: "rhisc",
    shortName: "RHISC",
    name: "Research Hub for Intelligent Systems and Embedded Computing",
    category: "Embedded Systems",
    description: "Researching edge computing architectures, real-time operating systems, low-power microcontrollers, and intelligent IoT telemetry.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    url: null
  },
  {
    id: "astra",
    shortName: "ASTRA",
    name: "Advanced Security & Testing Research Arena",
    category: "Cybersecurity",
    description: "Dedicated to vulnerability assessment, penetration testing, software security audits, binary analysis, and system resilience benchmarks.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80",
    url: null
  },
  {
    id: "shield",
    shortName: "SHIELD",
    name: "Strategic Hub for Intelligent Cyber Defence",
    category: "Cybersecurity",
    description: "Fostering AI-driven automated threat defense, security orchestration, network forensics, and critical infrastructure safeguarding.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80",
    url: null
  },
  {
    id: "ai-lab",
    shortName: "Ai Lab",
    name: "Amrita Innovation Lab",
    category: "AI & Data Science",
    description: "An innovation and prototyping space catalyzing applied artificial intelligence, human-centered computing, and multidisciplinary solutions.",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80",
    url: null
  },
  {
    id: "negces",
    shortName: "NEGCES",
    name: "Next Generation Computing and Experimental Systems",
    category: "Computing",
    description: "Focusing on distributed cluster computing, parallel processing frameworks, high-performance computing, and experimental system architectures.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
    url: "https://intranet.ch.amrita.edu/negces/"
  },
  {
    id: "mcrl",
    shortName: "MCRL",
    name: "Materials Chemistry Research Lab",
    category: "Materials",
    description: "Synthesizing novel inorganic and polymer materials, electrocatalysts, electrochemical energy storage, and smart molecular coatings.",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80",
    url: null
  },
  {
    id: "centam",
    shortName: "CENTAM",
    name: "Centre of Excellence in Nano-Technology & Advanced Materials",
    category: "Nanotechnology",
    description: "Pioneering nanoscale fabrication, carbon allotropes, functional 2D nanomaterials, and microscopic structural characterization.",
    image: "https://images.unsplash.com/photo-1507668077129-56e32842fceb?auto=format&fit=crop&w=800&q=80",
    url: null
  },
  {
    id: "additive-mfg",
    shortName: "Additive Mfg Lab",
    name: "Additive Manufacturing Lab",
    category: "Manufacturing",
    description: "Equipped with advanced industrial 3D printing technologies, rapid generative design fabrication, and layer-by-layer material deposition.",
    image: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80",
    url: null
  },
  {
    id: "ampl",
    shortName: "AMPL",
    name: "Advanced Manufacturing and Processing Lab",
    category: "Manufacturing",
    description: "Investigating precision micro-machining, non-conventional metal forming, advanced material processing, and quality metrology.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
    url: null
  },
  {
    id: "vibes",
    shortName: "VIBES",
    name: "VLSI and Integrated emBedded Systems Laboratory",
    category: "VLSI",
    description: "Specializing in microelectronic circuit design, CMOS physical synthesis, System-on-Chip (SoC) verification, and FPGA emulation.",
    image: "https://images.unsplash.com/photo-1555680202-c86f0e12f086?auto=format&fit=crop&w=800&q=80",
    url: null
  },
  {
    id: "ars-lab",
    shortName: "ARS Lab",
    name: "Antennas and Radio Systems Laboratory",
    category: "Electronics & Communication",
    description: "Researching microstrip planar antennas, phased-array beam steering, RF/microwave passive components, and high-frequency propagation.",
    image: "https://images.unsplash.com/photo-1516192518150-0d8fee5425e3?auto=format&fit=crop&w=800&q=80",
    url: null
  },
  {
    id: "sine-lab",
    shortName: "SINE Lab",
    name: "Signal, Image, and Network Engineering Laboratory",
    category: "Signal & Image Processing",
    description: "Developing multidimensional digital signal processing, biomedical imaging analytics, computer vision, and cognitive network protocols.",
    image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=800&q=80",
    url: null
  },
  {
    id: "cae-studio",
    shortName: "CAE Studio",
    name: "CAE Studio",
    category: "Computing",
    description: "Harnessing high-fidelity computational structural analysis, finite element modeling (FEA), fluid dynamics simulation, and engineering optimization.",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80",
    url: null
  }
];

export const CATEGORIES = [
  "All",
  "AI & Data Science",
  "Computing",
  "Cybersecurity",
  "Robotics & Automation",
  "Embedded Systems",
  "VLSI",
  "Electronics & Communication",
  "Signal & Image Processing",
  "Materials",
  "Nanotechnology",
  "Manufacturing"
];
