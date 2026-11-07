export interface NavSection {
  id: string;
  label: string;
  index: string;
}

export const sections: NavSection[] = [
  { id: 'home', label: 'Home', index: '00' },
  { id: 'about', label: 'About', index: '01' },
  { id: 'why-me', label: 'Why Me', index: '02' },
  { id: 'projects', label: 'Projects', index: '03' },
  { id: 'experience', label: 'Experience', index: '04' },
  { id: 'skills', label: 'Skills', index: '05' },
  { id: 'achievements', label: 'Achievements', index: '06' },
  { id: 'communities', label: 'Communities', index: '07' },
  { id: 'contact', label: 'Contact', index: '08' },
];

const desktopNavIds = ['about', 'projects', 'experience', 'communities', 'contact'];

export const desktopNav = sections.filter((section) => desktopNavIds.includes(section.id));
