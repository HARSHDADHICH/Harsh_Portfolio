import { 
  Search, 
  FileSpreadsheet, 
  Code2, 
  ScanSearch,
  Rocket,
  LifeBuoy
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface ProcessStep {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const processData: ProcessStep[] = [
  {
    title: 'Discovery Call',
    description: 'We start with a thorough consultation to understand your goals, challenges, requirements, and timeline. This helps me get a clear picture of your vision.',
    icon: Search
  },
  {
    title: 'Proposal & Estimate',
    description: 'I\'ll provide a detailed proposal outlining project scope, timeline, and cost estimates. This serves as our roadmap throughout the project.',
    icon: FileSpreadsheet
  },
  {
    title: 'Development',
    description: 'I follow an agile approach with regular updates and milestone demos. You\'ll always be informed about progress and have opportunities for feedback.',
    icon: Code2
  },
  {
    title: 'Testing & Feedback',
    description: 'Thorough testing ensures everything works perfectly. Multiple review cycles ensure the product meets all requirements and your expectations.',
    icon: ScanSearch
  },
  {
    title: 'Deployment',
    description: 'Once approved, I\'ll handle the deployment process, ensuring a smooth transition to production with minimal disruption.',
    icon: Rocket
  },
  {
    title: 'Support',
    description: 'I provide 2-4 weeks of post-launch support to address any issues and ensure everything runs smoothly in production.',
    icon: LifeBuoy
  }
];