export enum Theme {
  DARK = 'dark',
  LIGHT = 'light'
}

export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  link?: string;
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface Skill {
  name: string;
  level: number; // 0-100
  category: 'Frontend' | 'Backend' | 'DevOps' | 'Tools';
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
  isError?: boolean;
}

export interface Workshop {
  id: number;
  name: string;
  organizer: string;
  year?: string;
  description?: string;
}