export interface AchievementItem {
  metric?: string;
  title: string;
  subtitle: string;
  description: string;
  note?: string;
}

export const achievementsData: AchievementItem[] = [
  {
    metric: '3,000+',
    title: 'Active students on CU Now',
    subtitle: 'Verified reach',
    description:
      'Empowering first-year students at CHRIST University (Kengeri campus) with seamless orientation and daily campus guidance.',
    note: 'Product in active use',
  },
  {
    title: 'Microsoft Certified',
    subtitle: 'Azure AI Fundamentals',
    description:
      'Demonstrated core knowledge of machine learning concepts, computer vision, natural language processing, and Azure cloud AI workloads.',
    note: 'Microsoft verified credential',
  },
  {
    title: 'B.Tech in CSE (IoT)',
    subtitle: 'CHRIST University, Bengaluru',
    description:
      'Specialized coursework in microcontrollers, cloud computing, edge intelligence, embedded systems, and software engineering.',
    note: 'Expected graduation 2027',
  },
];
