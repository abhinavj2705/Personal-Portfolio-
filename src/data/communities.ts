export interface CommunityItem {
  organization: string;
  role: string;
  period: string;
  description: string;
  tag: string;
}

export const communitiesData: CommunityItem[] = [
  {
    organization: 'IEEE Computer Society',
    role: 'Active Member',
    period: 'Active',
    description:
      'Participating in technical symposiums, research discussions, and workshops on computing advancements and IoT standards.',
    tag: 'Technical Society',
  },
  {
    organization: 'Google Student Community',
    role: 'Community Member',
    period: 'Active',
    description:
      'Collaborating on open-source workshops, developer days, and cloud technology talks.',
    tag: 'Developer Community',
  },
  {
    organization: 'Campus Sports Council',
    role: 'Sports Representative',
    period: 'Active',
    description:
      'Organizing inter-department tournaments, fostering sportsmanship and teamwork across campus disciplines.',
    tag: 'Sports & Teamwork',
  },
];
