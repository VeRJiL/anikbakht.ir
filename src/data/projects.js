export const projects = [
  {
    id: 1,
    title: "Project Alpha",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/api/placeholder/400/250",
    technologies: ["Go", "Docker", "Microservices", "PostgreSQL", "Redis", "Kubernetes"],
    category: "Backend",
    githubUrl: "https://github.com/username/project-alpha",
    liveUrl: "https://project-alpha-demo.com",
    featured: true,
    details: {
      overview: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      challenges: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      solutions: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      metrics: ["Lorem ipsum metric", "Dolor sit amet stat", "Consectetur adipiscing", "Sed do eiusmod tempor"]
    }
  },
  {
    id: 2,
    title: "Project Beta",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: "/api/placeholder/400/250",
    technologies: ["React", "TypeScript", "D3.js", "WebSocket", "Node.js", "MongoDB"],
    category: "Frontend",
    githubUrl: "https://github.com/username/project-beta",
    liveUrl: "https://project-beta-demo.com",
    featured: true,
    details: {
      overview: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      challenges: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      solutions: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
      metrics: ["Ut enim ad minim", "Quis nostrud exercitation", "Ullamco laboris nisi", "Ex ea commodo consequat"]
    }
  },
  {
    id: 3,
    title: "Project Gamma",
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    image: "/api/placeholder/400/250",
    technologies: ["Docker", "Kubernetes", "Terraform", "Jenkins", "Prometheus", "Grafana"],
    category: "DevOps",
    githubUrl: "https://github.com/username/project-gamma",
    liveUrl: null,
    featured: false,
    details: {
      overview: "Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt.",
      challenges: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni.",
      solutions: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
      metrics: ["Totam rem aperiam", "Eaque ipsa quae", "Ab illo inventore", "Veritatis et quasi"]
    }
  },
  {
    id: 4,
    title: "Project Delta",
    description: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
    image: "/api/placeholder/400/250",
    technologies: ["Go", "Redis", "JWT", "gRPC", "Prometheus"],
    category: "Backend",
    githubUrl: "https://github.com/username/project-delta",
    liveUrl: null,
    featured: false,
    details: {
      overview: "Sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
      challenges: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.",
      solutions: "Nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate.",
      metrics: ["Sed quia non numquam", "Eius modi tempora", "Ut labore et dolore", "Magnam aliquam quaerat"]
    }
  },
  {
    id: 5,
    title: "Project Epsilon",
    description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum.",
    image: "/api/placeholder/400/250",
    technologies: ["Python", "Apache Kafka", "PostgreSQL", "Docker", "TensorFlow"],
    category: "Data Engineering",
    githubUrl: "https://github.com/username/project-epsilon",
    liveUrl: null,
    featured: false,
    details: {
      overview: "Deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.",
      challenges: "Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
      solutions: "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis.",
      metrics: ["Deleniti atque corrupti", "Quos dolores et quas", "Molestias excepturi sint", "Occaecati cupiditate"]
    }
  },
  {
    id: 6,
    title: "Project Zeta",
    description: "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates.",
    image: "/api/placeholder/400/250",
    technologies: ["React", "Service Workers", "IndexedDB", "Push API", "Workbox"],
    category: "Frontend",
    githubUrl: "https://github.com/username/project-zeta",
    liveUrl: "https://project-zeta-demo.com",
    featured: true,
    details: {
      overview: "Repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus.",
      challenges: "Ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
      solutions: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
      metrics: ["Repudiandae sint", "Molestiae non recusandae", "Itaque earum rerum", "Hic tenetur sapiente"]
    }
  }
];

export const projectCategories = [
  "All",
  "Frontend", 
  "Backend",
  "DevOps",
  "Data Engineering"
];

export const allTechnologies = [
  "Go",
  "React", 
  "PHP",
  "Docker",
  "Microservices",
  "Performance Tuning",
  "TypeScript",
  "Node.js",
  "PostgreSQL",
  "Redis",
  "Kubernetes",
  "Python",
  "MongoDB",
  "Apache Kafka",
  "TensorFlow"
];