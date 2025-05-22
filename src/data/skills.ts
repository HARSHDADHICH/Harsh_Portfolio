export interface Skill {
  name: string;
  level: number; // 0-100
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
}

export const skillsData: SkillCategory[] = [
  {
    name: 'Languages',
    skills: [
      { name: 'JavaScript', level: 95 },
      { name: 'TypeScript', level: 90 },
      { name: 'HTML', level: 98 },
      { name: 'CSS', level: 90 },
      { name: 'SQL', level: 85 },
    ],
  },
  {
    name: 'Frontend',
    skills: [
      { name: 'React', level: 92 },
      { name: 'Next.js', level: 88 },
      { name: 'Tailwind CSS', level: 95 },
      { name: 'Redux', level: 85 },
      { name: 'React Query', level: 80 },
    ],
  },
  {
    name: 'Backend',
    skills: [
      { name: 'Node.js', level: 90 },
      { name: 'Express.js', level: 88 },
      { name: 'REST APIs', level: 92 },
      { name: 'GraphQL', level: 75 },
    ],
  },
  {
    name: 'Databases',
    skills: [
      { name: 'PostgreSQL', level: 85 },
      { name: 'MongoDB', level: 80 },
      { name: 'Supabase', level: 85 },
      { name: 'Firebase', level: 80 },
    ],
  },
  {
    name: 'Tools',
    skills: [
      { name: 'Git', level: 90 },
      { name: 'Docker', level: 75 },
      { name: 'GitHub Actions', level: 70 },
      { name: 'VS Code', level: 95 },
    ],
  },
  {
    name: 'Other',
    skills: [
      { name: 'JWT Authentication', level: 85 },
      { name: 'Socket.IO', level: 75 },
      { name: 'API Integration', level: 90 },
      { name: 'Webhooks', level: 80 },
    ],
  },
];