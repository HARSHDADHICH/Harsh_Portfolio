import { 
  Code2, 
  Server, 
  Layout, 
  Database, 
  Layers, 
  Bug, 
  Zap, 
  Rocket 
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const servicesData: Service[] = [
  {
    title: 'Full-Stack Web Development',
    description: 'End-to-end web application development from concept to deployment. I build scalable, responsive apps using modern technologies.',
    icon: Layers
  },
  {
    title: 'Backend API Development',
    description: 'RESTful API design, development, and documentation. I create secure, efficient, and well-structured backend systems.',
    icon: Server
  },
  {
    title: 'Frontend UI Development',
    description: 'Creating beautiful, responsive, and accessible user interfaces with React and Next.js paired with modern CSS frameworks.',
    icon: Layout
  },
  {
    title: 'Database Design',
    description: 'Planning, designing, and implementing efficient database schemas optimized for your specific application needs.',
    icon: Database
  },
  {
    title: 'Custom Development',
    description: 'Bespoke software solutions crafted to meet your unique business requirements and solve specific problems.',
    icon: Code2
  },
  {
    title: 'Bug Fixing & Refactoring',
    description: 'Identifying and resolving issues in existing codebases. Improving code quality, readability, and performance.',
    icon: Bug
  },
  {
    title: 'Performance Optimization',
    description: 'Analyzing and improving application speed, responsiveness, and resource utilization for a better user experience.',
    icon: Zap
  },
  {
    title: 'Deployment & CI/CD',
    description: 'Setting up automated deployment pipelines, configuring servers, and ensuring your application runs smoothly in production.',
    icon: Rocket
  }
];