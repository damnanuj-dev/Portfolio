export interface Project {
  id: string;
  slug: string;
  title: string;
  year: string;
  category: string;
  role: string;
  stack: string[];
  description: string;
  longDescription: string;
  image: string;
  aspectRatio?: string;
  github?: string;
  live?: string;
  featured: boolean;
  accentColor: string;
}

export interface SkillCategory {
  title: string;
  category: "development" | "mobile" | "backend" | "tools" | "learning";
  skills: {
    name: string;
    level: string;
    description: string;
    tag: string;
  }[];
}

export const profile = {
  name: "Anuj",
  mark: "ANUJ®",
  tagline: "Creative Developer / Web & App Developer",
  status: "Available for interesting projects & collaborations",
  role: "Creative Developer",
  subRole: "Web & App Development",
  education: "CS student • India",
  location: "India",
  timezone: "IND / GMT+5:30",
  year: "2026",
  email: "anuj.dev.portfolio@gmail.com",
  secondaryEmail: "anuj@example.com",
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://x.com",
    instagram: "https://instagram.com",
  },
  bio: "I'm a Computer Science student from India interested in web development, application development and creative technology. I enjoy creating interfaces, experimenting with motion and turning ideas into working products.",
  secondaryBio: "Currently learning more about AI/ML while continuing to improve my frontend and mobile development skills.",
  coreStatement: "I like turning ideas into digital products people actually enjoy using.",
  heroHeadline: {
    line1: "CREATIVE",
    line2: "DEVELOPER",
  },
  heroSubstatement: "I build interfaces that feel alive and applications designed to be useful.",
};

export const stats = [
  {
    value: 12,
    suffix: "+",
    label: "PROJECTS BUILT",
    subtext: "Web apps, mobile utilities & creative experiments",
  },
  {
    value: 15,
    suffix: "+",
    label: "TOOLS & LIBS",
    subtext: "React, Next.js, Flutter, Three.js, GSAP & more",
  },
  {
    value: 100,
    suffix: "%",
    label: "CRAFT & PASSION",
    subtext: "Focused on speed, fluidity and editorial detail",
  },
  {
    value: 2026,
    suffix: "",
    label: "CURRENT EDITION",
    subtext: "New architecture, custom canvas & motion systems",
  },
];

export const projects: Project[] = [
  {
    id: "01",
    slug: "focusloop",
    title: "FocusLoop",
    year: "2026",
    category: "Mobile Utility",
    role: "Lead Developer & Designer",
    stack: ["Flutter", "Dart", "SQLite", "Riverpod"],
    description: "A distraction-free focus timer and habit tracker engineered with tactile micro-interactions and strictly on-device local storage.",
    longDescription: "FocusLoop was built to solve the frustration of bloated productivity apps. It features gesture-based timing sessions, haptic feedback loops, and an offline-first SQLite database that never transmits user habits to external servers.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",
    github: "https://github.com",
    live: "https://example.com/focusloop",
    featured: true,
    accentColor: "#315CFF", // Electric Blue
  },
  {
    id: "02",
    slug: "linkloom",
    title: "LinkLoom",
    year: "2026",
    category: "Web Application",
    role: "Full Stack Engineer",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "IndexedDB"],
    description: "A lightning-fast, keyboard-driven link curation suite designed to organize research, digital assets, and dev tools without friction.",
    longDescription: "A private bookmarks workspace featuring instant fuzzy search, nested collections, tag hierarchies, and automated OpenGraph metadata caching for swift visual previews.",
    image: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=1200&auto=format&fit=crop",
    github: "https://github.com",
    live: "https://example.com/linkloom",
    featured: true,
    accentColor: "#FF642E", // Burnt Orange
  },
  {
    id: "03",
    slug: "veryo",
    title: "Veryo",
    year: "2025",
    category: "Interactive Experiment",
    role: "Creative Coder",
    stack: ["Three.js", "Web Audio API", "GSAP", "React"],
    description: "An interactive spatial soundscape visualizer exploring kinetic typography, real-time frequency analysis, and WebGL particle physics.",
    longDescription: "Combining low-latency Web Audio API frequency analysis with dynamic GLSL noise shaders. The visualizer sculpts organic 3D waveforms that react to ambient microphone input or uploaded audio tracks.",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop",
    github: "https://github.com",
    live: "https://example.com/veryo",
    featured: false,
    accentColor: "#9C8CFF", // Lavender
  },
  {
    id: "04",
    slug: "snapling",
    title: "Snapling",
    year: "2025",
    category: "Mobile App",
    role: "App Developer",
    stack: ["Flutter", "Dart", "Markdown Engine"],
    description: "A minimal note-taking and rapid thought capture system with fluid gesture interactions and instant markdown formatting.",
    longDescription: "Designed for high-speed capture of ideas before they vanish. Features zero startup latency, swipe-to-archive workflows, and markdown-compatible typography designed for mobile readability.",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1200&auto=format&fit=crop",
    github: "https://github.com",
    featured: false,
    accentColor: "#C7FF41", // Acid Lime
  },
  {
    id: "05",
    slug: "voidlab",
    title: "VoidLab",
    year: "2025",
    category: "Creative Tech Lab",
    role: "Motion & UI Engineer",
    stack: ["Anime.js", "Canvas 2D", "CSS Houdini", "TypeScript"],
    description: "A public sandbox of interactive UI patterns, procedural animation experiments, and unconventional micro-interactions.",
    longDescription: "An ongoing repository of creative frontend components, procedural particle canvas experiments, and custom cursor physics built for next-generation digital experiences.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1200&auto=format&fit=crop",
    github: "https://github.com",
    live: "https://example.com/voidlab",
    featured: false,
    accentColor: "#F04444", // Warm Red
  },
];

