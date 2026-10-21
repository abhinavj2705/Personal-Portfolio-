export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  category: 'Full-Stack' | 'Navigation & Maps' | 'Mobile & Operations' | 'Web Platform' | 'IoT & Hardware';
  highlightMetric?: string;
  purpose: string;
  problemSolved: string;
  contribution: string;
  technologies: string[];
  featured?: boolean;
  githubUrl?: string;
  demoUrl?: string;
}

export const linkedInUrl = 'https://www.linkedin.com/in/abhinav-jadhav-';
export const githubUrl = 'https://github.com/abhinavj2705';
export const contactEmail = 'abhinav.jadhav@example.com'; // User can update
export const resumeUrl = 'https://drive.google.com/file/d/1n2zPv1b2KiaOmeOGHIJ-bH1BX1fDPRg8/view?usp=sharing';

export const projectsData: ProjectItem[] = [
  {
    id: 'cu-now',
    title: 'CU Now',
    tagline: 'Campus orientation and student guidance application',
    category: 'Full-Stack',
    featured: true,
    highlightMetric: '3,000+ Active Users',
    purpose: 'Serve first-year students at CHRIST University (Kengeri Campus) with a single hub for orientation, schedules, facility locations, and mentor access.',
    problemSolved: 'Eliminated campus onboarding confusion, fragmented WhatsApp announcements, and lost freshers during orientation weeks.',
    contribution: 'Architected the full-stack system, created responsive mobile-first UI with React & Tailwind, built REST APIs with Node/Express, and handled real-time updates.',
    technologies: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
    githubUrl: 'https://github.com/abhinavj2705',
  },
  {
    id: 'cu-nav',
    title: 'CU Nav',
    tagline: 'Live guided campus navigation experience',
    category: 'Navigation & Maps',
    featured: true,
    highlightMetric: 'Interactive Campus Map',
    purpose: 'Provide high-precision campus wayfinding with turn-by-turn guidance across university blocks, departments, labs, and amenities.',
    problemSolved: 'Visitors and freshmen frequently struggle to locate specific academic blocks, examination halls, and auditoriums across a sprawling campus.',
    contribution: 'Integrated custom tile layers, implemented Dijkstra/A* routing algorithms for campus pathways, and optimized mobile touch interactivity.',
    technologies: ['React', 'Leaflet', 'TypeScript', 'GeoJSON', 'Tailwind CSS'],
    githubUrl: 'https://github.com/abhinavj2705',
  },
  {
    id: 'restaurant-inventory',
    title: 'Restaurant Inventory Management',
    tagline: 'Mobile-first stock management, billing, and operational optimization',
    category: 'Mobile & Operations',
    purpose: 'Streamline raw ingredient stock levels, prevent expiry waste, and provide real-time cost-per-dish analytics.',
    problemSolved: 'Replaced error-prone paper logs and manual stock registers with instant barcode logging and automatic threshold warnings.',
    contribution: 'Engineered cross-platform mobile interface, implemented offline caching, and created automated re-order reporting.',
    technologies: ['React Native', 'TypeScript', 'Firebase', 'Tailwind CSS'],
    githubUrl: 'https://github.com/abhinavj2705',
  },
  {
    id: 'electives-selection',
    title: 'Electives Selection Website',
    tagline: 'Platform supporting elective-course selection',
    category: 'Web Platform',
    purpose: 'Enable university students to review course syllabi, verify prerequisites, and secure elective slots in real time.',
    problemSolved: 'Prevented seat allocation clashes and server timeouts during high-concurrency elective registration windows.',
    contribution: 'Developed seat-counter API with atomic transactions, designed intuitive student course selection UX, and built department admin dashboards.',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Express', 'Tailwind CSS'],
    githubUrl: 'https://github.com/abhinavj2705',
  },
  {
    id: 'devsoc-website',
    title: 'DevSoc Website',
    tagline: 'Official platform for the Development Society',
    category: 'Web Platform',
    purpose: 'Showcase developer community initiatives, hackathons, member project portfolios, and recruitment portals.',
    problemSolved: 'Consolidated developer events, workshops, and team showcases into a modern high-performance portal.',
    contribution: 'Led frontend architecture, built modular component design system, and implemented event registration workflows.',
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    githubUrl: 'https://github.com/abhinavj2705',
  },
  {
    id: 'water-level-sensor',
    title: 'Water Level Sensor',
    tagline: 'IoT automated monitoring and telemetry system',
    category: 'IoT & Hardware',
    purpose: 'Continuous ultrasonic liquid level measurement with automated pump safety cutoffs and cloud telemetry.',
    problemSolved: 'Avoided tank overflows and motor burnout from dry-run situations in campus facilities.',
    contribution: 'Programmed microcontroller firmware, designed low-latency MQTT telemetry stream, and configured live dashboard gauges.',
    technologies: ['ESP32/Arduino', 'C/C++', 'MQTT', 'Node-RED', 'React Dashboard'],
    githubUrl: 'https://github.com/abhinavj2705',
  },
];

export const leadershipExperiences = [
  {
    role: 'Lead Software Developer',
    organization: 'DevSoc (Development Society)',
    period: 'Active',
    description: 'Leading software development initiatives, mentoring junior engineers, and driving technical architecture for campus-wide community applications.',
    tag: 'Leadership & Dev'
  },
  {
    role: 'Student Representative',
    organization: 'University Culture Team',
    period: 'Ongoing',
    description: 'Coordinating university cultural events, managing tech logistics, and fostering an inclusive campus community.',
    tag: 'Community'
  },
  {
    role: 'Student Coordinator',
    organization: 'Student Welfare Office (SWO)',
    period: 'Ongoing',
    description: 'Liaising between the student body and university administration, organizing student support programs and orientation sessions.',
    tag: 'Welfare & Operations'
  },
  {
    role: 'Active Member',
    organization: 'IEEE Computer Society',
    period: 'Active',
    description: 'Participating in technical symposiums, research discussions, and workshops on computing advancements and IoT standards.',
    tag: 'Technical Society'
  },
  {
    role: 'Community Member',
    organization: 'Google Student Community',
    period: 'Active',
    description: 'Collaborating on open-source workshops, developer days, and cloud tech talks.',
    tag: 'Developer Community'
  },
  {
    role: 'Sports Representative',
    organization: 'Campus Sports Council',
    period: 'Active',
    description: 'Organizing inter-department tournaments, fostering sportsmanship and teamwork across campus disciplines.',
    tag: 'Sports & Teamwork'
  },
];

export const verifiedSkills = {
  'Languages': ['JavaScript (ES6+)', 'TypeScript', 'Python', 'C / C++', 'SQL', 'HTML5 / CSS3'],
  'Frontend': ['React', 'Next.js', 'Vite', 'Tailwind CSS', 'Framer Motion', 'Responsive UI/UX'],
  'Backend & APIs': ['Node.js', 'Express.js', 'RESTful APIs', 'Authentication (JWT)', 'Microservices'],
  'Databases & Cloud': ['MongoDB', 'PostgreSQL', 'Firebase', 'Azure AI Fundamentals', 'Git / GitHub'],
  'IoT & Embedded': ['Arduino / ESP32', 'MQTT Protocol', 'Sensor Integration', 'Hardware Telemetry', 'Node-RED'],
};
