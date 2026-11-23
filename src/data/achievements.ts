export interface AchievementItem {
  metric?: string;
  title: string;
  subtitle: string;
  description: string;
  note?: string;
  credentialUrl?: string;
  opensCertifications?: boolean;
}

export const achievementsData: AchievementItem[] = [
  {
    metric: '3,000+',
    title: 'Students using CU Now',
    subtitle: 'Campus adoption',
    description:
      'Supports first-year students at CHRIST University (Kengeri Campus) with orientation, schedules, facility locations, and mentor access.',
    note: 'Product in active use',
  },
  {
    title: 'Microsoft Certified: Azure AI Fundamentals',
    subtitle: 'Microsoft credential',
    description:
      'Demonstrated core knowledge of machine learning concepts, computer vision, natural language processing, and Azure cloud AI workloads.',
    note: 'Verify credential',
    credentialUrl:
      'https://www.credly.com/badges/0bf9079b-8947-4c40-b9ef-f5a7b17cb9ca/public_url',
  },
  {
    title: 'McKinsey.org Forward Program',
    subtitle: 'Professional development',
    description:
      'Completed the McKinsey Forward Program, building structured problem-solving, communication, and collaboration skills for real-world team environments.',
    note: 'Verify credential',
    credentialUrl:
      'https://www.credly.com/badges/64e81cbd-4139-44ea-978b-a297e2190182/public_url',
  },
  {
    metric: '10+',
    title: 'Certifications completed',
    subtitle: 'Continuous learning',
    description:
      'Additional credentials across cloud, data, AI, business intelligence, spreadsheets, and product skills.',
    note: 'View all certificates',
    opensCertifications: true,
  },
];
