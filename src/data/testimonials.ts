export interface Testimonial {
  name: string;
  title: string;
  company: string;
  quote: string;
}

export const testimonialData: Testimonial[] = [
  {
    name: 'Samantha Thompson',
    title: 'Product Manager',
    company: 'TechFlow',
    quote: 'Working with this developer was a pleasure. Their ability to break down complex tasks and deliver clean, functional code exceeded expectations. The project was delivered ahead of schedule, and the quality of work was exceptional.',
  },
  {
    name: 'David Lee',
    title: 'CTO',
    company: 'Innovate Design',
    quote: 'Our team hired this freelancer for a custom dashboard build. They delivered ahead of schedule and were always available for quick clarifications. The code quality was excellent, and they provided thorough documentation. A true professional!',
  },
  {
    name: 'Michael Rodriguez',
    title: 'Founder',
    company: 'StartupLaunch',
    quote: 'As a non-technical founder, I needed someone who could translate my vision into reality. This developer not only built exactly what I needed but also provided valuable insights that improved the final product. Would definitely work with them again.',
  },
  {
    name: 'Jennifer Wu',
    title: 'Marketing Director',
    company: 'GrowthBrand',
    quote: 'We needed a developer who could integrate various APIs with our marketing platform. The solution provided was elegant and extremely reliable. They were responsive, professional, and delivered a product that exceeded our expectations.',
  },
  {
    name: 'Robert Johnson',
    title: 'Project Lead',
    company: 'Enterprise Solutions',
    quote: 'What impressed me most was the attention to detail and commitment to best practices. The code was clean, well-documented, and easy to maintain. Even months after project completion, we haven\'t encountered any significant issues.',
  }
];