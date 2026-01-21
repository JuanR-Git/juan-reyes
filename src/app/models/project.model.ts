export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  tags: Array<{ name: string; color: string; textColor: string }>;
  github?: string;
  live?: string;
  docs?: string;
  featured?: boolean;
  category: 'web' | 'embedded' | 'robotics' | 'software' | 'other';
}

