export interface TimelineItemType {
  id: number;
  type: 'work' | 'education';
  title: string;
  organization: string;
  location: string;
  startDate: string;
  endDate: string | 'Present';
  description: string;
  skills?: string[];
  highlights?: string[];
}

export const timelineData: TimelineItemType[] = [
  {
    id: 1,
    type: 'work',
    title: 'Senior Fullstack Developer',
    organization: 'Tech Innovations Inc.',
    location: 'San Francisco, CA',
    startDate: '2021',
    endDate: 'Present',
    description: 'Leading development of enterprise SaaS applications with a focus on performance optimization and scalability.',
    skills: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Docker', 'Kubernetes'],
    highlights: [
      'Led a team of 5 developers to rebuild the company\'s flagship product, resulting in 40% faster load times and improved customer satisfaction',
      'Architected and implemented a microservices infrastructure that improved system reliability by 99.9%',
      'Introduced automated testing practices that  regression bugs by 70%',
      'Mentored junior developers and established code review and documentation standards'
    ]
  },
  {
    id: 2,
    type: 'work',
    title: 'Fullstack Developer',
    organization: 'Digital Solutions Group',
    location: 'Austin, TX',
    startDate: '2019',
    endDate: '2021',
    description: 'Developed custom web applications for clients across various industries.',
    skills: ['React', 'Redux', 'Express.js', 'MongoDB', 'GraphQL', 'Azure'],
    highlights: [
      'Built and deployed over 15 client web applications with complex requirements',
      'Designed and implemented RESTful APIs and GraphQL endpoints for mobile and web clients',
      'Optimized database queries and implemented caching strategies reducing response times by 60%',
      'Collaborated  with UI/UX designers to deliver pixel-perfect implementations'
    ]
  },
  {
    id: 3,
    type: 'work',
    title: 'Frontend Developer',
    organization: 'WebCraft Studios',
    location: 'Seattle, WA',
    startDate: '2017',
    endDate: '2019',
    description: 'Specialized in creating responsive, interactive user interfaces for web applications.',
    skills: ['JavaScript', 'React', 'CSS/SASS', 'Webpack', 'Jest', 'Figma'],
    highlights: [
      'Developed interactive dashboards for data visualization using D3.js and React',
      'Improved website accessibility to meet WCAG 2.1 AA standards',
      'Implemented state management patterns using Redux and Context API',
      'Reduced bundle sizes by 45% through code splitting and lazy loading'
    ]
  },
  {
    id: 4,
    type: 'education',
    title: 'Master of Science in Computer Science',
    organization: 'Stanford University',
    location: 'Stanford, CA',
    startDate: '2015',
    endDate: '2017',
    description: 'Specialized in Software Engineering and Distributed Systems.',
    highlights: [
      'GPA: 3.9/4.0',
      'Teaching Assistant for "Advanced Web Technologies" course',
      'Master\'s thesis: "Optimizing Microservices Communication in Cloud Environments"',
      'Recipient of the Department of Computer Science Academic Excellence Award'
    ]
  },
  {
    id: 5,
    type: 'education',
    title: 'Bachelor of Science in Computer Science',
    organization: 'University of Washington',
    location: 'Seattle, WA',
    startDate: '2011',
    endDate: '2015',
    description: 'Focus on software development and algorithms with a minor in Mathematics.',
    highlights: [
      'GPA: 3.8/4.0',
      'President of the Web Development Club',
      'Senior project: "Real-time Collaborative Coding Environment"',
      'Dean\'s List all semesters'
    ]
  }
];
