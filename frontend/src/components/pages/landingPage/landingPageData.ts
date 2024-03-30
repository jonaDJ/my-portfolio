export interface AboutSectionProps {
  role: string;
  description: string[];
}

export interface ExperienceAndEducationProps {
  items: ExperienceAndEducationItemProps[];
}

export interface ExperienceAndEducationItemProps {
  id: string;
  type: string;
  title?: string;
  dates: string;
  location: string;
  description: string;
  degree?: string;
}

export interface CertificateProps {
  id: number;
  title: string;
  url: string;
}

export interface SkillsDataProps {
  name: string;
  logo: string;
}

export interface LandingPageProps {
  aboutSectionData: AboutSectionProps;
  experienceAndEducationData: ExperienceAndEducationProps;
  skillsData: SkillsDataProps[];
  certificatesData: CertificateProps[];
}
