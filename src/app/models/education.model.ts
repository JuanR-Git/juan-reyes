export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string;
  gpa?: string;
  relevantCoursework?: string[];
  achievements?: string[];
  activities?: string[];
}

