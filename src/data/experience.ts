export interface ExperienceItem {
  role: string;
  organization: string;
  period: string;
  description: string;
  tag: string;
}

export const experienceData: ExperienceItem[] = [
  {
    role: 'Lead Software Developer',
    organization: 'DevSoc (Development Society)',
    period: 'Active',
    description:
      'Leading software development initiatives, mentoring junior engineers, and driving technical architecture for campus-wide community applications.',
    tag: 'Leadership & Development',
  },
  {
    role: 'Student Representative',
    organization: 'University Culture Team',
    period: 'Ongoing',
    description:
      'Coordinating university cultural events, managing technical logistics, and fostering an inclusive campus community.',
    tag: 'Community',
  },
  {
    role: 'Student Coordinator',
    organization: 'Student Welfare Office (SWO)',
    period: 'Ongoing',
    description:
      'Liaising between the student body and university administration, organizing student support programs and orientation sessions.',
    tag: 'Welfare & Operations',
  },
];
