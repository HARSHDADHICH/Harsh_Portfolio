export interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  technologies: string[];
  features: string[];
  results: string;
  liveUrl?: string;
  githubUrl?: string;
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: 'ClockSession',
    description: 'A comprehensive employee time tracking system with real-time monitoring and detailed reporting capabilities. Designed for teams of all sizes, this application helps businesses improve accountability and manage work hours efficiently.',
    category: 'web',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Socket.IO', 'Material UI'],
    features: [
      'Real-time activity tracking with status updates',
      'Customizable break schedules and notifications',
      'Comprehensive analytics dashboard with exportable reports',
      'User role management with permission controls',
      'Mobile-responsive design for on-the-go access'
    ],
    results: 'This tool helped client teams improve time accountability by 30%, reduce overtime costs, and streamline payroll processing.',
    liveUrl: 'https://example.com/clocksession',
    githubUrl: 'https://github.com/example/clocksession'
  },
  {
    id: 2,
    title: 'DevPortal',
    description: 'A developer-facing API management platform where users can register, manage their API keys, and monitor usage. This portal provides comprehensive documentation, testing tools, and analytics for developers integrating with client services.',
    category: 'web',
    image: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    technologies: ['Next.js', 'Supabase', 'Express', 'JWT Auth', 'Tailwind CSS'],
    features: [
      'Interactive API documentation with code examples',
      'Self-service API key management',
      'Usage analytics and quota monitoring',
      'Webhook configuration interface',
      'OpenAPI specification support'
    ],
    results: 'Reduced support ticket volume by 45% while increasing API adoption rate. The portal currently serves over 500 third-party developers.',
    liveUrl: 'https://example.com/devportal',
    githubUrl: 'https://github.com/example/devportal'
  },
  {
    id: 3,
    title: 'InOffice Login System',
    description: 'A secure, locally hosted authentication system for internal company use. This application provides a streamlined login experience while maintaining enterprise-grade security protocols and audit logging capabilities.',
    category: 'enterprise',
    image: 'https://images.pexels.com/photos/4308103/pexels-photo-4308103.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    technologies: ['React', 'Node.js', 'Docker', 'JWT', 'MongoDB'],
    features: [
      'Multi-factor authentication support',
      'Single sign-on integration',
      'Comprehensive audit logging',
      'Password policy enforcement',
      'Self-service account recovery'
    ],
    results: 'Improved security posture while reducing login-related help desk tickets by 60%. Deployed to 5 corporate offices serving 200+ employees.',
    githubUrl: 'https://github.com/example/inoffice'
  },
  {
    id: 4,
    title: 'FinTrack Dashboard',
    description: 'A financial analysis dashboard providing real-time insights into business metrics, expense tracking, and revenue forecasting. This application helps financial teams visualize complex data and make informed decisions.',
    category: 'dashboard',
    image: 'https://images.pexels.com/photos/7947757/pexels-photo-7947757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    technologies: ['React', 'D3.js', 'Node.js', 'PostgreSQL', 'Redux'],
    features: [
      'Interactive data visualization with drill-down capabilities',
      'Customizable dashboard widgets',
      'Automated report generation and distribution',
      'Budget vs. actual expense comparison',
      'Revenue forecasting models'
    ],
    results: 'Helped clients reduce budget planning time by 40% and improved forecast accuracy by 25%. Used by finance teams across multiple organizations.',
    liveUrl: 'https://example.com/fintrack'
  },
  {
    id: 5,
    title: 'InventoryPro',
    description: 'An inventory management system for small to medium-sized e-commerce businesses. This application streamlines order fulfillment, tracks stock levels, and provides insights into inventory performance and turnover rates.',
    category: 'enterprise',
    image: 'https://images.pexels.com/photos/4481323/pexels-photo-4481323.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    technologies: ['React', 'Firebase', 'Node.js', 'Express', 'Stripe API'],
    features: [
      'Barcode scanning for rapid inventory updates',
      'Low stock alerts and automated reordering',
      'Order management and fulfillment tracking',
      'Supplier management and purchase orders',
      'Integration with popular e-commerce platforms'
    ],
    results: 'Reduced inventory discrepancies by 35% and improved order fulfillment speed by 28% for client businesses. Currently managing over $2M in inventory assets.',
    liveUrl: 'https://example.com/inventorypro',
    githubUrl: 'https://github.com/example/inventorypro'
  },
  {
    id: 6,
    title: 'HealthConnect',
    description: 'A telehealth platform connecting patients with healthcare providers through secure video consultations. This HIPAA-compliant application includes appointment scheduling, medical record management, and prescription requests.',
    category: 'healthcare',
    image: 'https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    technologies: ['Next.js', 'WebRTC', 'Node.js', 'MongoDB', 'Redux'],
    features: [
      'End-to-end encrypted video consultations',
      'Digital waiting room with queue management',
      'Electronic prescription system',
      'Secure messaging between patients and providers',
      'Integration with electronic health record systems'
    ],
    results: 'Increased patient satisfaction scores by 35% while reducing no-show rates by 45%. Platform currently serves 12 healthcare providers with 2,000+ monthly consultations.',
    liveUrl: 'https://example.com/healthconnect'
  }
];