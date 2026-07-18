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

export interface PersonalInfo {
  name: string;
  email: string;
  phone: string;
  country: string;
  websites: string[];
}

export interface Education {
  degree: string;
  institution: string;
  fieldOfStudy: string;
  graduationYear: Date;
  gpa?: number;
}

export interface ProfileProject {
  name: string;
  about: string;
  skills: Skill[];
}

export interface Profile {
  personalInfo: PersonalInfo;
  workExperiences: WorkExperience[];
  educations: Education[];
  skills: Skill[];
  projects: ProfileProject[];
}
