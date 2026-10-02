export interface Profile {
  name: string;
  pronouns?: string;
  title: string;
  role: string;
  location: string;
  timezone: string;
  email: string;
  phone: string;
  secondaryPhone?: string;
  github: string;
  linkedin: string;
  telegram?: string;
  status: string;
  bio: string;
  shortBio: string;
  image: string;
  silverImage?: string;
  colorImage?: string;
  collageImage?: string;
  emeraldCollageImage?: string;
  education: {
    university: string;
    degree: string;
    institute: string;
    diploma: string;
  };
  metrics: {
    projectsCount: number;
    experienceCount: number;
    technologiesCount: number;
  };
}