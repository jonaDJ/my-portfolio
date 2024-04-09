export interface exAndEdProps {
  _id: string;
  type: string;
  title?: string; // Fields for experience
  company?: string; // Fields for experience
  location: string;
  dates: string;
  description: string;
  // Additional fields specific to education
  degree?: string; // Education-specific field
  institution?: string; // Education-specific field
}

export interface CertificateProps {
  _id: number | string;
  title: string;
  url: string;
}

export interface SkillsDataProps {
  _id: number | string;
  name: string;
  logo: string;
}

export interface LandingPageProps {
  exAndEd: exAndEdProps[];
  skills: SkillsDataProps[];
  certificates: CertificateProps[];
}
