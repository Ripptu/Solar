export interface Project {
  id: number;
  title: string;
  description: string;
  badge: string;
  image: string;
  specs: string[];
}

export interface Service {
  id: number;
  title: string;
  description?: string;
}