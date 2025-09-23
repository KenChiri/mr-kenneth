export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  bookmarked?: boolean;
  githubUrl?: string;
  liveUrl?: string;
  author: {
    name: string;
    avatar: string;
    username: string;
  };
}


export interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  description: string;
  site_url: string;
  logo?: string;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  duration: string;
  grade?: string;
  description?: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  issueDate: string;
  credentialId?: string;
  verificationUrl?: string;
  imageUrl?: string;
}


