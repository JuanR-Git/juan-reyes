export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  type: 'full-time' | 'part-time' | 'internship' | 'co-op' | 'volunteer' | 'leadership';
  summary: string;
  achievements: string[];
  technologies: string[];
  image: string;
  link?: string;
}

