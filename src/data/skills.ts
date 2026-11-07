export interface SkillGroup {
  title: string;
  items: string[];
}

export const skillsData: SkillGroup[] = [
  {
    title: 'Languages',
    items: ['JavaScript (ES6+)', 'TypeScript', 'Python', 'C / C++', 'SQL', 'HTML5 / CSS3'],
  },
  {
    title: 'Frontend',
    items: ['React', 'Next.js', 'Vite', 'Tailwind CSS', 'Framer Motion', 'Responsive UI/UX'],
  },
  {
    title: 'Backend & APIs',
    items: ['Node.js', 'Express.js', 'RESTful APIs', 'Authentication (JWT)', 'Microservices'],
  },
  {
    title: 'Databases & Cloud',
    items: ['MongoDB', 'PostgreSQL', 'Firebase', 'Azure AI Fundamentals', 'Git / GitHub'],
  },
  {
    title: 'IoT & Embedded',
    items: ['Arduino / ESP32', 'MQTT Protocol', 'Sensor Integration', 'Hardware Telemetry', 'Node-RED'],
  },
];
