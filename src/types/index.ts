export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  category: 'Web Development' | 'E-commerce' | 'Mobile Apps';
}

export interface Skill {
  name: string;
  proficiency: number;
  category: 'Web Development' | 'Programming Languages' | 'Databases' | 'Frameworks';
}