export interface Skill {
  name: string;
  category: string;
}

export interface WorkExperience {
  companyName: string;
  jobTitle: string;
  startDate: Date;
  endDate: Date | null;
  skills: Skill[];
  responsibilities: string[];
}
