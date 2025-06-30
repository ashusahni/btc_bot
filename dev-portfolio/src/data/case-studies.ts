export interface CaseStudyType {
  id: number;
  title: string;
  slug: string;
  client: string;
  timeline: string;
  role: string;
  description: string;
  challenges: string[];
  solutions: string[];
  technologies: string[];
  images: {
    main: string;
    gallery: string[];
  };
  results: {
    title: string;
    description: string;
  }[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
  nextProject: string;
  prevProject: string;
}

export const caseStudies: CaseStudyType[] = [
  {
    id: 1,
    title: "E-commerce Platform Redesign",
    slug: "ecommerce-platform-redesign",
    client: "Fashion Retailer Co.",
    timeline: "3 months",
    role: "Lead Frontend Developer",
    description: "A complete redesign of an e-commerce platform for a fashion retailer. The project involved creating a modern, responsive user interface with improved navigation, product filtering, and checkout flow to increase conversion rates and customer satisfaction.",
    challenges: [
      "The existing platform had slow page load times, affecting user experience and SEO rankings",
      "Complex product filtering requirements with multiple attributes and options",
      "Cart abandonment rate was high due to a complicated checkout process",
      "Mobile experience was poor with inconsistent UI elements"
    ],
    solutions: [
      "Implemented Next.js for server-side rendering and static generation to improve page load performance",
      "Created a dynamic filtering system with Elasticsearch integration for fast product searches",
      "Redesigned the checkout flow, reducing steps from 5 to 3 and implementing address auto-complete",
      "Built a fully responsive design system with Tailwind CSS for consistent UI across all devices",
      "Added product recommendation engine  machine learning algorithms"
    ],
    technologies: [
      "Next.js", "React", "Tailwind CSS", "TypeScript", "Elasticsearch", "Redux Toolkit", "Stripe API", "Jest"
    ],
    images: {
      main: "https://images.unsplash.com/photo-1557821552-17105176677c?w=1200&h=630&fit=crop&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1600264796558-858b0f9f5e66?w=800&h=600&fit=crop&q=80",
        "https://images.unsplash.com/photo-1520333789090-1afc82db536a?w=800&h=600&fit=crop&q=80",
        "https://images.unsplash.com/photo-1571867424487-3e8fec7b9567?w=800&h=600&fit=crop&q=80"
      ]
    },
    results: [
      {
        title: "40% Faster Load Times",
        description: "Page load times were reduced from an average of 4.2 seconds to 1.8 seconds, improving user experience and SEO rankings."
      },
      {
        title: "25% Increase in Conversion Rate",
        description: "The streamlined checkout process and improved product discovery led to a significant increase in conversion rates."
      },
      {
        title: "35% Reduction in Cart Abandonment",
        description: "Simplified checkout flow resulted in more completed purchases, especially on mobile devices."
      },
      {
        title: "65% More Mobile Purchases",
        description: "The responsive redesign significantly increased the number of customers completing purchases on mobile devices."
      }
    ],
    testimonial: {
      quote: "The redesigned platform completely transformed our online business. Page speed improvements and the intuitive mobile experience have directly led to increased sales and customer satisfaction.",
      author: "Sarah Johnson",
      role: "E-commerce Director, Fashion Retailer Co."
    },
    nextProject: "social-networking-app",
    prevProject: "inventory-management-system"
  },
  {
    id: 2,
    title: "Social Networking Application",
    slug: "social-networking-app",
    client: "ConnectMe Inc.",
    timeline: "6 months",
    role: "Fullstack Developer",
    description: "Developed a feature-rich social networking platform from concept to launch, focusing on real-time interactions, content sharing, and community building. The application supports text posts, media sharing, live chat, and interest-based communities.",
    challenges: [
      "Real-time messaging and notification system with minimal latency",
      "Handling media uploads and processing efficiently",
      "Designing a scalable database schema that could handle millions of users",
      "Implementing robust content moderation systems",
      "Ensuring data privacy and security compliance"
    ],
    solutions: [
      "Built a microservices architecture for better scalability and maintainability",
      "Implemented WebSockets for real-time messaging and notifications",
      "Created a CDN-integrated media processing pipeline for optimizing images and videos",
      "Designed a MongoDB database with advanced indexing for fast queries",
      "Built OAuth 2.0 authentication with multi-factor authentication support",
      "Integrated a machine learning-based content moderation system"
    ],
    technologies: [
      "Next.js", "Node.js", "GraphQL", "MongoDB", "WebSockets", "Redis", "AWS S3", "Docker", "Kubernetes"
    ],
    images: {
      main: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=1200&h=630&fit=crop&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=600&fit=crop&q=80",
        "https://images.unsplash.com/photo-1516251193007-45ef944ab0c6?w=800&h=600&fit=crop&q=80",
        "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&h=600&fit=crop&q=80"
      ]
    },
    results: [
      {
        title: "100,000 Users Within First Month",
        description: "The platform attracted 100,000 active users within the first month of launch, exceeding initial projections."
      },
      {
        title: "99.9% Uptime",
        description: "The microservices architecture ensured high availability even during traffic spikes."
      },
      {
        title: "300ms Average API Response Time",
        description: "Optimized database queries and caching strategies resulted in fast API response times even under load."
      },
      {
        title: "50M+ Daily Messages",
        description: "The WebSocket implementation efficiently handled over 50 million daily messages with minimal latency."
      }
    ],
    testimonial: {
      quote: "Working with such a skilled developer transformed our vision into reality. The scalable architecture has allowed us to grow rapidly without technical limitations, and the user experience has received praise from our community.",
      author: "Michael Chen",
      role: "CTO, ConnectMe Inc."
    },
    nextProject: "inventory-management-system",
    prevProject: "ecommerce-platform-redesign"
  },
  {
    id: 3,
    title: "Inventory Management System",
    slug: "inventory-management-system",
    client: "Global Logistics LLC",
    timeline: "4 months",
    role: "Backend Developer & System Architect",
    description: "Designed and implemented a comprehensive inventory management system for a logistics company operating in multiple countries. The system includes real-time tracking, forecasting, automated reordering, and detailed analytics.",
    challenges: [
      "Integration with legacy warehouse systems and IoT devices",
      "Handling inventory management across multiple warehouses and countries",
      "Implementing accurate forecasting algorithms based on historical data",
      "Meeting strict security and compliance requirements for international operations",
      "Creating a system that could handle high transaction volumes"
    ],
    solutions: [
      "Developed a modular backend with Node.js and Express with a flexible API layer",
      "Created integration adapters for various legacy systems and IoT devices",
      "Implemented a sophisticated forecasting engine using time-series analysis",
      "Designed a robust PostgreSQL database with partitioning for high-volume data",
      "Built a comprehensive reporting and analytics dashboard",
      "Implemented role-based access control with detailed audit logging"
    ],
    technologies: [
      "Node.js", "Express", "PostgreSQL", "Redis", "Docker", "Kubernetes", "GraphQL", "TypeScript", "RabbitMQ"
    ],
    images: {
      main: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&h=630&fit=crop&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1553413077-190dee96b258?w=800&h=600&fit=crop&q=80",
        "https://images.unsplash.com/photo-1566633806327-68e152aaf26d?w=800&h=600&fit=crop&q=80",
        "https://images.unsplash.com/photo-1568801556940-1bc34dd58be1?w=800&h=600&fit=crop&q=80"
      ]
    },
    results: [
      {
        title: "30% Reduction in Inventory Costs",
        description: "Improved forecasting and automated reordering led to significant inventory cost savings."
      },
      {
        title: "45% Fewer Stockouts",
        description: "Better inventory management virtually eliminated stockout situations across all warehouses."
      },
      {
        title: "85% Faster Inventory Audits",
        description: "Real-time tracking and improved data organization dramatically reduced audit times."
      },
      {
        title: "60% Improvement in Order Fulfillment Speed",
        description: "Optimized inventory processes resulted in much faster order fulfillment."
      }
    ],
    testimonial: {
      quote: "This inventory management system has transformed our operations. We now have real-time visibility across all locations, predictive insights for purchasing, and a level of efficiency we never thought possible.",
      author: "Robert Lee",
      role: "Operations Director, Global Logistics LLC"
    },
    nextProject: "ecommerce-platform-redesign",
    prevProject: "social-networking-app"
  }
];
