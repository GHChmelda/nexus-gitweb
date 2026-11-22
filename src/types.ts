export type Theme = 'dark' | 'light';
export type AnnouncementCategory = 'Announcement' | 'Release' | 'Update' | 'Event';
export type ProjectStatus = 'Live' | 'Beta' | 'Building' | 'Planned';

export interface Announcement {
  id: string;
  title: string;
  date: string;
  category: AnnouncementCategory;
  summary: string;
  link: string;
  pinned?: boolean;
}

export interface Project {
  name: string;
  status: ProjectStatus;
  tagline: string;
  description: string;
  tags: string[];
  links: { label: string; href: string }[];
}

export interface RoadmapItem {
  phase: 'now' | 'next' | 'later';
  title: string;
  description: string;
}