export const skillsData: SkillCategory[] = [
  {
    title: "DEVELOPMENT",
    category: "development",
    skills: [
      { name: "React", level: "Advanced", description: "Hooks, Server Components, Concurrent Features", tag: "UI" },
      { name: "Next.js", level: "Advanced", description: "App Router, Server Actions, Static Optimization", tag: "FRAMEWORK" },
      { name: "TypeScript", level: "Proficient", description: "Strict typing, Generics, Component contracts", tag: "LANGUAGE" },
      { name: "JavaScript", level: "Advanced", description: "ESNext, DOM APIs, Asynchronous architecture", tag: "CORE" },
      { name: "HTML / CSS", level: "Expert", description: "Modern semantics, Custom properties, CSS Grid", tag: "FOUNDATION" },
      { name: "Tailwind CSS", level: "Expert", description: "Design systems, Custom plugins, Responsive UI", tag: "STYLING" },
    ],
  },
  {
    title: "MOBILE",
    category: "mobile",
    skills: [
      { name: "Flutter", level: "Proficient", description: "Cross-platform mobile applications, Custom Painters", tag: "MOBILE" },
      { name: "Dart", level: "Proficient", description: "Object-oriented architecture, Async streams", tag: "LANGUAGE" },
    ],
  },
  {
    title: "BACKEND & DATA",
    category: "backend",
    skills: [
      { name: "Python", level: "Intermediate", description: "Scripting, Automation, Data pipelines", tag: "DATA" },
      { name: "SQL", level: "Intermediate", description: "Relational database modeling, Query optimization", tag: "DATABASE" },
    ],
  },
  {
    title: "TOOLS & WORKFLOW",
    category: "tools",
    skills: [
      { name: "Git & GitHub", level: "Advanced", description: "Version control, Branching, Open Source", tag: "VCS" },
      { name: "VS Code", level: "Advanced", description: "Custom workflow, Debugging, Extensions", tag: "ENVIRONMENT" },
      { name: "Figma", level: "Proficient", description: "Wireframing, UI prototyping, Design handoff", tag: "DESIGN" },
      { name: "Stitch", level: "Proficient", description: "Creative developer workflow tool", tag: "TOOL" },
      { name: "Claude Code", level: "Proficient", description: "AI-assisted development & architecture", tag: "AI TOOL" },
    ],
  },
  {
    title: "CURRENTLY EXPLORING",
    category: "learning",
    skills: [
      { name: "AI / ML", level: "Active Learning", description: "Machine learning fundamentals, Neural networks, LLM integrations", tag: "FUTURE" },
      { name: "WebGL / Three.js", level: "Active Learning", description: "Custom shaders, 3D math, Particle systems", tag: "GRAPHICS" },
    ],
  },
];

export const processStages = [
  {
    step: "01",
    phase: "THINK",
    title: "Understand the Problem",
    description: "Deconstruct requirements, map user flows, and identify the single most valuable outcome.",
    accent: "#315CFF",
  },
  {
    step: "02",
    phase: "DESIGN",
    title: "Shape the Interface",
    description: "Establish editorial typographic rhythm, hierarchy, whitespace, and tactile interaction models.",
    accent: "#FF642E",
  },
  {
    step: "03",
    phase: "BUILD",
    title: "Create the Product",
    description: "Write clean, strongly-typed code using modern frameworks and intentional animation libraries.",
    accent: "#9C8CFF",
  },
  {
    step: "04",
    phase: "REFINE",
    title: "Tune Interaction & Speed",
    description: "Polish physics-based motion, optimize bundle footprint, and guarantee accessibility standards.",
    accent: "#C7FF41",
  },
];

export const marqueeItems = [
  { title: "EXPERIMENT", subtitle: "DESIGN / BUILD / ITERATE", tag: "CREATIVE" },
  { title: "FOCUSLOOP", subtitle: "FLUTTER & DART APP", tag: "MOBILE" },
  { title: "LINKLOOM", subtitle: "NEXT.JS RESOURCE SUITE", tag: "WEB APP" },
  { title: "VERYO", subtitle: "SPATIAL AUDIO & THREE.JS", tag: "WEBGL" },
  { title: "VOIDLAB", subtitle: "ALGORITHMIC CANVAS LAB", tag: "MOTION" },
];
