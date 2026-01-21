export interface Skill {
  name: string;
  category: 'languages' | 'frameworks' | 'tools' | 'technologies' | 'software';
  proficiency: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  icon?: string;
  image?: string;
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
}

