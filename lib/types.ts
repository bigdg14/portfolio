export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  techStack: string[];
  features: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  category: 'web' | 'ai' | 'game' | 'social' | 'data';
}

export interface TechStack {
  name: string;
  icon: string;
  category: 'frontend' | 'backend' | 'database' | 'tools' | 'languages';
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
