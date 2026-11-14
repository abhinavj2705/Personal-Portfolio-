export interface ExperienceItem {
  role: string;
  organization: string;
  period: string;
  description: string;
  tag: string;
  active?: boolean;
}

export const experienceData: ExperienceItem[] = [
  {
    role: 'Lead Software Developer',
    organization: 'Developer Society, CHRIST University',
    period: 'Active',
    active: true,
    description:
      'Leading software development initiatives, mentoring junior engineers, and driving technical architecture for campus-wide community applications.',
    tag: 'Leadership & Development',
  },
  {
    role: 'Business Development Lead',
    organization: 'Christ Incubation, Consultancy and Foundation',
    period: 'Active',
    active: true,
    description:
      'Driving partnerships, outreach, and growth initiatives — connecting student ventures with mentors, industry, and funding opportunities.',
    tag: 'Business & Product',
  },
  {
    role: 'Developer Intern',
    organization: 'Center of Excellence, CHRIST University',
    period: 'Completed',
    description:
      'Building and maintaining software solutions within the Center of Excellence, contributing to research-driven and applied engineering projects.',
    tag: 'Engineering',
  },
];

export const leadershipData: ExperienceItem[] = [
  {
    role: 'Sports Coordinator',
    organization: 'Sports Council of CHRIST University',
    period: 'Ongoing',
    description: 'Coordinating inter-department tournaments and sporting events across campus.',
    tag: 'Sports & Teamwork',
  },
  {
    role: 'Student Representative',
    organization: 'University Culture Team',
    period: 'Ongoing',
    description: 'Organizing cultural events and managing logistics for an inclusive campus community.',
    tag: 'Community',
  },
  {
    role: 'Volunteer',
    organization: 'IEEE Computer Society',
    period: 'Ongoing',
    description: 'Supporting technical symposiums, workshops, and community events.',
    tag: 'Technical Society',
  },
];
