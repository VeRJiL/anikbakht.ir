export const projects = [
  {
    id: 1,
    title: "Microservices Architecture Migration",
    description: "Led the transformation of a monolithic PHP application to a scalable microservices architecture using NestJS and advanced caching strategies.",
    image: "/api/placeholder/400/250",
    technologies: ["PHP", "NestJS", "Redis", "RabbitMQ", "Docker", "Microservices"],
    category: "Backend",
    githubUrl: null,
    liveUrl: null,
    featured: true,
    details: {
      overview: "Spearheaded the migration from monolithic to microservices architecture, resulting in improved system scalability and enhanced service reliability.",
      challenges: "Legacy monolithic architecture was causing scalability issues and deployment bottlenecks with increasing user load.",
      solutions: "Implemented microservices using NestJS with RabbitMQ message broker integration and Redis caching strategies for high-traffic endpoints.",
      metrics: ["50% database load reduction", "200ms to 80ms response time", "25K+ daily requests", "85% code coverage achieved"]
    }
  },
  {
    id: 2,
    title: "Go Microservices Framework",
    description: "Created a mini development framework using Go, Gin, GORM, and other modern technologies to accelerate microservice development.",
    image: "/api/placeholder/400/250",
    technologies: ["Go", "Gin", "GORM", "PostgreSQL", "Redis", "AWS S3", "RabbitMQ", "Elasticsearch"],
    category: "Backend",
    githubUrl: null,
    liveUrl: null,
    featured: true,
    details: {
      overview: "Developed a comprehensive framework that accelerates microservice development with built-in database management, caching, and message queuing.",
      challenges: "Need for rapid microservice development while maintaining code quality and consistency across multiple services.",
      solutions: "Built a standardized framework with Go, Gin, GORM, integrated with PostgreSQL, Redis, AWS S3, RabbitMQ, and Elasticsearch for logging.",
      metrics: ["70 seconds to 3 seconds API response", "Accelerated development cycles", "Standardized microservice architecture", "Integrated logging and monitoring"]
    }
  },
  {
    id: 3,
    title: "PWA Auction Platform",
    description: "Developed a Progressive Web Application for online car sales auction system with real-time bidding capabilities.",
    image: "/api/placeholder/400/250",
    technologies: ["PHP", "PWA", "Redis", "WebSocket", "Service Workers", "Push API"],
    category: "Frontend",
    githubUrl: null,
    liveUrl: null,
    featured: false,
    details: {
      overview: "Delivered a complete PWA auction application for online car sales after taking over frontend responsibilities.",
      challenges: "Need to deliver a complex auction system with real-time bidding after team departure, ensuring optimal user experience.",
      solutions: "Implemented PWA with service workers, push notifications, and real-time bidding using WebSocket connections and Redis for caching.",
      metrics: ["Real-time bidding system", "Offline-capable PWA", "Push notification support", "Optimized mobile experience"]
    }
  },
  {
    id: 4,
    title: "Service-Oriented Architecture Implementation",
    description: "Implemented SOA architecture supporting 3K concurrent users through optimization techniques including Redis caching and async processing.",
    image: "/api/placeholder/400/250",
    technologies: ["PHP", "SOA", "Redis", "Queue Processing", "Async Processing"],
    category: "Backend",
    githubUrl: null,
    liveUrl: null,
    featured: false,
    details: {
      overview: "Architected and implemented Service-Oriented Architecture to handle high-traffic loads with optimized performance.",
      challenges: "System needed to support thousands of concurrent users while maintaining performance and reliability.",
      solutions: "Implemented SOA with Redis caching, queue-based async processing, and direct service communication patterns.",
      metrics: ["3K concurrent users supported", "Reduced server loads", "Queue-based async processing", "Optimized service communication"]
    }
  },
  {
    id: 5,
    title: "CI/CD Pipeline Implementation",
    description: "Implemented comprehensive CI/CD pipelines with automated testing and code quality checks for safe deployments.",
    image: "/api/placeholder/400/250",
    technologies: ["GitHub Actions", "Docker", "TDD", "Code Quality", "Automated Testing"],
    category: "DevOps",
    githubUrl: null,
    liveUrl: null,
    featured: false,
    details: {
      overview: "Established robust CI/CD pipelines with automated testing frameworks achieving high code coverage and quality standards.",
      challenges: "Need for reliable deployment processes with automated quality checks to prevent production issues.",
      solutions: "Implemented comprehensive CI/CD with GitHub Actions, automated testing, and code quality gates for safe main branch deployments.",
      metrics: ["85% code coverage achieved", "65% reduction in production bugs", "Automated deployment pipeline", "Code quality enforcement"]
    }
  },
  {
    id: 6,
    title: "Legacy System Modernization",
    description: "Transformed legacy codebase to modern framework and executed PHP version upgrades, significantly improving development efficiency.",
    image: "/api/placeholder/400/250",
    technologies: ["PHP", "Laravel", "Design Patterns", "Code Refactoring", "Performance Optimization"],
    category: "Backend",
    githubUrl: null,
    liveUrl: null,
    featured: true,
    details: {
      overview: "Led comprehensive modernization of legacy systems, implementing modern frameworks and best practices.",
      challenges: "Legacy PHP 5.7 codebase with outdated practices causing maintenance issues and slow development cycles.",
      solutions: "Executed systematic upgrade to PHP 7, implemented modern frameworks, established design patterns training, and code optimization.",
      metrics: ["50% reduction in development cycles", "30% enhanced code maintainability", "50% cut in maintenance costs", "Modern framework implementation"]
    }
  }
];

export const projectCategories = [
  "All",
  "Frontend",
  "Backend",
  "DevOps",
  "Full Stack"
];

export const allTechnologies = [
  "Go",
  "PHP",
  "NestJS",
  "React",
  "TypeScript",
  "Node.js",
  "Docker",
  "Microservices",
  "PostgreSQL",
  "Redis",
  "RabbitMQ",
  "AWS S3",
  "Elasticsearch",
  "TDD",
  "CI/CD",
  "SOA",
  "PWA",
  "Gin",
  "GORM",
  "Laravel"
];